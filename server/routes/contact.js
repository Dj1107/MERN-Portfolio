const express = require("express");
const rateLimit = require("express-rate-limit");
const Message = require("../models/Message");

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again later." },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact - save a contact-form message
router.post("/", limiter, async (req, res) => {
  const { name, email, message } = req.body || {};

  if (typeof name !== "string" || !name.trim() || name.length > 100) {
    return res.status(400).json({ error: "Please enter your name." });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }
  if (typeof message !== "string" || message.trim().length < 5 || message.length > 2000) {
    return res.status(400).json({ error: "Message must be 5-2000 characters." });
  }

  try {
    await Message.create({ name, email, message });
    res.status(201).json({ ok: true, message: "Thanks! Your message has been sent." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Could not save your message. Try again later." });
  }
});

module.exports = router;

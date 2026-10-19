const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// GET /api/projects - list all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 }).lean();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Could not load projects" });
  }
});

module.exports = router;

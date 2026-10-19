import { useState } from "react";
import { sendMessage } from "../api.js";
import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [state, setState] = useState({ type: "idle", text: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ type: "sending", text: "Sending…" });
    try {
      const res = await sendMessage(form);
      setState({ type: "ok", text: res.message });
      setForm(empty);
    } catch (err) {
      setState({ type: "error", text: err.message });
    }
  }

  return (
    <section id="contact" className="section alt">
      <div className="container contact-grid">
        <Reveal>
          <p className="kicker">04 · Let's talk</p>
          <h2 className="section-title">Get in <span className="red">touch</span></h2>
          <p className="body">
            Open to entry-level AI/ML roles and internships. Send me a message, or reach me directly:
          </p>
          <ul className="list plain">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </Reveal>
        <form className="card form glow reveal in" onSubmit={onSubmit} noValidate>
          <label>
            Name
            <input name="name" value={form.name} onChange={onChange} required maxLength={100} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={onChange} required maxLength={200} />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={onChange} required maxLength={2000} />
          </label>
          <button className="btn primary" disabled={state.type === "sending"}>
            {state.type === "sending" ? "Sending…" : "Send message"}
          </button>
          {state.text && state.type !== "sending" && (
            <p className={`status ${state.type}`} role="status">{state.text}</p>
          )}
        </form>
      </div>
    </section>
  );
}

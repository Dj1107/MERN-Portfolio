import { profile } from "../data/profile.js";

export default function Hero() {
  const parts = profile.name.split(" ");
  const last = parts.pop();
  const first = parts.join(" ");
  return (
    <section id="top" className="hero">
      <div className="hero-spot" aria-hidden="true" />
      <div className="hero-art" aria-hidden="true">
        <span className="orbit o1" />
        <span className="orbit o2" />
        <span className="orbit o3" />
        <span className="hero-mono">
          {parts[0]?.[0] ?? ""}
          {last[0]}
        </span>
      </div>
      <div className="container hero-inner">
        <p className="eyebrow stagger" style={{ "--i": 0 }}>
          <span className="badge">Portfolio</span> Hello, I'm
        </p>
        <h1 className="stagger" style={{ "--i": 1 }}>
          {first} <span className="red">{last}</span>
        </h1>
        <h2 className="role stagger" style={{ "--i": 2 }}>{profile.role}</h2>
        <p className="lead stagger" style={{ "--i": 3 }}>{profile.tagline}</p>
        <div className="cta stagger" style={{ "--i": 4 }}>
          <a className="btn primary lg" href="#projects">▶ View projects</a>
          <a className="btn lg" href="#contact">Get in touch</a>
          <a className="btn lg" href={profile.resume} download>Resume ↓</a>
          <a className="btn ghost lg" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <p className="meta stagger" style={{ "--i": 5 }}>
          <span className="mono">{profile.location}</span>
        </p>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}

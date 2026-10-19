import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="div">
          <p className="kicker">01 · Who I am</p>
          <h2 className="section-title">About <span className="red">me</span></h2>
        </Reveal>
        <div className="about-grid">
          <div>
            {profile.about.map((p, i) => (
              <Reveal as="p" key={i} className="body" delay={i * 90}>{p}</Reveal>
            ))}
            <Reveal delay={200}>
              <h3 className="sub">Achievements</h3>
              <ul className="list">
                {profile.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            <Reveal><h3 className="sub">Education</h3></Reveal>
            <div className="timeline">
              {profile.education.map((e, i) => (
                <Reveal key={e.school} className="card glow" delay={i * 120}>
                  <div className="card-top">
                    <strong>{e.school}</strong>
                    <span className="muted mono">{e.period}</span>
                  </div>
                  <p className="body">{e.detail}</p>
                  {e.extra && <span className="chip">{e.extra}</span>}
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <h3 className="sub">Certifications</h3>
              <div className="chips">
                {profile.certifications.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
              <h3 className="sub">Languages</h3>
              <div className="chips">
                {profile.languages.map((l) => (
                  <span key={l.name} className="chip">{l.name} · {l.level}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

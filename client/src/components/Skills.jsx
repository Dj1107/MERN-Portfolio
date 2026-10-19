import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <Reveal>
          <p className="kicker">02 · Toolkit</p>
          <h2 className="section-title">Technical <span className="red">skills</span></h2>
        </Reveal>
        <div className="skills-grid">
          {Object.entries(profile.skills).map(([group, items], i) => (
            <Reveal key={group} className="card glow" delay={(i % 3) * 90}>
              <h3 className="sub">{group}</h3>
              <div className="chips">
                {items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

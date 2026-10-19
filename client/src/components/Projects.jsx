import { useEffect, useRef, useState } from "react";
import { getProjects } from "../api.js";
import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | fallback
  const rowRef = useRef(null);

  const scrollRow = (dir) => {
    const el = rowRef.current;
    if (el) el.scrollBy({ left: dir * Math.max(300, el.clientWidth * 0.8), behavior: "smooth" });
  };

  useEffect(() => {
    let cancelled = false;
    getProjects()
      .then((data) => {
        if (cancelled) return;
        if (Array.isArray(data) && data.length) {
          setProjects(data);
          setStatus("ready");
        } else {
          setProjects(profile.fallbackProjects);
          setStatus("fallback");
        }
      })
      .catch(() => {
        if (cancelled) return;
        setProjects(profile.fallbackProjects);
        setStatus("fallback");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="row-head">
          <div>
            <p className="kicker">03 · Featured work</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="row-btns">
            <button className="icon-btn" aria-label="Scroll projects left" onClick={() => scrollRow(-1)}>‹</button>
            <button className="icon-btn" aria-label="Scroll projects right" onClick={() => scrollRow(1)}>›</button>
          </div>
        </Reveal>
        {status === "fallback" && (
          <p className="notice">Showing saved copy – the live API is currently unreachable.</p>
        )}
      </div>
      {status === "loading" ? (
        <div className="container" aria-busy="true" aria-live="polite">
          <p className="sr-only">Loading projects…</p>
          <div className="projects-row">
            {[0, 1, 2].map((i) => <div key={i} className="skeleton" />)}
          </div>
        </div>
      ) : (
        <div className="projects-row" ref={rowRef} tabIndex={0} aria-label="Projects">
          {projects.map((p, i) => (
            <article key={p._id} className="card project" style={{ "--i": i }}>
              <div className="poster" aria-hidden="true">
                <span className="poster-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="badge">{p.tech?.[0] || "Project"}</span>
              </div>
              <div className="project-body">
                <div className="card-top">
                  <h3>{p.title}</h3>
                  {p.period && <span className="muted mono">{p.period}</span>}
                </div>
                <p className="body">{p.summary}</p>
                {p.highlights?.length > 0 && (
                  <ul className="list">
                    {p.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="chips">
                  {p.tech?.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="links">
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

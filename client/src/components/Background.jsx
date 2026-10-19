import { useEffect, useRef } from "react";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + (i % 3),
  dur: 14 + (i % 6) * 3,
  delay: -((i * 2.3) % 18),
}));

// Fixed, decorative, pointer-events:none layer behind all content.
// Layers drift at different speeds on scroll (parallax) via CSS vars.
export default function Background() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty("--sy", String(window.scrollY));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg" ref={ref} aria-hidden="true">
      <div className="bg-layer l1">
        <span className="blob b1" />
        <span className="blob b2" />
      </div>
      <div className="bg-layer l2">
        <span className="shape sq s1" />
        <span className="shape sq s2" />
        <span className="shape ring r1" />
        <span className="shape ring r2" />
        <span className="shape tri t1" />
      </div>
      <div className="bg-layer l3">
        <span className="streak k1" />
        <span className="streak k2" />
        <span className="streak k3" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="bg-vignette" />
    </div>
  );
}

// Base URL of the Express API. Empty in dev (Vite proxy handles /api).
const BASE = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export async function getProjects() {
  const res = await fetch(`${BASE}/api/projects`);
  if (!res.ok) throw new Error("Failed to load projects");
  return res.json();
}

export async function sendMessage(payload) {
  const res = await fetch(`${BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Something went wrong.");
  return data;
}

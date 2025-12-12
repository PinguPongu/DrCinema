const API_BASE = "https://api.kvikmyndir.is";

export async function apiGet(path: string, token: string) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "GET",
    headers: {
      "x-access-token": token,       
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET ${path} failed ${res.status}: ${text}`);
  }

  return res.json();
}

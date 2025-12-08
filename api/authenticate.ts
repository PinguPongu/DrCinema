import { encode as btoa } from "base-64";

const AUTH_URL = "https://api.kvikmyndir.is/authenticate";

export async function authenticate(): Promise<string> {
  const username = "gudni23";
  const password = "fuckthisshit";
  const credentials = btoa(`${username}:${password}`);

  const res = await fetch(AUTH_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Auth failed ${res.status}: ${text}`);
  }

  const data = await res.json();

  return data.token;
}

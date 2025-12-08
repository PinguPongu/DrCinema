import { encode as btoa } from "base-64";

const API_URL = "http://api.kvikmyndir.is/authenticate";

export async function authenticate() {
  const username = "gudni23";
  const password = "fuckthisshit";

  const credentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), 
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Auth error:", err);
    throw err;
  }
}

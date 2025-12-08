import { encode as btoa } from "base-64";

const API_URL = "http://api.kvikmyndir.is/authenticate";

export async function authenticate() {
  const username = "joehannman";
  const password = "lollachan";

  const credentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      // If the API needs a body, put it here; otherwise you can omit body:
      body: JSON.stringify({}), 
    });

    if (!response.ok) {
      // status is not 2xx
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const data = await response.json();
    return data; // e.g. token or whatever the API returns
  } catch (err) {
    console.error("Auth error:", err);
    throw err;
  }
}

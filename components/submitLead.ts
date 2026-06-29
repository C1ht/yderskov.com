const WORKER_URL = "https://black-unit-19e0.antonyderskov.workers.dev";

// Sæt din Google Apps Script Web App URL her (tilknyttet lottesofiekaae@gmail.com)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwqZ-w0N7_RzG7m9qfC9oZfC6o5N0K2jYv6G9B9Jv7K0m-8tL7M/exec"; 

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  projekt: string;
  message: string;
  _page: string;
}

export async function submitLead(data: LeadData): Promise<boolean> {
  // 1. Send til Cloudflare Worker (for at sende e-mail til Anton)
  const workerPromise = fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // 2. Send til Google Sheets (hvis URL er angivet)
  let sheetPromise = Promise.resolve(new Response());
  if (GOOGLE_SHEET_URL && !GOOGLE_SHEET_URL.includes("AKfycbz_XXXXXXXXXXXX")) {
    sheetPromise = fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors", // no-cors er nødvendigt for Google Apps Script redirects
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  try {
    const [workerRes] = await Promise.all([workerPromise, sheetPromise]);
    return workerRes.ok;
  } catch (error) {
    console.error("Fejl ved afsendelse af lead:", error);
    return false;
  }
}

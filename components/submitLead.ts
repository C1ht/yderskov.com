const WORKER_URL = "https://black-unit-19e0.antonyderskov.workers.dev";

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  projekt: string;
  location: string;
  message: string;
  _page: string;
}

export async function submitLead(data: LeadData): Promise<boolean> {
  try {
    const res = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (error) {
    console.error("Fejl ved afsendelse af lead:", error);
    return false;
  }
}

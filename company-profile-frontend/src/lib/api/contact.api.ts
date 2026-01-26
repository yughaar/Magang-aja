export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function sendContactMessage(payload: ContactPayload) {
  const res = await fetch("http://localhost:1337/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to send contact message");
  }

  return res.json();
}

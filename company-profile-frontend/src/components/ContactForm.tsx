"use client";

import { useState } from "react";
import { sendContactMessage } from "@/lib/api/contact.api";

interface ContactInputItem {
  id: number;
  label: string;
  placeholder: string;
}

interface ContactData {
  input: ContactInputItem[];
  btnText: string;
}

interface ContactFormProps {
  contact: ContactData;
}

export default function ContactForm({ contact }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await sendContactMessage({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      });

      setSuccess("Your message has been sent successfully!");
      e.currentTarget.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-gray-800 mb-2 "
          >
            {contact.input[0].label}
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder={contact.input[0].placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            {contact.input[1].label}
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            placeholder={contact.input[1].placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          {contact.input[2].label}
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          placeholder={contact.input[2].placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          {contact.input[3].label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={contact.input[3].placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm resize-y focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F3732A] text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Sending..." : contact.btnText}
        </button>
      </div>
    </form>
  );
}

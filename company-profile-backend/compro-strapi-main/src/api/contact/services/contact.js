"use strict";

module.exports = {
  async sendEmail({ name, email, subject, message }) {
    await strapi.service("plugin::email.email").send({
      to: process.env.ADMIN_EMAIL,
      from: `"Hanadiv TECH" <${process.env.SMTP_USER}>`,
      replyTo: email,
      subject: subject || "Pesan dari Website",
      text: `
Nama: ${name}
Email: ${email}

Pesan:
${message}
      `,
    });
  },
};

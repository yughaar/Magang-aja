"use strict";

module.exports = {
  async send(ctx) {
    try {
      const { name, email, subject, message } = ctx.request.body;

      if (!name || !email || !message) {
        return ctx.badRequest("Missing required fields");
      }

      await strapi
        .service("api::contact.contact")
        .sendEmail({ name, email, subject, message });

      ctx.send({
        success: true,
        message: "Email sent successfully",
      });
    } catch (error) {
      console.error(error);
      ctx.internalServerError("Failed to send email");
    }
  },
};

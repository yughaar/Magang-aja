"use strict";

/**
 * `services-list-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const populate = {
    image: {
      fields: ["alternativeText", "url"],
    },
  };
  return async (ctx, next) => {
    strapi.log.info("In services-list-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

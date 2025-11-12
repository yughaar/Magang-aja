"use strict";

/**
 * `blogs-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const populate = {
    image: {
      fields: ["alternativeText", "url"],
    },
  };
  return async (ctx, next) => {
    strapi.log.info("In blogs-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

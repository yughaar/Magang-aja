"use strict";

/**
 * `service-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const populate = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            links: {
              populate: {
                icon: {
                  fields: ["alternativeText", "url"],
                },
              },
            },
          },
        },
      },
    },
  };
  return async (ctx, next) => {
    strapi.log.info("In service-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

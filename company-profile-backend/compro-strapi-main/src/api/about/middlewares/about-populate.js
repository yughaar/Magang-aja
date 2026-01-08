"use strict";

/**
 * `about-populate` middleware
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
        "blocks.profile-section": {
          populate: {
            cards: {
              populate: {
                icon: {
                  fields: ["alternativeText", "url"],
                },
              },
            },
          },
        },
        "blocks.stats-section": {
          populate: {
            stats: true,
          },
        },
      },
    },
  };
  return async (ctx, next) => {
    strapi.log.info("In about-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

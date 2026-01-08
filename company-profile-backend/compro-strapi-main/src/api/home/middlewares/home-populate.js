"use strict";

/**
 * `home-populate` middleware
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
        "blocks.why-choose-section": {
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
        "blocks.cta-section": {
          populate: {
            link: {
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
    strapi.log.info("In home-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

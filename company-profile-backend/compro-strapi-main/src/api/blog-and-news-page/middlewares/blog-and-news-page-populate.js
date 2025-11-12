"use strict";

/**
 * `blog-and-news-page-populate` middleware
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
    strapi.log.info("In blog-and-news-page-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

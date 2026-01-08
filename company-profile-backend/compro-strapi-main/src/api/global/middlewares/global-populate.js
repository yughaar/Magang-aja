"use strict";

/**
 * `global-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const populate = {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["alternativeText", "url"],
            },
          },
        },
      },
    },
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
        "blocks.service-section": true,
        "blocks.blog-and-news-sections": true,
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
        "blocks.contact-us-section": {
          populate: {
            cards: {
              populate: {
                icon: {
                  fields: ["alternativeText", "url"],
                },
              },
            },
            input: true,
          },
        },
      },
    },
    footer: {
      populate: {
        brand: true,
        contact: {
          populate: {
            contact: true,
          },
        },
        service: {
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
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};

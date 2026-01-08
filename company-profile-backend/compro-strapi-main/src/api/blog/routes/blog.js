"use strict";

/**
 * blog router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::blog.blog", {
  config: {
    find: {
      middlewares: ["api::blog.blogs-populate"],
    },
    findOne: {
      middlewares: ["api::blog.blogs-populate"],
    },
  },
});

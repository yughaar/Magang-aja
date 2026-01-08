"use strict";

/**
 * services-list router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::services-list.services-list", {
  config: {
    find: {
      middlewares: ["api::services-list.services-list-populate"],
    },
    findOne: {
      middlewares: ["api::services-list.services-list-populate"],
    },
  },
});

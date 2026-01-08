"use strict";

/**
 * global router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::global.global", {
  config: {
    find: {
      middlewares: ["api::global.global-populate"],
    },
  },
});

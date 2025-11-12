'use strict';

/**
 * services-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::services-list.services-list');

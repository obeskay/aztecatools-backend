'use strict';

/**
 * info-general service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-general.info-general');

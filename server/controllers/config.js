"use strict";

const { pluginId } = require("../utils");

module.exports = {
  getConfig: async (ctx) => {
    const config = await strapi.config.get(`plugin.plausible`, {});
    ctx.send(config);
  },
};

import type { Core } from '@strapi/strapi';

const config = ({ strapi }: { strapi: Core.Strapi }) => ({
  getConfig(ctx) {
    ctx.body = strapi.config.get('plugin.strapi-plausible', {});
  },
});

export default config;
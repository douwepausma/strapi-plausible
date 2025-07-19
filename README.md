<div align="center" width="150px">
  <img style="width: 150px; max-width: 150px; height: auto;" src="https://github.com/douwepausma/strapi-plausible/blob/main/public/assets/logo.png" alt="Logo - Strapi Plausible plugin" />
</div>
<div align="center">
  <h1>Strapi + Plausible</h1>
  <p>Add one or more Plausible analytics dashboards to Strapi</p>
</div>
<br/>
<br/>

A plugin for [Strapi](https://github.com/strapi/strapi) that embeds [Plausible](https://plausible.io) analytics dashboards. The Strapi Plausible plugin is inspired by [it's predecessor](https://market.strapi.io/plugins/strapi-plugin-plausible) created by [Devtastic](https://github.com/its-devtastic).

## Supported Strapi version

Currently only Strapi v5 is supported. If you are using Strapi v4 use [this plugin](https://market.strapi.io/plugins/strapi-plugin-plausible) by [Devtastic](https://github.com/its-devtastic) instead.

## Screenshot
<img src="https://github.com/douwepausma/strapi-plausible/blob/main/public/assets/screenshot.png" alt="Screenshot - Strapi Plausible plugin" />

## Installation

With `npm`
```bash
npm install strapi-plausible
```

With `yarn`
```bash
yarn add strapi-plausible
```

In the `config/plugins.js` file add:

```js
module.exports = ({ env }) => ({
  // ...other plugins
  plausible: {
    config: {
      plausibleInstance: 'https://plausible.io', // or your self-hosted url
      domains: [
        {
          name: 'tracked-site.com', // name of the plausible site
          auth: 'lNU0nKCmnSxs3HjjWOKtX' // auth token
        }
      ]
    }
  }
})
```

You can create a shared link in Plausible by going to _Site settings › Visibility_.
It looks something like this:

```text
https://plausible.io/share/tracked-site.com?auth=lNU0nKCmnSxs3HjjWOKtX
```

⚠️ Make sure not to enable password protection for this link

⚠️ If you're using the `strapi::security` middleware with CSP enabled, make sure
to allow `plausible.io` or your self-hosted instance (e.g. `analytics.example.com`) as a `frame-src`. Your `config/middlewares.js` should look something like:

```js
 {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ["https://plausible.io"],
        ...
```

## 📝 License

[MIT License](LICENSE.md) 

Made in 🇳🇱 by [@douwepausma](https://github.com/douwepausma) inspired by [Devtastic](https://devtastic.build/).

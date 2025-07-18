export default [
  {
    method: 'GET',
    path: '/config',
    handler: 'config.getConfig',
    config: {
      auth: false, // or true if it needs auth
    },
  },
];

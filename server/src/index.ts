/**
 * Application methods
 */
// import bootstrap from './bootstrap';
// import destroy from './destroy';
// import register from './register';

/**
 * Plugin server methods
 */
import config from './config';
import configController from './controllers/config';
import routes from './routes';

export default {
  config,
  controllers: {
    config: configController
  },
  routes
};

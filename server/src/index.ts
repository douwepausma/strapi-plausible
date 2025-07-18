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
// import contentTypes from './content-types';
import configController from './controllers/config';
// import middlewares from './middlewares';
// import policies from './policies';
import routes from './routes';
// import services from './services';
import configRoutes from './routes/config';

export default {
  // register,
  // bootstrap,
  // destroy,
  config,
  controllers: {
    config: configController
  },
  routes
  // services,
  // contentTypes,
  // policies,
  // middlewares,
};

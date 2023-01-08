import './config';
import logger from './utils/logger';
import FirebaseDB from './firebase';

(async () => {
  try {
    await FirebaseDB.connect();
    const App = require('./app').default;
    const app = new App();
    app.start();
  } catch (error) {
    logger.info(`Something went wrong when initializing the app ${error} `);
  }
})();

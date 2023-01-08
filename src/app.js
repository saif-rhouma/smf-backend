import express from 'express';
import helmet from 'helmet';
import chalk from 'chalk';
import cors from 'cors';
import httpLogger from 'morgan';

import environment from './config/environment';

import logger from './utils/logger';
import Router from './router';

class App {
  constructor() {
    this.app = express();
    // eslint-disable-next-line no-unused-vars
    this.app.use(httpLogger('dev', { skip: (req, res) => environment.nodeEnv === 'test' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(
      cors({
        credentials: true,
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
      })
    );
  }

  start() {
    this._setupRoutes();
    this._listen();
  }

  _getApp() {
    return this.app;
  }

  _setupRoutes() {
    Router.create(this.app);
  }

  _listen() {
    const { port, nodeEnv } = environment;
    this.app.listen(port, () => {
      logger.info(
        chalk.cyanBright.inverse(
          `Server is running on port : ${port}! | Execution Environment : ${nodeEnv.toLocaleUpperCase()}`
        )
      );
    });
  }
}

export default App;

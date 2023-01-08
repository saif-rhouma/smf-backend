import express from 'express';
import { markStoreRoutes } from './api';

class Router {
  constructor() {
    this.router = express.Router();
    // TODO: this.apiRoutes = apiRoutes;
    this.markStoreRoutes = markStoreRoutes;
  }

  create(app) {
    // TODO: handle middleware
    this._attachMarkStoreAPI();
    this._handlePageNotFound();
    this._handleExceptions();
    app.use(this.router);
  }

  _handlePageNotFound() {
    this.router.all('*', async (req, res) => {
      res.status(404).json({ message: 'Page Not Found' });
    });
  }

  _catchError(route) {
    return (req, res, next) => {
      route(req, res, next).catch(next);
    };
  }

  _handleExceptions() {
    // eslint-disable-next-line no-unused-vars
    this.router.use((err, req, res, next) => {
      err.statusCode = err.status || err.statusCode || 500;
      return res.status(err.statusCode).json({ message: err.message });
    });
  }

  _attachMarkStoreAPI() {
    this._attachRoutes(this.markStoreRoutes, '/api');
  }

  _attachRoutes(routeGroup, prefix = '') {
    [routeGroup].forEach(({ group, routes }) => {
      routes.forEach(({ method, path, middleware = [], handler }) => {
        this.router[method](
          prefix + group.prefix + path,
          [...(group.middleware || []), ...middleware],
          this._catchError(handler)
        );
      });
    });
  }
}

export default new Router();

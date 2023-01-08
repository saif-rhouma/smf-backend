const { default: markStoreController } = require('../../app/controllers/markStoreController');

module.exports = {
  group: {
    prefix: '/brand',
  },
  routes: [
    {
      method: 'post',
      path: '/',
      validator: [],
      handler: markStoreController.getMarkStoreDetails,
    },
  ],
};

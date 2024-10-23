// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/dapi',
    createProxyMiddleware({
      target: 'https://www.swiggy.com',
      changeOrigin: true,
      pathRewrite: {
        '^/dapi': '/dapi', // keep the same path
      },
    })
  );
};

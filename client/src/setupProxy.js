

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
    target: 'https://womenmormonstudies-server.herokuapp.com/api/Experts',
    changeOrigin: true,
    })
);
};
const url = require('url');
const currentUrl = url.format({
  protocol: 'http',
  hostname: 'localhost',
  port: 3306,
  pathname: '/Assignment14/index.html',
});
console.log('Current URL:', currentUrl);

'use strict';

const path = require('path');

module.exports = {
  fsRoot: path.resolve('./test-files'),
  rootName: 'User storage',
  readOnly: false,
  edsocket: null, //place holder: editor socket for file loading/storing
  users: [{username: 'service', password: 'secret', readOnly: false}, {username: 'operator', password: 'secret', readOnly: true}],
  port: process.env.PORT || '3020',
  host: process.env.HOST || 'localhost'
};

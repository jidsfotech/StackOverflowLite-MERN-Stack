'use strict'

const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');
const speedTest = require('speedtest-net');


module.exports = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
  // io.use(async function (socket, next) {
  //   if (socket.handshake.query && socket.handshake.query.token) {
  //     let token = await socket.handshake.query.token;
  //     jwt.verify(token, auth_key, function (err, decoded) {
  //       if (err) return next(console.log('Authentication error', err));
  //       socket.emit('Authenticated', 'Athentication successfull');
  //       next();
  //     });
  //   }
  //   else {
  //     next(new Error('Authentication error'));
  //   }
  // })
    io.on('connection', (socket) => {
      console.log('Websocket open...');
      socket.emit('hey!', 'youre connected to the server');
      setInterval(() => socket.emit('time', new Date().toTimeString()), 1000);
      socket.on('startTest', async () => {
        try {
          const internetSpeedTest = await speedTest({
            acceptLicense: true,
            verbosity: 1,
            progress: (event) => handleProgress(event, socket),
          });
          socket.emit('finalResult', internetSpeedTest);
        } catch (err) {
          console.log('::: Speed Test Error :::', err.message);
        }
      });
    });

  const handleProgress = (event, socket) => {
    if (event.type === 'testStart') {
      socket.emit('testStart', event);
    }

    if (event.type === 'ping') {
      socket.emit('pong', event);
    }

    if (event.type === 'download') {
      socket.emit('download', event);
    }

    if (event.type === 'upload') {
      socket.emit('upload', event);
    }
  }
}

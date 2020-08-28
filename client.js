const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

conn.on('connect', () => {
  conn.write("Name: Zia");
  //conn.write("Move: up");
  //conn.write("Move: left");
 // conn.write("Say:go long");
  //conn.write("Move: down");
 // conn.write("Move: left");
//conn.write("Move: right");


});

  return conn;
}

console.log('Connecting ...');
console.log('Successfully connected to game server ...');

//connect();

module.exports = connect;



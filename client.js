const net = require("net");
const {IP, PORT} = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server.",);
    conn.write("Name: KNK");
    conn.write("Move: up");
  });
  return conn;

};

module.exports = {connect};
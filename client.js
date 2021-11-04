const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host:'172.16.1.71', // IP address here,
    port:50541// PORT number here,
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

module.exports = connect();
const net = require("net");
const conn = net.createConnection({
  host:'165.227.47.243', // IP address here,
  port:50541// PORT number here,
});
// establishes a connection with the game server
const connect = function() {
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

conn.on('data', (data) => {
  console.log('Message from client: ', data);
});

console.log("Connecting ...");
connect();
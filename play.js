const conn = require('./client');

conn.on('data', (data) => {
  console.log('Message from client: ', data);
});

console.log("Connecting ...");
//conn();
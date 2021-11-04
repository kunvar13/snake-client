const conn = require('./client');

conn.on('data', (data) => {
  console.log('Message from client: ', data);
});

console.log("Connecting ...");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(stdin) {
  if (stdin === '\u0003') {
    process.exit();
  }
  // your code here
};
//conn();
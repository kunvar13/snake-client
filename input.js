
let connection;

const setupInput = (conn) => {
  connection = conn;
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
  } else if (stdin === 'w') {
    connection.write("Move: up");
  } else if (stdin === 'a') {
    connection.write("Move: left");
  } else if (stdin === 's') {
    connection.write("Move: down");
  } else if (stdin === 'd') {
    connection.write("Move: right");
  } else if (stdin === 'n') {
    connection.write("Say: How r you?");
  }
};

module.exports = { setupInput };
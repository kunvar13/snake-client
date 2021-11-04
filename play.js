const {connect} = require('./client');
const {setupInput} = require('./input');

/*conn.on('data', (data) => {
  console.log('Message from client: ', data);
});*/

console.log("Connecting ...");

// setup interface to handle user input from stdin
// your code here

setupInput(connect());
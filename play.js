/*
const setupInput  = require('./input');
const connect  = require('./client');
console.log('Connecting ...');


connect();
setupInput();
*/
const connect  = require('./client');
const setupInput  = require('./input.js');

const connection = connect();

console.log('Connecting ...');

setupInput(connection);

module.exports = { connect };

/*
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
};

setupInput();
handleUserInput(); 
*/
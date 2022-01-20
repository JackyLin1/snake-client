const { stdin } = require('process');

const handleUserInput = function (key) {
  // your code here
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  handleUserInput();
  stdin.resume();
  return stdin;
};


setupInput();

module.exports = {
  handleUserInput,
  setupInput
}
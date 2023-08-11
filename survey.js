const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer) => {
  console.log(`thats a nice name ${answer}!`);




rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`interesting`);



rl.question('What is your favorite activity? ', (answer) => {
  console.log(`nice`);



rl.question('And you do frequently or just sometimes?', (answer) => {
  console.log(`oh I can see you like it very much`);



rl.question('ok then, its just what I need to colect your information for the app', (answer) => {
  console.log(`Thank you for your valuable feedback!`);

  rl.close();
})

})

})

})

});
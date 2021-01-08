const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name ? ", function (name) {
  rl.question("Where do you live ? ", function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.question("n1 ? ", function (n1) {
      rl.question("n2 ? ", function (n2) {
        console.log(`${n1}, + ${n2}= ${Number(n1) + Number(n2)}`);
        rl.close();
      });
    });
  });
});



rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
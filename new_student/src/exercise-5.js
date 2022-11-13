function printString(string, cb) {
  console.log("STARTED: " + string);
  setTimeout(
    () => {
      console.log(string);
      cb();
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}

printAll();
// expected result in console:
// A
// B
// C
function printString(string) {
  console.log("STARTED: " + string);
  return new Promise((resolve, rej) => {
    setTimeout(
      () => {
        console.log(string);
        resolve();
      },
      Math.floor(Math.random() * 100) + 1
    )
  })
}

function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"))
}

printAll();
// expected result in console:
// A
// B
// C
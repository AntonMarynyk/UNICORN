function addString(previous, current, cb){
  setTimeout(
    () => cb(previous + ' ' + current),
    Math.floor(Math.random() * 100) + 1
  )
}

function addA(value) {
  addString(value, 'A', addB);
}

function addB(value) {
  addString(value, 'B', addC);
}

function addC(value) {
  addString(value, 'C', print);
}

function print(value) {
  console.log(value)
}

addA('')

// expected result in console:
// A B C
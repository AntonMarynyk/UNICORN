function addString(previous, current){

  return new Promise((resolve, rej) => {
    setTimeout(
      () => resolve(previous + ' ' + current),
      Math.floor(Math.random() * 100) + 1
    )
  })
}


function addAll(){
  addString('', 'A')
  .then(res => addString(res, 'B'))
  .then(res => addString(res, 'C'))
  .then(res => console.log(res))
}


addAll();
// expected result in console:
// A B C
// In what order will the logs below show up in the console?

console.log('First')

setTimeout(function () {
  console.log('Second')
}, 0)

new Promise(function (res) {
  res('Third')
}).then(console.log)

console.log('Fourth')

// I guessed 2, 3, 1, 4

// Answer is 1, 4, 3, 2
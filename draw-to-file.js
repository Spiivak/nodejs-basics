import fs from 'fs'

drawSquareToFile()

function drawSquareToFile() {
  return new Promise(function(resolve, reject) {
    const size = getRandomIntInclusive(3, 20)
    const str = getSquare(size)

    fs.writeFile("data/square.txt",str, 'utf8', function(err, data) {
      if (err) return reject('Cannot write to file')
      setTimeout(drawSquareToFile, 200)
      resolve(str)
    })
  })
}
function getSquare(size) {
  var str = '*'.repeat(size) + '\n'
  for (let i = 0; i < size; i++) {
    str += '*' + ' '.repeat(size - 2) + '*\n'
  }
  str += '*'.repeat(size) + '\n'
  return str
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

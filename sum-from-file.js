import fs from 'fs'

function sumFromFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf8', (err, contents) => {
      if (err) return reject('Cannot read file')
      const numbers = contents.split(' ').map(Number)
      const sum = numbers.reduce((sum, number) => sum + number, 0)
      resolve(sum)
    })
  })
}

// sumFromFile()
sumFromFile('data/num.txt')
  .then(sum => console.log('Sum:', sum))
  .catch(err => console.log('Cannot sum:', err))

import ms from 'ms'
import fs from 'fs'
// console.log('hi')

// console.log('ms(6000, { long: true }):', ms(6000, { long: true }))
// console.log('ms(12000, { long: true }):', ms(12000, { long: true }))
// console.log('ms(-23000, { long: true }):', ms(-23000, { long: true }))



fs.readFile('data/time.txt', 'utf8', (err, contents) => {
  if (err) return console.error(err)
  const numbers = contents.split('\n')
  const num = numbers.map(number => {
    console.log('num  ms:', ms(+number, { long: true }))
  })
  // ms(numbers, { long: true })
  // console.log(contents)
}) 

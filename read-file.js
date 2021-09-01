// const fs = require('fs')

// function readFile(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (error, buffer) => {
//       if(error) reject(error)
//       resolve(buffer.toString())
//     })
//   })
// }

// const readFilePromise = readFile('quotes.txt')
// console.log(readFilePromise)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Completed~!')
  },100)
})


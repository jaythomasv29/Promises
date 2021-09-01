const fs = require('fs')

let quote = null;
console.log("Finding a quote...")
fs.readFile("quotes.txt", (err, buffer) => {
  if(err) throw err
  const lines = buffer.toString().split('\n')
  lines.forEach(line => {
    setTimeout( () => {
      console.log(line)
    },3000)
  })
})
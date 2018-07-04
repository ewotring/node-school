let fs = require('fs')
let file = fs.readFile(process.argv[2])
console.log(file)
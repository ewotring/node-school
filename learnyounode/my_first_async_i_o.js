let fs = require('fs')
const getFile = () => {
  fs.readFile(process.argv[2], 'utf8', callback)
}

const callback = (err, data) => {
  if (err) {
    console.log('Error');
  } else {
    generateOutput(data);
    return data;
  }
}

const generateOutput = (data) => {
  let dataArray = data.split('\n');
  let newLineCount = dataArray.length - 1;
  console.log(newLineCount)
}

getFile();

/*

Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

─────────────────────────────────────────────────────────────────────────────

*/
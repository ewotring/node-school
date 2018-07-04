let totalArg = 0
for (let i = 2; i < process.argv.length; i++) {
  totalArg += Number(process.argv[i])
}
console.log(totalArg)

// OFFICIAL SOLUTION
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)
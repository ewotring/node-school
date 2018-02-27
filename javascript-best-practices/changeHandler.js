const coinReturn = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
}
module.exports = {
  getAmount: function (coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    if (coinType === 'p' || coinType === 'n' || coinType === 'd' || coinType === 'q') {
      return coinReturn[coinType]
    } else throw new Error('Unrecognized coin ' + coinType)
  },

  convertToChange: function(amount) {
    let returnCoins = []
    if (amount > 25) {
      let quarters = Math.floor(amount / 25)
      amount -= quarters * 25
      for (let i = 0; i < quarters; i ++) {
        returnCoins.push('q')
      }
    }
    if (amount > 10) {
      let dimes = Math.floor(amount / 10)
      amount -= dimes * 10
      for (let i = 0; i < dimes; i++) {
        returnCoins.push(`d`)
      }
    }
    if (amount > 5) {
      let nickels = Math.floor(amount / 5)
      amount -= nickels * 5
      for (let i = 0; i < nickels; i++) {
        returnCoins.push(`n`)
      }
    }

    if (amount >= 1) {
      for (let i = 0; i < amount; i++) {
        returnCoins.push('p')
      }
    }
    return returnCoins
  }
};


// var coins = {
//   'p': 1,
//   'n': 5,
//   'd': 10,
//   'q': 25
// };

// var coinsByAmount = ['q', 'd', 'n', 'p'];

// module.exports = {
//   getAmount: function (coinType) {
//     if (!coins.hasOwnProperty(coinType)) {
//       throw new Error('Unrecognized coin ' + coinType);
//     }
//     return coins[coinType];
//   }
// };
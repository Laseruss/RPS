let methods = {
  botPick: function () {
    const num = Math.random()
    return num < 0.33 ? 'rock' : num < 0.66 ? 'paper' : 'scissors';
  },

  whoWon: function (pick) {
    const bot = this.botPick()

    if (pick === bot) {
      return ['You tied', bot]
    } else if ((pick === 'rock' && bot === 'scissors') ||
              (pick === 'paper' && bot === 'rock') ||
              (pick === 'scissors' && bot === 'paper')) {
      return ['You won!', bot]
    } else {
      return ['You lost..', bot]
    }
  }
}

exports.data = methods;

function botPick() {
   const num = Math.random()
   return num < .33 ? 'rock' : num < .66 ? 'paper' : 'scissors';
}

function whoWon(pick) {
   bot = botPick();

   document.querySelector('#botChoice').innerText += ` ${bot}`;

   if (pick === bot) {
      return 'You tied';
   } else if (pick === 'rock' && bot === 'scissors' ||
              pick === 'paper' && bot === 'rock' ||
              pick === 'scissors' && bot === 'paper') {
      return 'You won';
   } else {
      return 'You Lost'
   }
}

document.querySelector('#rock').addEventListener('click', playGame);
document.querySelector('#paper').addEventListener('click', playGame);
document.querySelector('#scissors').addEventListener('click', playGame);

function playGame(event) {
   let playerPick = event.target.id;

   document.querySelector('#result').innerText = whoWon(playerPick);

   if (playerPick === 'rock') {

      document.querySelector('#paper').classList.add('hidden')
      document.querySelector('#scissors').classList.add('hidden')

   } else if (playerPick === 'paper') {
      
      document.querySelector('#rock').classList.add('hidden')
      document.querySelector('#scissors').classList.add('hidden')

   } else {
      
      document.querySelector('#rock').classList.add('hidden')
      document.querySelector('#paper').classList.add('hidden')

   }
}
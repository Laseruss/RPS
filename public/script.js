
document.querySelector('#rock').addEventListener('click', playGame)
document.querySelector('#paper').addEventListener('click', playGame)
document.querySelector('#scissors').addEventListener('click', playGame)

async function playGame (event) {
  const playerPick = event.target.id;
  const res = await fetch(`/api/${playerPick}`);
  const data = await res.json();

  const pick = data.playerChoice;
  const bot = data.botChoice;
  const winner = data.winningPlayer;

  document.querySelector('#botChoice').innerText += ' ' + bot
  document.querySelector('#result').innerText = winner

  if (pick === 'rock') {
    document.querySelector('#paper').classList.add('hidden')
    document.querySelector('#scissors').classList.add('hidden')
  } else if (pick === 'paper') {
    document.querySelector('#rock').classList.add('hidden')
    document.querySelector('#scissors').classList.add('hidden')
  } else {
    document.querySelector('#rock').classList.add('hidden')
    document.querySelector('#paper').classList.add('hidden')
  }
}

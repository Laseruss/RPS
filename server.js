const express = require('express');
const funcs = require('./funcs.js');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:playerPick', (req, res) => {
  const player = req.params.playerPick
  const [winner, botPick] = funcs.data.whoWon(player);
  const objToSend = {
    "playerChoice": player,
    "botChoice": botPick,
    "winningPlayer": winner
  }
  res.json(objToSend);
});

app.listen(8000);
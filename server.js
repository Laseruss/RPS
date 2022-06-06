const http = require('http');
const fs = require('fs');
const url = require('url')
const funcs = require('./funcs.js')


const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;
  const params = new URLSearchParams(url.parse(req.url).search);

  console.log(pathName, params);

  if (pathName === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (pathName === '/play') {
    if (params.has('playerPick')) {
      const player = params.get('playerPick')
      const [winner, botPick] = funcs.data.whoWon(player)
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        playerChoice: player,
        winningPlayer: winner,
        botChoice: botPick
      };
      res.end(JSON.stringify(objToJson));
    }
  }

  else if (pathName === '/css/style.css') {
    fs.readFile('css/style.css', (err, data) => {
      if (err) console.error(err);
      res.write(data);
      res.end();
    });
  }

  else if (pathName === '/js/script.js') {
    fs.readFile('js/script.js', (err, data) => {
      if (err) console.error(err)
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  else if (pathName === '/images/rock.jpeg') {
    fs.readFile('images/rock.jpeg', (err, data) => {
      if (err) console.error(err);
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.write(data);
      res.end();
    });
  }

  else if (pathName === '/images/paper.jpeg') {
    fs.readFile('images/paper.jpeg', (err, data) => {
      if (err) console.error(err);
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.write(data);
      res.end();
    });
  }

  else if (pathName === '/images/scissors.jpeg') {
    fs.readFile('images/scissors.jpeg', (err, data) => {
      if (err) console.error(err);
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.write(data);
      res.end();
    });
  }

});

server.listen(8000)
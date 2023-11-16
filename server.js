const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.all('/', (req, res) => {
  res.send('OK');
});

function keepAlive() {
  app.listen(port, () => { console.log(`Server is ready! ${Date.now()}`); });
}

module.exports = keepAlive;

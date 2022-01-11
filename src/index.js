const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello Prateek');
});

app.listen(port);
console.log(`[app] : http://localhost:${port}`);

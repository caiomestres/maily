const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ name: '91ss' });
});

app.listen(5000);

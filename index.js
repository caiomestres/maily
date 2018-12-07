const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ name: '91ss' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

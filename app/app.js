// app/app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app via NGINX!');
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

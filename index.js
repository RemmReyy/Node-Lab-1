const express = require('express');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
  res.send(process.env.RESPONSE_TEXT || 'Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
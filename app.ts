const express = require('express');

const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.static('./dist'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 

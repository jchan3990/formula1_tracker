const Parser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(Parser.urlencoded({extended: true}));
app.use(Parser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// server-side data
// you can think of this like "mongodb"
let count = 1;


const express = require('express');

const app = express();

app.use(express.static('./public'));
app.use(express.json())

app.get('/api/count', (req, res) => {
  res.json({count});
})

app.get('/api/addOne', (req, res) => {
  count++;
  res.json({count});
})


app.listen(3000);

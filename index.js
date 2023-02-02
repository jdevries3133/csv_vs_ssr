const express = require('express');

// server-side data
// you can think of this like "mongodb"
let count = 1;

function randInt(start, stop) {
  return (Math.floor(Math.random() * (stop - start))) + start
}

setInterval(() => {
  const n = randInt(0, 4);
  if (n === 1) {
    count++;
    console.log(`Count is ${count}`);
  }
}, 200);

const app = express();

app.use(express.static('./public'));
app.use(express.json())

app.get('/api/count', (req, res) => {
  res.json({count});
})

app.listen(3000);

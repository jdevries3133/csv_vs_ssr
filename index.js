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
}, 500);

const app = express();

app.use(express.static('./public'));
app.use(express.json())

app.get('/api/countSubscribe/:currentCount', (req, res) => {
  let sentReq = false;
  // respond if the count has changed
  if (parseInt(req.params.currentCount) === count) {
    // wait

    // note: this will cause a memory leak (I think)! We are setting up fns
    // to run on an fixed interval, and never calling `clearInterval`. This
    // will eventually cause our server to crash!
    setInterval(() => {
      if (parseInt(req.params.currentCount) !== count) {
        if (!sentReq) {
          sentReq = true;
          res.json({ count });
        }
      }
    }, 50)
  } else {
    res.json({count});
  }
})

app.listen(3000);

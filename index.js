// server-side data
// you can think of this like "mongodb"
let count = 2;


const express = require('express');

const app = express();

app.get('/', (req, res) => {

  const content = `
    <h1>Hi!</h1>

    <!-- When we click on this button, navigate to '/addOne' -->
    <a href="/addOne"><button id="btn">Click Me!</button></a>

    <p>Current number: ${count}</p>
  `;

  res.send(content);

})

app.get('/addOne', (req, res) => {
  count++;
  res.redirect('/');
})


app.listen(3000);

const express = require('express')
const ejsMate = require('ejs-mate')


const app = express()
const path = require('path');
const port = 3000


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
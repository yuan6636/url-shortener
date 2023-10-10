const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shorten', (req, res) => {
  
})

app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  res.send(shortUrl)
})

app.listen(port, () => {
  console.log(`express server on http://localhost:${port}`)
})
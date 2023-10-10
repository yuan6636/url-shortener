const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`Hello world!`)
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
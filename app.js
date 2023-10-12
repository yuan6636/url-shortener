const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const fs = require('fs')
const bodyParser = require('body-parser')
const BASE_URL = 'http://localhost:3000/'
const JsonPath = 'url.json'
let urlCollection = readDataFromFile(JsonPath)

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shorten', (req, res) => {
  const originalUrl = req.body.originalUrl
  const existingShortUrl = findExistingShortUrl(originalUrl)
  
  if(!originalUrl) {
    return res.render('index', { error: 'Please input valid URL!' })
  }
  // 判斷是否有相同的短網址
  if(existingShortUrl) {
    res.render('index', { showShortenedURL: true, shortUrl: existingShortUrl, BASE_URL, originalUrl })
  } else {
    const shortUrl = generateShortUrl()
    urlCollection[shortUrl] = originalUrl    //建立 originalUrl 和 shortUrl 的關聯
    writeDataToFile(JsonPath, urlCollection)
    res.render('index', { showShortenedURL: true, shortUrl, BASE_URL, originalUrl })
  }
  
})

app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  const originalUrl = urlCollection[shortUrl]
  if(originalUrl) {
    res.redirect(originalUrl)
  } else {
    res.status(404).send('404 Not Found!')
  }
})

app.listen(port, () => {
  console.log(`express server on http://localhost:${port}`)
})

// 產生短網址
function generateShortUrl () {
  const numbers = '1234567890'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const code = numbers + lowerCaseLetters + upperCaseLetters
  let collection = code.split('') 
  let data = ''
  for (let i = 1; i <= 5; i++) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    data += collection[randomIndex]
  } 
  return data
}
// 從 url.json 讀取資料
function readDataFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
  } catch (error) {
    return {}
  }
}
// 將網址存入 url.json
function writeDataToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data))
}

function findExistingShortUrl(originalUrl) {
  // 使用 Object.keys() 遍歷 urlCollection，判斷能否找到相同的 originalUrl 
  const existingShortUrl = Object.keys(urlCollection).find(shortUrl => urlCollection[shortUrl] === originalUrl);
  return existingShortUrl || null;
}
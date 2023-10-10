# url shortener

此專案可以讓使用者輸入一段網址，點擊 `shorten` 按鈕，產生一段新的短網址，透過點擊 `copy` 按鈕複製網址或直接點擊短網址，即可前往使用者輸入的網址頁面。

## 產品功能

1. 使用者可以瀏覽首頁，並輸入一段網址。
2. 輸入網址後，可以點擊 `shorten` 按鈕，產生一段新的短網址。
3. 使用者可以複製新生成的短網址。

## 開發環境

- [Node.js](https://nodejs.org/en)

## 安裝流程

1. 開啟終端機，輸入 `git clone`，將專案存到電腦

```
git clone https://github.com/yuan6636/url-shortener.git
```

2. 移至專案資料夾 `url-shortener`

```
cd url-shortener
```

3. 安裝 `npm` 套件管理器

```
npm install
```

4. 執行 `app.js` ( 註：`dev` 為 `nodemon app.js` 的腳本 )

```
npm run dev
```

5. `server` 順利運行後，終端機會顯示網址

```
express server on http://localhost:3000
```

6. 在瀏覽器輸入網址 `http://localhost:3000` 即可瀏覽專案

## 專案畫面

![首頁](public\img\Reading.png)
![短網址](public\img\shortening.png)

## 使用的工具

1. [Visual Studio Code](https://code.visualstudio.com/)：程式編輯器
2. [Node](https://nodejs.org/en)：執行環境
3. [express](https://www.npmjs.com/package/express)：Web 應用程式框架
4. [express-handlebars](https://github.com/express-handlebars/express-handlebars)：樣板引擎
5. [nodemon](https://www.npmjs.com/package/nodemon)：Node 輔助工具

### 參與者

開發者：[yuan6636](https://github.com/yuan6636)

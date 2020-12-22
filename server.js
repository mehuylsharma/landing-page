const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(3000, () => console.log('Server Started.'))
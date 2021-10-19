const express = require('express')
const app = express()
const path = require('path')


console.dir(app)

//tells app to use ejs
app.set('view engine', 'ejs');

//parse form url-encoded data data
app.use(express.urlencoded({extended: true}))
//parses incoming json requests
app.use(express.json())


//run code from directory
app.set('views', path.join(__dirname, '/views'))


//ROUTING
app.get('/', (req, res) => {
    res.render('home')
})

// app.send('/cats', (req, res) => {  
//     console.log("new request")
//     res.send('<h1>MEOW!</h1>')
// })

//routes are exe in order

app.listen(3000, () => {
    console.log("listening on port 3000")

})

app.use('/dogs', (req, res) => {
    console.log("new request")
    res.send('<h1>TWOOF</h1>')
})

app.get('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!')
})

//matches a pattern 
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params)
    const { subreddit } = req.params
    res.send(`This is a subreddit: ${subreddit} `)
})
app.get('/r/:subreddit/:postid', (req, res) => {
    console.log(req.params)
    const { subreddit, postid } = req.params
    res.send(`This is a subreddit: ${subreddit} on ${postid} `)
})

//query string
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing sent')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.post('/tacos', (req, res) => {
    console.log(req.body) //32
})


app.get('/random', (req, res) => {
    const num = Math.floor(Math.random()*10)+1;
    res.render('random', {num})
})

app.get('*', (req, res) => {
    res.send("I don't know that path")
})


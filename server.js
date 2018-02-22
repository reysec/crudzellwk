const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

var db

MongoClient.connect('mongodb://aang58:P4ssw0rd@ds245228.mlab.com:45228/crudzellwk_db', (err, database) => {
    //... start the server
    if (err) return console.log(err);
    db = database
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on 3000');
    })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json())

// app.listen(3000, function() {
//     console.log('listening on 3000');
// })

// app.get('/', function(req, res) {
//     res.send('Hello World');
// })

// Pakai ES6 convention
app.get('/', (req,res) => {
    // res.send('Hello ES6');
    db.collection('quotes').find().toArray(function(err, result) {
        if (err) return console.log(err)
        res.render('index.ejs', {quotes: result})
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

app.put('/quotes', (req, res) => {
    db.collection('quotes').findOneAndUpdate(
    {   name: 'Naruto'
    }, {
        $set: {
            name: req.body.name,
            quote: req.body.quote
        }
    }, {
        sort: {_id: -1},
        upsert: true
    },  (err, result) => {
        if (err) return res.send(err)
        res.send(result)   
    })
})
console.log("Hallo ini nodejs - javascript didalam server");
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

app.use(bodyParser.urlencoded({extended: true}))

// app.listen(3000, function() {
//     console.log('listening on 3000');
// })

// app.get('/', function(req, res) {
//     res.send('Hello World');
// })

// Pakai ES6 convention
app.get('/', (req,res) => {
    // res.send('Hello ES6');
    res.sendFile(__dirname + '/index.html');
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

console.log("Hallo ini nodejs - javascript didalam server");
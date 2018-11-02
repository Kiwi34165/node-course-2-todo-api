var express = require('express');
var bosyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bosyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    },  (e) => {
        res.sttus(400).send(e);
    });


});


app.listen(3000, () => {
    console.log('Started on Port 3000');
});



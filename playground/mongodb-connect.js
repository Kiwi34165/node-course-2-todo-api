// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same code as above IS6


MongoClient.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser: true},(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server'); // only if no error occure
    const db =client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Robert',
        age: 47,
        location: "Kirchdorf"

    }, (err, result) => {
       if(err){
           return console.log('Unable to insert user', err);
       }
        console.log("Eingefügt:" ,JSON.stringify(result.ops, undefined,2));
    });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do 3',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log("Eingefügt:" ,JSON.stringify(result.ops, undefined,2));
    // });

    client.close();
});
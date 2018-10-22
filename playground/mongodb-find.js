// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same code as above IS6


MongoClient.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser: true},(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server'); // only if no error occure
    const db =client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bcc5572d50d120828aa3937')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Robert'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('Unable to fetch todos', err);
    });


    //client.close();
});
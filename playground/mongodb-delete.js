// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same code as above IS6


MongoClient.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser: true},(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server'); // only if no error occure
    const db =client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Nothing'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do 4'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({_id: new ObjectID("5bce9c6c59e43c1970f8477f")}).then((result) => {
        console.log(result);
    });


    //client.close();
});
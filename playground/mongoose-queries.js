const {ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = "5bdc67ea81391171f45b05fe";
//
// console.log(ObjectID.isValid(id));

// Todo.find({
//     _id: id
// }).then((todos) => { // returns all entries with the matching id. Thats why used todoS
//     console.log('Todos', todos)
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => { // returns only on entrie with the matching id. Thats why used todo
//     console.log('Todo', todo)
// });

// Conecting to DB Todo
Todo.findById(id).then((todo) => { // returns only on entrie with the matching id. Thats why used todo
   if(!todo){
       return console.log('Id not Found');
   }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

// Conecting to DB User
User.findById(id).then((user) => { // returns only on entrie with the matching id. Thats why used user
    if(!user){
        return console.log('User not Found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
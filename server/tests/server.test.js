const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');



const todos = [{
    _id: new ObjectId(),
    text: "First test todo"
}, {
    _id: new ObjectId(),
    text: "Second test todo"
}];


beforeEach((done) => {
    Todo.deleteMany().then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST / todos', () => {
    it('should create a new todo', (done) => {
        var text ='Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
            expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
            });
    });

    it('shoud not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos') //url
            .send({})
            .expect(200) // 400 comes back from server
            .end((err, res) => {
                if(err){
                    return done(err); // return stops the script; done for properly failed test
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(3); // database has no entry because we send bad data
                    done();
                }).catch((e) => done(e));
            });

    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(404)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2)
            })
            .end(done);
    });
});

describe('GET /toos/:id', () => {
    it('schould return 404 if todo not found', (done) => {
        var hexId = new ObjectId().toHexString();

        request(app)
            .get('/todos/${hexId}')
        .expect(404)
        .end(done);
    });

    it('schould return 404 fon non-objects ids', (done) => {
        request(app)
            .get('/todos/${todos[0]._id.toHexString()}')
            .expect(200)
            .end(done);
    });

    it('schould return todo doc', (done) => {
        request(app)
            .get('/todos/ab123')
            .expect(404)
            .end(done);
    });





});
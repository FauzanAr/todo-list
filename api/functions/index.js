const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

//Todo
const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

//User
const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail
} = require('./APIs/users')

//Todo
app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);

//User
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);

exports.api = functions.https.onRequest(app);
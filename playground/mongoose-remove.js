const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndDelete

Todo.findOneAndRemove({_id: '5c62cd3c91388bddbdadea24'}).then((todo)=>{
    
})

Todo.findByIdAndRemove('5c62cd3c91388bddbdadea24').then((todo)=>{
    console.log(todo);
})
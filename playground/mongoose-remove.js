const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByOneAndRemove({_id: '5a54ab5b53fc6ca402674e93'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5a54ab5b53fc6ca402674e93').then((todo) => {
  console.log(todo);
});

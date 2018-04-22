
const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
/**
 * when using the PUT http method it will display
 * the new data of the row and also run the
 * schema validator on the new data to make sure
 * it follows the schema structure predefined
*/
Todo.updateOptions({new: true, runValidatorss: true});

module.exports = Todo;

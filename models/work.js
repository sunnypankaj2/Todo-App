const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todo_schema = new Schema({
    work:{
        type: String,
        required: true
    }
})

const Work = mongoose.model('Work',todo_schema);

module.exports = Work;
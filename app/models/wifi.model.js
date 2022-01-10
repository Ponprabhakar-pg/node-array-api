const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: String,
    array: Array
}, {
    versionKey: false
});

module.exports = mongoose.model('ArraySchema', NoteSchema,'array_sample');
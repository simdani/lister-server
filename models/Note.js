const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  }
});

module.exports = mongoose.model('notes', NoteSchema, 'notes');

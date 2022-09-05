const mongoose = require('mongoose');

const NotesSchema = new Schema({
    text:{
        type: String,
        default: ""
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('notes', NotesSchema);
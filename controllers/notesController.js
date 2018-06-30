const mongoose = require('mongoose');

const Note = require('../models/Note');

async function index(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  }
  catch(err) {
    res.status(400).json('failed to get notes');
  }
}

async function createNote(req, res) {
  const text = req.body.text;

  const note = new Note({
    text
  });

  try {
    const result = await note.save();
    res.status(400).json(result);
  } catch(err) {
    res.status(404).json('error crearing note');
  }
}

module.exports = {
  index,
  createNote
};

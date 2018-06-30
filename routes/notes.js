const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');

// get all notes
router.get('/', notesController.index);
// create new note
router.post('/create', notesController.createNote);

module.exports = router;
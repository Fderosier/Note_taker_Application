const router = require('express').Router();

// /notes import for modular
const notesRouter = require('./notes.js');

// function provided for middleware
router.use('/notes', notesRouter);

module.exports = router;
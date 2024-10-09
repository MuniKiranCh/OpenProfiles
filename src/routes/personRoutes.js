const express = require('express');
const router = express.Router();

const { getAllPersons, createPerson, getPersonById, deletePersonById } = require('../controllers/personController');

// Public Routes (No authentication required)
router.get('/', getAllPersons);               // Get all persons
router.get('/:id', getPersonById);             // Get a specific person by ID
router.post('/', createPerson);                // Create a new person
router.delete('/:id', deletePersonById);       // Delete a person by ID

module.exports = router;
const express = require('express');
const router = express.Router();

const { getAllPersons, createPerson, getPersonById, deletePersonById } = require('../controllers/personController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public Routes (No authentication required)
router.get('/', getAllPersons);               // Get all persons
router.get('/:id', getPersonById);             // Get a specific person by ID

// Protected Routes (JWT Required)
router.post('/', authMiddleware, createPerson);                // Create a new person
router.delete('/:id', authMiddleware, deletePersonById);       // Delete a person by ID

module.exports = router;
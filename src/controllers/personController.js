const Person = require('../models/personModel');

// Get all Persons
exports.getAllPersons = async (req, res) => {
  // const userId = req.userId; // Get the user ID from the request
  
  try {
    const persons = await Person.find();  // Fetch all persons from the database
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new Person
exports.createPerson = async (req, res) => {
  const { name, age, gender, mobileNumber } = req.body;  // Fields based on the schema
  const userId=req.userId;

  try {
    const newPerson = new Person({ name, age, gender, mobileNumber, userId });  // Create new Person instance
    
    await newPerson.save();  // Save new Person to the database
    res.status(200).send('Person Created Successfully!');  // Success message
  } catch (error) {
    res.status(400).json({ message: error.message });  // Return error if failed
  }
};

// Get a specific Person by ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);  // Find person by ID
    if (!person) return res.status(404).json({ message: 'Person not found' });  // If not found, return 404
    res.json(person);  // Return person data
  } catch (error) {
    res.status(500).json({ message: error.message });  // Return error if something goes wrong
  }
};

// Delete a Person by ID
exports.deletePersonById = async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);  // Find and delete person by ID
    if (!person) return res.status(404).json({ message: 'Person not found' });  // If person not found, return 404
    res.json({ message: 'Person deleted' });  // Return success message after deletion
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
};
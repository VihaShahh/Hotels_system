const express = require('express');
const router = express.Router();
const Person = require('../models/person'); // MongoDB Model

// ✅ POST: Add a new person
router.post('/', async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        
        const { name, age, work, mobile, email, address, salary } = req.body;

        if (!name || !work || !mobile || !email || !salary) {
            return res.status(400).json({ error: "Missing required fields: name, work, mobile, email, salary" });
        }

        const newPerson = new Person({ name, age, work, mobile, email, address, salary });
        const savedPerson = await newPerson.save();
        
        console.log('Data saved successfully:', savedPerson);
        res.status(200).json(savedPerson);
    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ✅ GET: Fetch all persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched successfully");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
});

// ✅ GET: Fetch persons by work type
router.get("/:workType", async (req, res) => {
    try {
        console.log("Data", req.params);
        const workType = req.params.workType.toLowerCase();
        console.log("Received workType:", workType);

        const allowedRoles = ["chef", "manager", "waiter"];
        if (!allowedRoles.includes(workType)) {
            return res.status(400).json({ error: "Invalid work type. Allowed values: chef, manager, waiter" });
        }

        const employees = await Person.find({ work: workType });
        if (employees.length === 0) {
            return res.status(404).json({ message: `No employees found for role: ${workType}` });
        }

        console.log("Response fetched:", employees);
        return res.status(200).json(employees);
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ PUT: Update person by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedPerson = await Person.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

        if (!updatedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log("Updated Person:", updatedPerson);
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.error("Error updating person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ DELETE: Remove person by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedPerson = await Person.findByIdAndDelete(id);
        if (!deletedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log("Deleted Person:", deletedPerson);
        res.status(200).json({ message: "Person deleted successfully", deletedPerson });
    } catch (error) {
        console.error("Error deleting person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

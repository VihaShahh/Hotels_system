const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');

// ✅ **CREATE (Add a new menu item)**
router.post('/', async (req, res) => {
    try {
        const { name, price, taste, is_drink, ingredients } = req.body;

        if (!name || !price || !taste) {
            return res.status(400).json({ error: "Missing required fields: name, price, taste" });
        }

        const newMenuItem = new MenuItem({
            name,
            price,
            taste,
            is_drink: is_drink || false,
            ingredients: ingredients || []
        });

        const savedItem = await newMenuItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error adding menu item:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ **READ (Get all menu items)**
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find().lean();
        res.status(200).json(menuItems);
    } catch (error) {
        console.error("Error fetching menu items:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ **READ (Get menu items by taste)**
router.get('/:taste', async (req, res) => {
    try {
        const tasteQuery = req.params.taste.toLowerCase();
        console.log("Received taste query:", tasteQuery);

        const allowedTastes = ["sweet", "spicy", "sour"];
        if (!allowedTastes.includes(tasteQuery)) {
            return res.status(400).json({ error: "Invalid taste. Allowed values: sweet, spicy, sour" });
        }

        const menuItems = await MenuItem.find({ taste: new RegExp(`^${tasteQuery}$`, 'i') }).lean();
        if (menuItems.length === 0) {
            return res.status(404).json({ message: `No menu items found with taste: ${tasteQuery}` });
        }

        res.status(200).json(menuItems);
    } catch (error) {
        console.error("Error fetching menu items by taste:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ **READ (Get a single menu item by ID)**
router.get('/:id', async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id).lean();
        if (!menuItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        res.status(200).json(menuItem);
    } catch (error) {
        console.error("Error fetching menu item by ID:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ **UPDATE (Modify a menu item by ID)**
router.put('/:id', async (req, res) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators: true }).lean();
        if (!updatedMenuItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        res.status(200).json(updatedMenuItem);
    } catch (error) {
        console.error("Error updating menu item:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ **DELETE (Remove a menu item by ID)**
router.delete('/:id', async (req, res) => {
    try {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id).lean();
        if (!deletedMenuItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        console.error("Error deleting menu item:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ Export router module
//comments
module.exports = router;

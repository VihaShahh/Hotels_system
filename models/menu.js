const mongoose = require('mongoose');

// Define the schema for a menu item
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {  // ✅ Fix: Adding ingredients field properly
        type: [String],  // Array of strings
        default: []
    }
});

// Create the Mongoose model
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\/.+/
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    categories: {
        type: [String],
        default: [],
        index: true
    },
    details: {
        type: [Object],
        default: []
    }
}, { timestamps: true });

const Products = mongoose.model("Products", productSchema);

module.exports = Products;

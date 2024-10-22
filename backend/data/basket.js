const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    book: {
        title: String,
        author: String,
        price: Number
    }
});

const Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;

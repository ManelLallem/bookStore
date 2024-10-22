const Basket = require('../data/basket'); 
const User = require('../data/users'); 

exports.addToBasket = async (req, res) => {
    try {
        const { book } = req.body;

       
        const userId = req.users._id;

        const basketItem = new Basket({
            userId,
            book: {
                title: book.title,
                author: book.author,
                price: book.price
            }
        });
               
        await basketItem.save();
        res.status(200).json({ message: "Book added to basket successfully" });
    } catch (error) {
        console.error('Error adding book to basket:', error);
        res.status(500).json({ error: "Failed to add book to basket" });
    }
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shop.css';

function Shop() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    
    useEffect(() => {
        axios.get('/books.json')  
            .then((response) => {
                console.log('Fetched books data:', response.data);
                setBooks(response.data);  
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

  
    const filteredBooks = Array.isArray(books) ? books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const handleAddToBasket = (book) => {
        axios.post('http://localhost:7010/Shop/add-to-basket', { book })
            .then((response) => {
                console.log('Book added to basket:', response.data);
                alert('Book added to basket!');
            })
            .catch((error) => {
                console.error('Error adding book to basket:', error);
            });
    };

    return (
        <div className="shop-container">
            <h1 id='shop-title'>Welcome to the Bookstore</h1>
            <input
                type="text"
                placeholder="Search for books..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            <div className="book-list">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="book-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/5402/5402751.png" alt="Book icon" />
                        <div className="book-details">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p className="book-price">{book.price}$</p>
                        </div>
                        <button className="add-to-basket" onClick={() => handleAddToBasket(book)}>Add to Basket</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;

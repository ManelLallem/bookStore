const express = require('express');
const router = express.Router();
const { addToBasket} = require('../controllers/ShopController');

router.route('/add-to-basket').post(addToBasket);

module.exports = router;

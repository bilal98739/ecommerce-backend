const express = require('express')
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware.js')

const { addToCart, getCart, removeFromCart} = require('../controllers/cartController')

router.post('/add', authMiddleware, addToCart)
router.get('/', authMiddleware, getCart)
router.get('/remove', authMiddleware, removeFromCart)

module.exports = router;
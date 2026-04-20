const express = require('express')
const router = express.Router()

const {addProduct, getProducts, getProductById} = require('../controllers/ProductController')
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post("/add", authMiddleware, adminMiddleware, addProduct);

module.exports = router;
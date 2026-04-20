const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const { stripePayment } = require('../controllers/paymentController');

router.post('/pay', authMiddleware, stripePayment);
router.post("/stripe", authMiddleware, stripePayment);

module.exports = router;
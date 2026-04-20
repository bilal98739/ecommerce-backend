const Order = require('../models/Order');

// POST /api/orders/place
exports.placeOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items, shippingAddress, totalAmount, paymentMethod } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "No items in order" });
        }

        const order = new Order({
            user: userId,
            items,           // [{ product, qty, price, name }]
            shippingAddress,
            totalAmount,
            paymentMethod: paymentMethod || "cod",
        });

        await order.save();
        res.status(201).json({ message: "Order placed", order, _id: order._id });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /api/orders/my
exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate("items.product", "name image price")
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
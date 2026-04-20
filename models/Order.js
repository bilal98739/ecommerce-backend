const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        price: Number,
        qty: { type: Number, default: 1 },
      },
    ],
    shippingAddress: {
      street: String,
      city: String,
      zip: String,
      country: String,
    },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      default: "pending",
    },
    paymentStatus: {
      type: String,
      default: "pending",
    },
    paymentMethod: {
      type: String,
      default: "cod",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

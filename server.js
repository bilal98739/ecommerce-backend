require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

const app = express()

// middleware

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payment', paymentRoutes)

// test route
app.get('/', (req, res) =>{
    res.send("Api is running")
})

// mongoDB connection

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

const PORT = process.env.PORT || 5000

//start server

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})
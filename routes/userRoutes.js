const express = require("express")
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')
const { SignupUser, loginUser } = require('../controllers/userController')

router.post('/signup', SignupUser)
router.post('/login', loginUser)

router.get("/profile", authMiddleware, (req, res)=>{
    res.json({
        message: "Welcome to profile",
        user: req.user
    })
})

module.exports = router
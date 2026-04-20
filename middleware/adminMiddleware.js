const adminMiddleware = (req, res, next) =>{
    if(!req.user.isAdmin){
        return res.json({ message: "Admin access only"})
    }
    next()
}
module.exports = adminMiddleware;
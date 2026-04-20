const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "No token, access denied" });
        }

        // Strip "Bearer " prefix if present
        const token = authHeader.startsWith("Bearer ")
            ? authHeader.slice(7)
            : authHeader;

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();

    } catch (error) {
        console.log("Auth Error:", error.message);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
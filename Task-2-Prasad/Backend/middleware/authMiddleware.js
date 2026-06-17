const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Check session first
    if (req.session.user) {
        return next();
    }

    // Check JWT token from Authorization header
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Please login first' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.session.user = { _id: decoded.id };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;

require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: function (req, res, next) {
        // need to include a header like this whenever we request
        const token = req.header("x-header-token");

        // check for token
        if (!token) {
            return res.status(401).json({ error: "unauthorized user." });
        }

        try {
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // add user from payload
            req.user = decoded;
            next();
        } catch (e) {
            res.status(400).json({ error: "token not valid." });
        }
    }
};
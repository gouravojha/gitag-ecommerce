const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET || "0d4a97fb771e53c6652078d17309e26aed6a49c32722ec3e9c1b481aed2b142b"
const Encryption = require("./encryption")

exports.signJWT = (req, res, next) => {
    const { phoneNumber } = req.body
    const token = Encryption.encryptData(jwt.sign({ phoneNumber }, secretKey));

    req.token = token

    next()
}

exports.verifyJWT = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token missing.' });
    }

    const realToken = Encryption.decryptData(token);
    jwt.verify(realToken, secretKey, (err,data) => {
        if (err) {
            return res.status(403).json({ message: 'Access denied. Invalid token.' });
        }
        req.phoneNumber = data['phoneNumber'];
        next();
    });
}
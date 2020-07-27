require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Account = require('../models/accountModel');

module.exports = {
    // ***********************************************************************************************
    // ************************************** Create new User ****************************************
    // ***********************************************************************************************
    registerAccount: function (req, res) {
        const { username, password } = req.body;

        // check if data exists
        if (!username || !password) {
            return res.status(400).json({ "error": "Fill all fields." });
        }

        // check existing user
        Account.findOne({ username })
            .then(user => {
                // error if user already exists
                if (user) {
                    return res.status(400).json({ "error": "User already exists." });
                }

                // otherwise create new user
                const newUser = new Account({ username, password });

                // generate salt to hash the password
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        throw err;
                    }

                    // generate hash
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }

                        // set the new password as the hash
                        newUser.password = hash;

                        // this to databse
                        newUser.save().then(user => {
                            // generate web token
                            jwt.sign(
                                { id: user.id },
                                process.env.JWT_SECRET,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) {
                                        throw err;
                                    }

                                    res.status(200).json({
                                        "token": token,
                                        "id": user.id,
                                        "username": user.username
                                    });
                                }
                            );
                        });
                    });
                });
            })
            .catch(err => {
                res.status(400).json({ "error registering": err });
            });
    },
    // ***********************************************************************************************
    // ************************************* Authenticate User ***************************************
    // ***********************************************************************************************
    authenticateUser: function (req, res) {

    }
}
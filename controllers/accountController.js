require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Account = require('../models/accountModel');
const AppError = require('../middleware/AppError');

module.exports = {
    // ***********************************************************************************************
    // ************************************** Create new User ****************************************
    // ***********************************************************************************************
    registerAccount: async function (req, res, next) {
        try {
            // get posted data
            const { username, password } = req.body;

            // check if data exists if not throw an error
            if (!username || !password) {
                return next(new AppError("Fill All Fields", 400));
            }

            // look for username in the database
            let user = await Account.findOne({ username }).populate("posts").select("-password");

            // if user is already exists then throw an error
            if (user) {
                return next(new AppError("User Already Exists.", 400));
            }

            // otherwise, create new data entry using the schema
            const newUser = new Account({ username, password });

            // hash the password
            let hashedPass = await bcrypt.hash(newUser.password, 10);

            // saved it as the new password
            newUser.password = hashedPass;

            // save it in the Database
            let savedUser = await newUser.save();

            // generate a json token
            let token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: 3600 });

            // send the data back to the client along with the token
            res.status(200).json({
                "token": token,
                "_id": savedUser._id,
                "username": savedUser.username,
                "posts": savedUser.posts
            });
        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // ************************************* Authenticate User ***************************************
    // ***********************************************************************************************
    authenticateUser: async function (req, res, next) {
        try {
            // get posted data
            const { username, password } = req.body;

            // check if all fields are filled
            if (!username || !password) {
                return next(new AppError("Fill All Fields.", 400));
            }

            // look in the database for the specified username
            let userInfo = await Account.findOne({ username }).populate("posts");

            // if not found then send error
            if (!userInfo) {
                return next(new AppError("User not found", 404));
            }

            // otherwise, check if the password match the hashed password
            let passwordMatch = await bcrypt.compare(password, userInfo.password);

            // if password do not match then return an error
            if (!passwordMatch) {
                return next(new AppError("Incorrect password.", 400));
            }

            // if it matched then generate a web token
            let token = await jwt.sign({ id: userInfo._id }, process.env.JWT_SECRET, { expiresIn: 3600 });

            if (!token) {
                return res.status(400).json({ "message": "token generation failed" });
            }

            // then send the data back along with the token
            res.status(200).json({
                "token": token,
                "_id": userInfo._id,
                "username": userInfo.username,
                "posts": userInfo.posts
            });
        } catch (err) {
            next(err);
        }

    },
    // ***********************************************************************************************
    // **************************************** Delete User ******************************************
    // ***********************************************************************************************
    deleteAccount: async function (req, res, next) {
        try {
            await Account.deleteOne({ "_id": req.params.id });
            res.status(200).json({ "message": "success" });
        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // **************************************** Get All User *****************************************
    // ***********************************************************************************************
    readAllDevOnly: async function (req, res, next) {
        try {
            let allAccount = await Account.find().populate("posts");
            res.status(200).json(allAccount);
        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // ************************************** Get Account info ***************************************
    // ***********************************************************************************************
    getAccountInfo: async function (req, res, next) {
        try {
            let accountInfo = await Account.findById({ "_id": req.params.id }).populate("posts");
            res.status(200).json(accountInfo);
        } catch (err) {
            next(err);
        }
    }
}
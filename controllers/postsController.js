require('dotenv').config();
const Posts = require('../models/postModel');
const Account = require('../models/accountModel');
const AppError = require('../middleware/AppError');

module.exports = {
    // ***********************************************************************************************
    // ************************************** Create new Post ****************************************
    // ***********************************************************************************************
    addPost: async function (req, res, next) {
        try {
            // get posted data
            const { title, overview, body } = req.body;

            if (!title || !overview || !body) {
                return next(new AppError("Fill All Fields", 400));
            }

            // create a new post using the model from the data we got
            const newPost = new Posts({ title, overview, body });

            // save the newPost into the Post DB
            let savedPost = await newPost.save();

            res.status(200).json({
                "message": "success",
                "_id": savedPost._id
            });

        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // *********************************** Update existing Post **************************************
    // ***********************************************************************************************
    updatePost: async function (req, res, next) {
        try {
            // get posted data
            const { title, overview, body } = req.body;

            if (!title || !overview || !body) {
                return next(new AppError("Fill All Fields", 400));
            }

            let updatedItem = await Posts.findOneAndUpdate(
                { "_id": req.params.id },
                { title, overview, body },
                { new: true });

            res.status(200).json(updatedItem);
        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // *************************************** delete Post *******************************************
    // ***********************************************************************************************
    deletePost: async function (req, res, next) {
        try {
            await Posts.findOneAndDelete({ "_id": req.params.id });
            res.status(200).json({ "message": "deletion success" });
        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // ************************************** Get One Post *******************************************
    // ***********************************************************************************************
    getPost: async function (req, res, next) {
        try {
            let post = await Posts.findById({ "_id": req.params.id });
            res.status(200).json(post);
        } catch (err) {
            next(err);
        }
    },
    // ***********************************************************************************************
    // ************************************** Get All Post *******************************************
    // ***********************************************************************************************
    getAllPost: async function (req, res, next) {
        try {
            let allPosts = await Posts.find();
            res.status(200).json(allPosts);
        } catch (err) {
            next(err);
        }
    }
}
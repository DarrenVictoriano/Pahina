require('dotenv').config();
const Posts = require('../models/postModel');

module.exports = {
    // ***********************************************************************************************
    // ************************************** Create new Post ****************************************
    // ***********************************************************************************************
    addPost: function (req, res) {
        // get posted data
        const { _id, title, overview, body } = req.body;

        // create a new post using the model from the data we got
        const newPost = new Posts({ title, overview, body });

        // save the newPost into the Post DB
        newPost.save()
            // then add that item to the accounts that currently signin
            .then(item => {
                return Posts.findOneAndUpdate(
                    { _id },
                    { $push: { posts: item._id } },
                    { new: true })
                    .populate("posts")
            })
            .then(accountInfo => {
                res.status(200).json(accountInfo);
            })
            .catch(err => {
                res.status(400).json({ "error": err });
            });
    },
    // ***********************************************************************************************
    // *********************************** Update existing Post **************************************
    // ***********************************************************************************************
    updatePost: function (req, res) {
        // get posted data
        const { _id, title, overview, body } = req.body;

        Posts.findOneAndUpdate({ _id }, { title, overview, body })
            .then(updatedItem => {
                res.status(200).json(updatedItem);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    // ***********************************************************************************************
    // *************************************** delete Post *******************************************
    // ***********************************************************************************************
    deletePost: function (req, res) {
        // get ID you want to delete
        const { _id } = req.params;

        Posts.findByIdAndDelete({ _id })
            .then(deletedItem => {
                res.status(200).json(deletedItem);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    // ***********************************************************************************************
    // ************************************** Get One Post *******************************************
    // ***********************************************************************************************
    getPost: function (req, res) {
        // get ID
        const { _id } = req.params;

        Posts.findById({ _id })
            .then(item => {
                res.status(200).json(item);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },
    // ***********************************************************************************************
    // ************************************** Get All Post *******************************************
    // ***********************************************************************************************
    getAllPost: function (req, res) {
        Posts.find()
            .then(allItem => {
                res.status(200).json(allItem);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
}

// TODO: test API on postman
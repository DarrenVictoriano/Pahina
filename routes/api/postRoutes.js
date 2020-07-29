const router = require('express').Router();
const makePrivate = require('../../middleware/validateToken');
const postsController = require('../../controllers/postsController');

// @route           api/post
// @des-POST        Add new post
router.route("/post/add")
    .post(makePrivate, postsController.addPost);

router.route("/post/:id")
    // @route           api/post/_id
    // @des-PUT         update existing post
    .put(makePrivate, postsController.updatePost)
    // @route           api/post/_id
    // @des-DELETE      delete existing post
    .delete(makePrivate, postsController.deletePost);

module.exports = router;
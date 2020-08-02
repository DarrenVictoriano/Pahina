const router = require('express').Router();
const makePrivate = require('../../middleware/validateToken').validateToken;
const postsController = require('../../controllers/postsController');


router.route("/")
    // @route           api/v1/post/
    // @des-GET         Get All Post
    .get(makePrivate, postsController.getAllPost)
    // @route           api/v1/post/
    // @des-POST        Add new post
    .post(makePrivate, postsController.addPost);

router.route("/:id")
    // @route           api/v1/post/
    // @des-Get         get post
    .get(makePrivate, postsController.getPost)
    // @route           api/v1/post/_id
    // @des-PUT         update existing post
    .put(makePrivate, postsController.updatePost)
    // @route           api/v1/post/_id
    // @des-DELETE      delete existing post
    .delete(makePrivate, postsController.deletePost);

module.exports = router;
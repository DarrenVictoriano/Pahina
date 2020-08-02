const router = require('express').Router();
const makePrivate = require('../../middleware/validateToken').validateToken;
const accountController = require('../../controllers/accountController');


router.route("/")
    // @route       api/user/
    // @desc-GET    Read All User, DEV use only
    .get(makePrivate, accountController.readAllDevOnly)
    // @route       api/user/
    // @desc-POST   Register new user
    .post(accountController.registerAccount);

// @route       api/user/auth
// @desc-POST   Login user
router.route("/auth")
    .post(accountController.authenticateUser);

// @route       api/user/_id
// @desc-DEL    Delete account
router.route("/:id")
    .delete(makePrivate, accountController.deleteAccount);

module.exports = router;
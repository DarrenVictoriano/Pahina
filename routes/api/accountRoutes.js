const router = require('express').Router();
const makePrivate = require('../../middleware/validateToken').validateToken;
const accountController = require('../../controllers/accountController');


router.route("/")
    // @route       api/v1/user/
    // @desc-GET    Read All User, DEV use only
    .get(makePrivate, accountController.readAllDevOnly)
    // @route       api/v1/user/
    // @desc-POST   Register new user
    .post(accountController.registerAccount);

// @route       api/v1/user/auth
// @desc-POST   Login user
router.route("/auth")
    .post(accountController.authenticateUser);


router.route("/:id")
    // @route       api/v1/user/_id
    // @desc-GET    Get account info
    .get(makePrivate, accountController.getAccountInfo)
    // @route       api/v1/user/_id
    // @desc-DEL    Delete account
    .delete(makePrivate, accountController.deleteAccount);

module.exports = router;
const router = require('express').Router();
const makePrivate = require('../../middleware/validateToken');
const accountController = require('../../controllers/accountController');

// @route       api/user/register
// @desc-POST   Register new user
router.route("/register")
    .post(accountController.registerAccount);

// @route       api/user/auth
// @desc-POST   Login user
router.route("/auth")
    .post(accountController.authenticateUser);

// @route       api/user/del/_id
// @desc-DEL    Delete account
router.route("/del/:id")
    .delete(makePrivate, accountController.deleteAccount);

module.exports = router;
const router = require('express').Router();
const accountRoutes = require('../api/accountRoutes');
const postRoutes = require('../api/postRoutes');

router.use("/user", accountRoutes);
router.use("/post", postRoutes);

module.exports = router;
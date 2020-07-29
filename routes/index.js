const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use("/api", apiRoutes);

// if no api are hit then send the react app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
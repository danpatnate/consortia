const express = require('express');
const router = express.Router();

const usersData = require('../data/users.json');

router.get("/", function(req, res, next) {
    res.send(usersData.data);
});

module.exports = router;

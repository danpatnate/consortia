const express = require('express');
const router = express.Router();

const companiesData = require('../data/companies.json');

router.get("/", function(req, res, next) {
    res.send(companiesData.data);
});

router.post('/', function(req, res){
  res.send(req.body);
  res.end("successfully added!");
});

router.put('/', function(req, res){
  res.send(req.body);
  res.end("successfully updated!");
});

module.exports = router;

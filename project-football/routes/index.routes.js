const express = require('express');
const router = express.Router();
const axios = require('../services/league.services')


router.get("/", (req, res, next) => {
  res.render("index");

});

module.exports = router;

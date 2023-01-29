const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile('views/html/index.html', {root: __dirname + '/../'});
});

module.exports = router;

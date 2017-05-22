var express = require('express');
var Router = express.Router();

var filmRouter = require('./films.js');

router.use('/films', filmRouter);

router.get('/', function(req, res) {
  res.json({ data: 'welcome to homepage!'});
});

router.get('/about', function (req,res) {
  res.json({data: 'about us'});
});

module.exports = router;
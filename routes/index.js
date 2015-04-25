var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'EthioCredit' });
});
/* GET users listing. */
router.get('/data', function(req, res) {
  res.render('index', { title: 'Data' });
});

module.exports = router;

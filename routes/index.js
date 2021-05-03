var express = require('express');
var router = express.Router();
const { myque , myWorker } = require('../helpers/bullmq');
/* GET home page. */
router.get('/', async function(req, res, next) {
  await myque.add('index', req.body);
  res.send(req.body);
});

module.exports = router;

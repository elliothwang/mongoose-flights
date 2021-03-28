var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET users listing. */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;
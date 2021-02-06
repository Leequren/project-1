const express = require('express');
const router = express.Router();
const { checkedAuth, straightAuth } = require('../config/auth');

router.get('/', straightAuth, (req, res) => res.render('firstPage'));

router.get('/PersonalArea', checkedAuth, (req, res) =>
  res.render('PersonalArea', {
    user: req.user
  })
);

module.exports = router;

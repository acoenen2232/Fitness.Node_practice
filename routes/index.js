
const express = require('express');
const path = require('path');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const app = express();
// Welcome Page
router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/jwt.config')(passport);

const auth = require('../controllers/auth.controller');


router.post('/signup', auth.signUpUser);
router.post('/signin', auth.signInUser);
router.get('/logout', auth.signOutUser);

module.exports=router
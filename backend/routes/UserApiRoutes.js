const express = require('express');
const router = express.Router();

const userApiController = require('../controllers/UserApiController');

router.post('/signup', userApiController.create);
router.post('/login', userApiController.login);

module.exports = router;
const express = require('express');
const router = express.Router();

const userApiController = require('../controllers/UserApiController');

const authHelper = require("../middlewares/authApiHelper");

router.post('/signup', authHelper, userApiController.create);
router.post('/login', userApiController.login);

module.exports = router;
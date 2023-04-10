const express = require('express');
const router = express.Router();

const ClientsApiController = require('../controllers/ClientsApiController');


const authHelper = require("../middlewares/authApiHelper");

router.get('/', authHelper, ClientsApiController.index);
router.get('/:id', ClientsApiController.oneClient);

router.post('/', ClientsApiController.addClient);
router.put('/:id', ClientsApiController.edit);
router.delete('/:id', ClientsApiController.delete);

module.exports = router;
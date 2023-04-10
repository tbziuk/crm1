const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

module.exports = async (req, res, next) => {

    const token = localStorage.getItem("jwt");

    console.log(token);
}
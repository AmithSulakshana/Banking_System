const express = require('express');
const router = express.Router();
const {getAll,addUser,login} = require('../controller/User')


router.get("/",getAll);

router.post("/singup",addUser);

router.post("/login",login);

module.exports = router;
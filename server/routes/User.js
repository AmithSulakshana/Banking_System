const express = require('express');
const router = express.Router();
const {getAll,addUser} = require('../controller/User')


router.get("/",getAll);

router.post("/",addUser)

module.exports = router;
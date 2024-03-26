const express = require('express');
const router = express.Router();
const {getAll,addUser,login, auth} = require('../controller/User');
const { validateToken } = require('../middlewares/AuthMiddleware');


router.get("/",getAll);

router.post("/singup",addUser);

router.post("/login",login);

router.get("/auth",validateToken,auth)

module.exports = router;
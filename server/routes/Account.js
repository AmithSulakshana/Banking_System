const express = require('express');
const { addAcount, accDetails, sendMoney, sendOtp } = require('../controller/Account');
const {validateToken} = require('../middlewares/AuthMiddleware');
const router = express.Router();

router.post("/",addAcount)

router.get("/:userId",accDetails)

router.post("/sendmoney",validateToken,sendMoney)

router.post("/otp",validateToken,sendOtp)


module.exports = router;

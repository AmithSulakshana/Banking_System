const express = require('express');
const { addAcount, accDetails, sendMoney, sendOtp, clearOtp, getAccNo, qr, qrReceive } = require('../controller/Account');
const {validateToken} = require('../middlewares/AuthMiddleware');
const router = express.Router();

router.post("/",addAcount)

router.get("/summery",validateToken,accDetails)

router.get("/getaccnum",validateToken,getAccNo)

router.post("/sendmoney",validateToken,sendMoney)

router.post("/otp",validateToken,sendOtp)

router.delete("/clearotp",validateToken,clearOtp)

router.post("/qr",validateToken,qr)

router.post("/qrReceve",validateToken,qrReceive)


module.exports = router;

const {Accounts,Users,Otps,Qrs} = require("../models");
const nodemailer = require('nodemailer');
const qrCode = require('qrcode');
const { where } = require("sequelize");


const addAcount = async (req, res) => {
    try {
        const accountNumber = Math.floor(10000000 + Math.random() * 90000000).toString();

        const acc = {
            accountType: req.body.accountType,
            branch: req.body.branch,
            balance: req.body.balance,
            accountNumber: accountNumber
        };

        const newAcc = await Accounts.create(acc);
        
        res.json(newAcc);
    } catch (error) {
        console.error('Error adding account:', error);
        res.status(500).json({ error: 'Failed to add account' });
    }
};

const sendMoney = async(req,res) =>{
    const {accountNumber,money,otp} = req.body;

    const userAcc = await Accounts.findOne({
        where:{UserId:req.user.id}
    })

    const acc = await Accounts.findOne({
        where:{accountNumber:accountNumber}
    })

    const user = await Users.findByPk(req.user.id);

    if(!acc){
        res.json("account is not found")
    }
 

    else{

       const valideOtp = await Otps.findOne({
            where:{otp:otp}
       })

       if(valideOtp){
        const newBalance = acc.balance + money;
        acc.balance = newBalance;
        await acc.save()
        
        const senderBalance = userAcc.balance - money;
        userAcc.balance = senderBalance;
        await userAcc.save();

        res.json('transaction successfully')

       }
        
       else{
        res.json("otp is invalid")
       } 

    }
}

const sendOtp = async (req,res) =>{

    const user = await Users.findByPk(req.user.id);
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    const {accountNumber} = req.body;

    const userAcc = await Accounts.findOne({
        where:{UserId:req.user.id}
    })

    const acc = await Accounts.findOne({
        where:{accountNumber:accountNumber}
    })


    if(!acc){
        res.json({error:"account is not found"})
    }

    else{

        await Otps.create({otp:otp,userid:req.user.id})

        let config = {
            service: 'gmail',
            auth: {
                user: 'r.a.sulakshana@gmail.com',
                pass: 'kzqv msxv whmz klms'
            }
        }
    
        let transporter = nodemailer.createTransport(config);

        const mailOptions = {
            from: 'r.a.sulakshana@gmail.com',
            to: user.userEmail,
            subject: 'Transaction details',
            html: `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #ffffff;
                            border-radius: 10px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #333333;
                        }
                        p {
                            color: #666666;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Transaction details</h1>
                        <p>Your OTP is.${otp}</p>
                        <p>Best regards,</p>
                    </div>
                </body>
                </html>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).json({ success: false, error: "Failed to send email" });
            } else {
                console.log("Email sent:", info.response);
                res.status(200).json({ success: true, message: "Email sent successfully" });
            }
        });
    }   
}

const accDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        const acc = await Accounts.findAll({
            where: { UserId: userId },
            include: [Users]
        });

        if (!acc) {
            return res.status(404).json({ error: 'Account not found' });
        }

        res.json(acc);
    } catch (error) {
        console.error('Error fetching account details:', error);
        res.status(500).json({ error: 'Failed to fetch account details' });
    }
};

const getAccNo =async (req,res) =>{

    const userId = req.user.id;
    const acc = await Accounts.findAll({
        where:{UserId: userId}
    })
    if(!acc){
        res.json("account not found")
    }

    res.json(acc)

}

const clearOtp = async(req,res) =>{

    await Otps.destroy({
        where: { userid: req.user.id}
    });

    res.json("otps delete success")

}

const qr = async(req,res) =>{
  const {url,accNum} = req.body;
  const qrId = Math.floor(1000 + Math.random() * 9000).toString();

  const userAcc = await Accounts.findOne({
    where:{accountNumber:accNum} 
  })

  if(!url){
    res.json("empty data")
  }

  if(!userAcc){
    res.json("invalid Account num")
  }

  const newBalance = userAcc.balance - url
  userAcc.balance = newBalance
  await userAcc.save();

  await Qrs.create({qrcode:qrId,userid:req.user.id});

  qrCode.toDataURL(url+"/"+qrId,function(err,qrUrl){
    res.json({url:qrUrl,id:qrId})
  })
} 

const qrReceive = async (req, res) => {
    try {
        const { amount,qrCode } = req.body;

        const userAcc = await Accounts.findOne({
            where: { UserId: req.user.id }
        });

        if (!userAcc) {
            return res.status(404).json({ error: 'User account not found' });
        }
         
        const code = await Qrs.findOne({
            where:{qrcode:qrCode}
        })
        
        if(code){
            const newBalance = userAcc.balance + amount;
            userAcc.balance = newBalance;
            await userAcc.save();
            await Qrs.destroy({
                where:{qrcode:qrCode}
            })
            res.json({ newBalance,message:`Your New Balance is ${newBalance}` });
        }

        else{
            res.json({message:"Invalid QR"})
        }
        
    } catch (error) {
        console.error('Error in qrReceive:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {addAcount,accDetails,sendMoney,sendOtp,clearOtp,getAccNo,qr,qrReceive} 

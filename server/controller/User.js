const {Users} = require("../models");
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken')


const getAll =async (req,res)=>{
    try{
        const users =await Users.findAll()
        res.json({users:users,message:"success"})
    } catch(error){
         console.error("error getAll",error)
         res.status(500).json({error:'Failed to getAll'})
    }
    
    
}

const addUser = async (req, res) => {
    try {
        const user = req.body;
        const userName = await Users.findOne({
            where:{userName:user.userName}
        })

        const userEmail = await Users.findOne({
            where:{userEmail:user.userEmail}
        })

        const phoneNumber = await Users.findOne({
            where:{phoneNumber:user.phoneNumber}
        })

        if(userName){
            res.json("user name is alredy used")
        }

        else if(userEmail){
            res.json("user Email is alredy used")
        }

        else if(phoneNumber){
            res.json("mobile number is alredy used")
        }

        else{
            bcrypt.hash(user.password,10).then((hash)=>{
                Users.create({
                    userName:user.userName,
                    password:hash,
                    userEmail:user.userEmail,
                    phoneNumber:user.phoneNumber
                })
                res.json("registation successfully")
            })
        }
       
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Failed to add user" });
    }
};

const login = async (req,res) =>{
    try{
        const {userName,password} = req.body;
        const user = await Users.findOne({
            where:{userName:userName}
        })
    
        if(!user){
            res.json("user does not exist")
        }
    
        else{
            const match =await bcrypt.compare(password,user.password);
    
           if(!match){
            res.json("user name and password does not match")
            }
    
            else{
                const accessToken = sign({userName:user.userName,id:user.id},"bank secret");
                res.json({token:accessToken,userName:user.userName,id:user.id})
    
            }     
        }    

    }catch(error){
        console.error(error)
        res.status(500).json(error)
    }
    
}


module.exports = {
    getAll,
    addUser,
    login
}
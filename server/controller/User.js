const {Users} = require("../models")


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
        const newUser = await Users.create(user); 
        res.json(newUser);
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Failed to add user" });
    }
};


module.exports = {
    getAll,
    addUser
}
module.exports = (Sequelize,DataTypes) =>{
    const Otps = Sequelize.define("Otps",{
        otp:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userid:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
    })


    return Otps;
}
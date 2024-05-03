module.exports = (Sequelize,DataTypes) =>{
    const Qrs = Sequelize.define("Qrs",{
        qrcode:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userid:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
    })


    return Qrs;
}
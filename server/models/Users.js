module.exports = (Sequelize,DataTypes) =>{
    const Users = Sequelize.define("Users",{
        userName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        userEmail:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull:false,
        },
             
    })

    Users.associate = (models) => {
        Users.hasMany(models.Accounts, { foreignKey: 'UserId' }); 
    };


    return Users;
}
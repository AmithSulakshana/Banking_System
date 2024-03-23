module.exports = (Sequelize,DataTypes) =>{
    const Accounts = Sequelize.define("Accounts",{
        accountType:{
            type:DataTypes.STRING,
            allowNull:false
        },
        accountNumber:{
            type:DataTypes.STRING,
            allowNull:false
        },
        branch:{
            type:DataTypes.STRING,
            allowNull:false
        },
        balance:{
            type:DataTypes.FLOAT,
            allowNull:false
        }

    })

    Accounts.associate = (models) => {
        Accounts.belongsTo(models.Users, { foreignKey: 'UserId' });
    };


    return Accounts;
}
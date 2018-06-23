module.exports = (sequelize, DataTypes) => {
    var Budget = sequelize.define("Budget", {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        cost: {
            type:DataTypes.INTEGER(10),
            allowNull: false
        },
        UserId: {
            type:DataTypes.INTEGER(10),
            allowNull: false
        },
        // remaining: {
        //     type:DataTypes.INTEGER(10),
        //     allowNull: false
        // },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    Budget.associate = function(models) {
        Budget.belongsTo(models.User);
      };
    return Budget;
}
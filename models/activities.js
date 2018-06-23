module.exports = (sequelize, DataTypes) => {
    var Content = sequelize.define("Content", {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        categories: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        activity: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        rating: {
            type:DataTypes.INTEGER(10),
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
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    Content.associate = function(models) {
        Content.belongsTo(models.User);
      };
    return Content;
}
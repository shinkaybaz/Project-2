const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },

    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    pass: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    lastlogin_time: {
      type: DataTypes.DATE,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,

  }, {
    timestamps: true,
  }, {
    classMethods: {
      validPassword: (pass, passwd, done, user) => {
        bcrypt.compare(pass, passwd, (err, isMatch) => {
          if (err) console.log(err);
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        });
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Content, {
      onDelete: "cascade"
    });
  };

  return User;
}

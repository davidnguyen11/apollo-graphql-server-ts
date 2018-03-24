module.exports = (sequelize: any, DataTypes: any) => (
  sequelize.define("information", {
    site: { type: DataTypes.STRING },
    link: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  }, {
    classMethods: {
      associate: ({ user, information }) => {
        information.belongsTo(user);
      },
    },
  }));

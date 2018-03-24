module.exports = (sequelize: any, DataTypes: any) => (
  sequelize.define("user", {
    email: { type: DataTypes.STRING, unique: "email" },
    username: { type: DataTypes.STRING, unique: "username" },
    password: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN, defaultValue: false },
  }));

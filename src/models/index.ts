import * as fs from "fs";
import * as path from "path";

const config = require("../database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config);

const basename = path.basename(module.filename);
const db: any = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== basename;
  })
  .forEach(file => {
    if (file.slice(-3) !== ".js") return;
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (
    db[modelName].options.classMethods &&
    db[modelName].options.classMethods.associate
  ) {
    db[modelName].options.classMethods.associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

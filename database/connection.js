//Database code/logic goess here

const { Sequelize, DataTypes } = require("sequelize");

//Mathi ko lai xuta xuttai yesore nee garna milxa
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

//const bookModel = require("./models/bookModel")

const sequelize = new Sequelize(
  "postgresql://postgres.xxmdhexzolwymxgtflrt:360@ABD@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated, connected succesfully!!");
  })
  .catch((err) => {
    console.log("There is a error " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Mathi ko object yesore nee bnauna paaeyo
// const db = {
//   Sequelize :Sequelize,
//   sequelize : sequelize
// }

//bookModel();

//direct tala ko jsore ekai line maa nee trigger garna milyo
db.books = require("./models/bookModel")(sequelize, DataTypes);

//Migrate ko code yo chai
sequelize.sync({ alter: false }).then(() => {
  console.log("Migrate vayo hai.");
});

module.exports = db;

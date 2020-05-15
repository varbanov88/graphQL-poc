const { Sequelize } = require("sequelize");

module.exports.createStore = () => {
  const db = new Sequelize("backend_test", "postgres", "postgrestest", {
    host: "18.184.132.169",
    dialect: "postgres",
    port: 5430,
  });
  // const db = new Sequelize(
  //   "postgres://postgres:postgrestest@18.184.132.169:5430/backend_test"
  // );

  db.authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  const contacts = db.define(
    "contacts",
    {
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      company_id: Sequelize.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  const companies = db.define(
    "companies",
    {
      company_name: Sequelize.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return { db, contacts, companies };
};

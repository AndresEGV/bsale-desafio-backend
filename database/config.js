module.exports = {
  db: {
    database: process.env.DB_DATABASE || "bsale_test",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",

    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/product");
const sequelize = require("./database/database");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, console.log(`Servidor up en puerto: ${PORT}`));
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la bd");
  } catch (error) {
    console.log("Error algo salio mal: ", error);
  }
})();

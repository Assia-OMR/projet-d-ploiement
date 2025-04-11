const express = require("express");
const dotenv = require("dotenv");
const usersRoutes = require("./routes/users");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/users", usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

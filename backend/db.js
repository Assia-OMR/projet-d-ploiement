const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "userpassword",
  database: "users_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
  } else {
    console.log("Connecté à la base de données MySQL !");
  }
});

module.exports = connection;

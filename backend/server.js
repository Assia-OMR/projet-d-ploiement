require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json()); // Pour gérer les requêtes en JSON
app.use(cors()); // Activer CORS pour le frontend

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur MongoDB :", err));

// Route de test
app.get("/", (req, res) => {
    res.send("API fonctionne !");
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

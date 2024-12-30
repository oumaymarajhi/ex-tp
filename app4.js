const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Utiliser body-parser pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Middleware validateAge
const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (age !== undefined && age < 0) {
    const error = new Error("L'âge ne peut pas être négatif.");
    error.status = 400;
    return next(error);
  }

  // Appeler next() pour passer au middleware suivant
  next();
};

// Exemple de route POST qui utilise le middleware validateAge
app.post('/register', validateAge, (req, res) => {
  res.send('Requête POST réussie');
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Utiliser body-parser pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Middleware de vérification des champs
const validatePostRequest = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Message d’erreur: username et password sont requis.');
  }

  // Appeler next() pour passer au middleware suivant
  next();
};

// Exemple de route POST qui utilise le middleware de vérification
app.post('/login', validatePostRequest, (req, res) => {
  res.send('Requête POST réussie');
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

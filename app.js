const express = require('express'); // Importer le module express
const app = express(); // Créer une instance d'application Express
const port = 3000; // Définir le port d'écoute

// Définir la route pour la racine
app.get('/', (req, res) => {
  res.send('Hello World!'); // Répondre avec "Hello World!"
});

// Écouter sur le port défini
app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Utiliser body-parser pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Middleware de validation des données du produit
const validateProductData = (req, res, next) => {
  const { name, price } = req.body;

  if (typeof name !== 'string' || name.trim() === '') {
    const error = new Error("Le champ 'name' doit être présent, non vide, et de type chaîne de caractères.");
    error.status = 400;
    return next(error);
  }

  if (typeof price !== 'number' || price <= 0) {
    const error = new Error("Le champ 'price' doit être présent et avoir une valeur numérique positive.");
    error.status = 400;
    return next(error);
  }

  // Appeler next() pour passer au middleware suivant
  next();
};

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// Route POST pour ajouter un produit
app.post('/add-product', validateProductData, (req, res) => {
  const { name, price } = req.body;
  // Ici, on pourrait ajouter le produit à une base de données
  res.status(201).json({
    message: 'Produit ajouté avec succès',
    product: { name, price }
  });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

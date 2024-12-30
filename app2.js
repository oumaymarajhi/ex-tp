const express = require('express');
const app = express();

// Middleware de logging
const requestLogger = (req, res, next) => {
  const currentDateTime = new Date().toISOString();
  const httpMethod = req.method;
  const requestPath = req.path;

  console.log(`[${currentDateTime}] ${httpMethod} ${requestPath}`);

  // Appeler next() pour passer au middleware suivant
  next();
};

// Utiliser le middleware dans l'application
app.use(requestLogger);

// Exemple de route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

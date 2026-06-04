const express = require('express');
const app = express();
const PORT = 3000;

// Aquí debemos importar las rutas que definamos
const clientesRoutes = require('./API/routes/clientesRoutes');



app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

app.get('/prueba', (req, res) => {
  res.send('Esto es una ruta de prueba, puedo definir una ruta o algo aquí');
});

app.use('/api', clientesRoutes);

//Respuesta con formato con html tiene que ir al final por que si no se ejecuta primero y no tienen acceso a las rutas
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1><p>La ruta que intentas acceder no existe.</p>');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

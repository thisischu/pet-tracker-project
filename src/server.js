// server.js
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes')

const app = express();
const port = 8080;

app.use(express.json());

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

// app.post('/pets', create);
app.use(apiRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


 
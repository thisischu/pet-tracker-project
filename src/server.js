// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.json());

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const path = require('path');

const app = express();

// Serve static files (e.g. CSS, JS) from public
app.use(express.static(path.join(__dirname, '../public')));

// Serve Landing.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/Landing.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

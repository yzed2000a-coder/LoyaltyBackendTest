const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve files in "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello! Test server running.</h1>
    <img src="/fun.jpg" alt="Fun picture" width="300">
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

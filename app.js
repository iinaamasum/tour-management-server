const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

// root route
app.all('/', async (req, res, next) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
  });
});

module.exports = app;

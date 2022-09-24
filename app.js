const express = require('express');
const app = express();
const cors = require('cors');
const tourRoute = require('./routes/tour.route');

// middleware
app.use(cors());
app.use(express.json());

// route section
app.use('/api/v1/', tourRoute);

// root route
app.all('/', async (req, res, next) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
  });
});

module.exports = app;

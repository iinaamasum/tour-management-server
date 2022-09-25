const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./app');
const port = process.env.port || 5001;

// mongoose connection
mongoose.connect(process.env.DB_URL).then(() => {
  console.log('DB connection established');
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

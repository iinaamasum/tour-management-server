const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || '5001';

app.use(cors());
app.use(express.json());

app.all('/', async (req, res, next) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
  });
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

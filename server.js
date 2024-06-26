/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');

// config
dotenv.config();

// const
const app = express();

// DATABASE CONNECTION
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());

const giftRoute=require('./src/routes/gift.route')

// local APIs

app.use('/v1/api', giftRoute);


// API for uploads file (photo, galleries)
app.get('/uploads/:id', (req, res) => {
  res.sendFile(path.join(__dirname, `./uploads/${req.params.id}`));
});

// API for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});

module.exports = app;

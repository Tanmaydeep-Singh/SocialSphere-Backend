const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const { connectDatabase } = require('./config');

const {routes } = require('./Router/router')

const app = express();
const PORT = 8080;


// Enabling CORS
app.use(cors());

// Serving static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/api', routes);


connectDatabase()
  .then(async () => {

    app.listen(PORT, () => {
      console.log(`Server is running on  http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


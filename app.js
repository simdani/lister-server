const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const app = express();

// connect with mongoose to mongodb
mongoose.connect(config.DATABASE_URI)
  .then(() => console.log('Mongodb connected'))
  .catch((err) => console.log(err));

// Load routes
const notes = require('./routes/notes');

let port;
if (config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined'));
  port = 5000;
} else {
  port = 5001;
}

// bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// handle routes
app.use('/notes', notes);

app.listen(port, () => {
  console.log(`server is listenin on port ${port}`);
});

module.exports = app;

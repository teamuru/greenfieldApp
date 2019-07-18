const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const path = require('path');

// An instance of express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'bundle.js'), (err) => {
    if (err) {
      res.sendStatus(500);
    }
  });
});

// Catch all incase user refreshes on react-router handled url
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'), (err) => {
    if (err) {
      res.sendStatus(500);
    }
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});

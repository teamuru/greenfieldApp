var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

const path = require('path');

// An instance of express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/', (req, res) => {
  if (err) {
    console.log('err', err);
    res.send(`err`).status(500);
  } else {
    res.send(`working`).status(200);
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});

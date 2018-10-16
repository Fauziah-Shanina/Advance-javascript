const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const tvShowRouter =  require('./tvShow/tvShowRouter');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/tvShow', tvShowRouter);

// Exercise #1
app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//GET http://localhost:3000/tvshow/


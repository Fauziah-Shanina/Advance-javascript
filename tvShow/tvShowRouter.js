const express = require('express');
const TvShow = require('./TvShow');
const tvShowService= require('./tvShowService')
const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
});

tvShowRouter.get('/:id', (req, res) => {
    res.json(tvShowService.getById(req.params.id));
});

tvShowRouter.post('/', (req, res) => {
    const name = req.body.name;
    const genre = req.body.genre;
    const newTvShow = tvShowService.createTvShow(name, genre);
    res.send(newTvShow);
  });

// app.route('/person/:name/:age').get((req, res) => {
//     const name = req.params.name; // bob
//     const age = req.params.age; // 25
//     res.send(`Hello ${name}, you are ${age} years old`);
//   });
 module.exports=tvShowRouter;


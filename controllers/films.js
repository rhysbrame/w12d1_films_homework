var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var Router = express.Router;
var filmRouter = new Router();


filmRouter.delete('/:id', function (req,res){
  films.splice(req.params.id, 1);
  res.json(films);
});

filmRouter.put('/:id', function (req,res){
  var updatedFilm = req.body.film;
  films[req.params.id] = updatedFilm;
  res.json(films);
});

filmRouter.post('/', function(req, res){
  films.push( req.body.film );
  res.json(films);
});

filmRouter.get('/', function (req,res){
  res.json(films);
});

filmRouter.get('/:id', function (req, res){
  var film = films[req.params.id];
  res.json({film: film});
});

module.exports = filmRouter;
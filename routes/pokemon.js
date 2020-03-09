// NEEDS THE RES.RENDER(?) TO BE MODIFIED ONCE HTML IS COMPLETE!!!!!!!!!!!!!!!!!!!!!!

var express = require("express");
var db = require("../models");
var router = express.Router();

// // Import the model (cat.js) to use its database functions.
// var Pokemon = require("../configs/pokemonModel.js");
// var Generate = require("../models/generated_pokemon");

// Create all our routes and set up logic within those routes where required.
router.get("/api/pokemon", function(req, res) {
  db.pokemon.findAll({ attributes: ["name"] }).then(function(dbPokemon) {
    res.send(dbPokemon);
  });
});

router.get("/generate", function(req, res) {
  db.Generated.findAll({ attributes: ["name"] }).then(function(dbPokemon) {
    res.send(dbPokemon);
  });
});

router.get("/api/pokemon/:name", function(req, res) {
  console.log(req.params.name);
  db.pokemon
    .findOne({
      attributes: ["name", "type", "hp", "attack", "defense", "speed"],
      where: {
        name: req.params.name
      }
    })
    .then(function(dbPost) {
      res.send(dbPost);
    });
});

router.get("/api/generated/:name", function(req, res) {
  console.log(req.params);
  db.Generated.findOne({
    attributes: ["name", "type", "hp", "attack", "defense", "speed"],
    where: {
      name: req.params.name
    }
  }).then(function(dbPost) {
    res.send(dbPost);
  });
});

router.post("/api/posts", function(req, res) {
  console.log(req.body);
  db.Generated.create({
    name: req.body.name,
    type: req.body.type,
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    speed: req.body.speed
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

router.delete("/api/generated/:name", function(req, res) {
  db.Generated.destroy({
    where: {
      name: req.params.name
    }
  }).then(function(dbPost) {
    res.send(dbPost);
  });
});

module.exports = router;

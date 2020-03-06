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
  db.generated.findAll({ attributes: ["name"] }).then(function(dbPokemon) {
    res.send(dbPokemon);
  });
});

router.get("/api/pokemon/:name", function(req, res) {
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

//
router.get("/api/generated/:name", function(req, res) {
  db.generated_pokemon
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

//post generated pokemon
router.post("/api/generate", function(req, res) {
  console.log(req.body);
  db.Generated.create({
    name: req.body.name,
    type: getRandomType(),
    hp: Math.floor(Math.random() * 180),
    attack: Math.floor(Math.random() * 180),
    defense: Math.floor(Math.random() * 180),
    speed: Math.floor(Math.random() * 180)
  }).then(function(dbPost) {
    res.send(dbPost);
  });
});

function getRandomType() {
  var type;
  var randomNum = Math.floor(Math.random() * 4);
  switch (randomNum) {
    case 0:
      type = "water";
      break;
    case 1:
      type = "fire";
      break;
    case 2:
      type = "grass";
      break;
    case 3:
      type = "dragon";
      break;
    default:
      type = "water";
      break;
  }
  return type;
}

router.delete("/api/generate/:id", function(req, res) {
  db.Generated.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;

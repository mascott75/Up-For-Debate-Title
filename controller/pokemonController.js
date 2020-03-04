// NEEDS THE RES.RENDER(?) TO BE MODIFIED ONCE HTML IS COMPLETE!!!!!!!!!!!!!!!!!!!!!!

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var pokemon = require("../models/pokemonModel.js");
var generate = require("../models/generated_pokemon");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    pokemon.all(function() {
        var pokemon = {
            pokemons: data
        }
        console.log(pokemon);
        res.render("?", pokemon);
    });
});

router.get("/generate", function (req, res) {
    generate.all(function() {
        var generate = {
            generated = data
        }
        console.log(generate);
        res.render("?", generate);
    });
});

router.post("/api/generate", function (req, res) {
    generate.create([
        "name", "type", "hp", "attack", "defense", "speed"
    ], [
        req.body.name, req.body.type, req.body.hp, req.body.attack, req.body.defense, req.body.speed
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// router.put("/api/generate/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     generate.update({
//         eaten: req.body.eaten
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

router.delete("/api/generate/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    generate.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

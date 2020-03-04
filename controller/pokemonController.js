// NEEDS THE RES.RENDER(?) TO BE MODIFIED ONCE HTML IS COMPLETE!!!!!!!!!!!!!!!!!!!!!!


var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var pokemon = require("../models/pokemonModel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    pokemon.all(function () {
        res.render("?");
    });
});

router.post("/api/generate", function (req, res) {
    burger.create([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log(req.body.eaten)

    burger.update({
        eaten: req.body.eaten
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
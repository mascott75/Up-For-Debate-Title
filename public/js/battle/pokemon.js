var pokemon1;
var pokemon2;
var textArea = $("#textarea");

import { Character } from "./constructor.js";

$("#btn1").on("click", function() {
  battle(pokemon1, pokemon2);
});
function battle(pokemon1, pokemon2) {
  var battleString = "";
  while (pokemon1.isAlive() && pokemon2.isAlive()) {
    if (pokemon1.speed > pokemon2.speed) {
      pokemon1.eatBerry();
      pokemon2.eatBerry();
      battleString += pokemon1.attack(pokemon2);
      battleString += pokemon2.attack(pokemon1);
    } else {
      pokemon2.eatBerry();
      pokemon1.eatBerry();
      battleString += pokemon2.attack(pokemon1);
      battleString += pokemon1.attack(pokemon2);
    }
    updateField1();
    updateField2();
  }
  if (pokemon1.isAlive()) {
    battleString += `${pokemon2.name} is defeated!!`;
  } else {
    battleString += `${pokemon1.name} is defeated!!`;
  }
  textArea.text(battleString);
}
function updateField1() {
  $("#liHpOne").text("HP: " + pokemon1.hp);
  $("#liAttOne").text("Atk: " + pokemon1.atk);
  $("#liDefOne").text("Def: " + pokemon1.defense);
  $("#liSpOne").text("Spd: " + pokemon1.speed);
}
function updateField2() {
  $("#liHpTwo").text("HP: " + pokemon2.hp);
  $("#liAttTwo").text("Atk: " + pokemon2.atk);
  $("#liDefTwo").text("Def: " + pokemon2.defense);
  $("#liSpTwo").text("Spd: " + pokemon2.speed);
}
$.get("/generate", function(generated) {
  $.get("/api/pokemon", function(pokemon) {
    pulDownPop(pokemon, generated);
  });
});

function pulDownPop(pokemon, generated) {
  var nameTag = "<option value='0'>Select</option>";

  for (var j = 0; j < generated.length; j++) {
    nameTag += "<option value='P'>" + generated[j].name + "</option>";
  }
  for (var i = 0; i < pokemon.length; i++) {
    nameTag += "<option value='U'>" + pokemon[i].name + "</option>";
  }
  $("#selectTwo").append($(nameTag));
  $("#selectOne").append($(nameTag));
  // document.getElementById("selectGen").innerHTML = nameTag;
}

$("#selectOne").on("change", populatePokemonSide1);
$("#selectTwo").on("change", populatePokemonSide2);

function populatePokemonSide1() {
  console.log(this);

  // CCflag = true;
  var pokemonName = $(`#${this.id} :selected`).text();
  var pokemonTable = $(`#${this.id} :selected`).val();
  var pokemonNameLength = pokemonName.length;
  if (pokemonTable === "U") {
    /*place call to populate*/
    console.log("is a P");
    console.log("name!!! " + pokemonName);
    console.log("im selectVal2= " + pokemonTable);
    console.log("im selectVal=" + pokemonNameLength);
    $.get("/api/pokemon/" + pokemonName, function(res) {
      console.log("is a P= " + JSON.stringify(res));
      applyStats1(res);
    });
  } else {
    /*place call to populate*/
    console.log("is a U");
    console.log("NAME " + pokemonName);
    console.log("im selectVal2=" + pokemonTable);
    console.log("im selectVal=" + pokemonNameLength);
    $.get("/api/generated/" + pokemonName, function(res) {
      console.log("is a U = " + JSON.stringify(res));
    }).then(function(res) {
      console.log("this is some " + JSON.stringify(res));
      applyStats1(res);
    });
  }
}
function populatePokemonSide2() {
  console.log(this);

  // CCflag = true;
  var pokemonName = $(`#${this.id} :selected`).text();
  var pokemonTable = $(`#${this.id} :selected`).val();
  var pokemonNameLength = pokemonName.length;
  if (pokemonTable === "U") {
    /*place call to populate*/
    console.log("is a P");
    console.log("name!!! " + pokemonName);
    console.log("im selectVal2=" + pokemonTable);
    console.log("im selectVal=" + pokemonNameLength);
    $.get("/api/pokemon/" + pokemonName, function(res) {
      console.log("is a P= " + JSON.stringify(res));
      applyStats2(res, "#imgPokeTwo");
    });
  } else {
    /*place call to populate*/
    console.log("is a U");
    console.log("NAME " + pokemonName);
    console.log("im selectVal2=" + pokemonTable);
    console.log("im selectVal=" + pokemonNameLength);
    $.get("/api/generated/" + pokemonName, function(res) {
      console.log("is a U = " + JSON.stringify(res));
    }).then(function(res) {
      console.log("this is some " + JSON.stringify(res));
      applyStats2(res, "#imgPokeTwo");
    });
  }
}

function applyStats1(res) {
  $("#pokeNameOne").text(res.name);
  $("#liHpOne").text("HP: " + res.hp);
  $("#liAttOne").text("Atk: " + res.attack);
  $("#liDefOne").text("Def: " + res.defense);
  $("#liSpOne").text("Spd: " + res.speed);
  pokeApiCall1(res.name);
  pokemon1 = new Character(
    res.name,
    res.type,
    res.hp,
    res.attack,
    res.defense,
    res.speed
  );
}

function applyStats2(res) {
  $("#pokeNameTwo").text(res.name);
  $("#liHpTwo").text("HP: " + res.hp);
  $("#liAttTwo").text("Atk: " + res.attack);
  $("#liDefTwo").text("Def: " + res.defense);
  $("#liSpTwo").text("Spd: " + res.speed);
  pokeApiCall2(res.name);
  pokemon2 = new Character(
    res.name,
    res.type,
    res.hp,
    res.attack,
    res.defense,
    res.speed
  );
}

function pokeApiCall1(resName) {
  // Here we grab the text from the input box
  var name = resName.toLowerCase();

  // Here we construct our URL
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + name;
  console.log(queryURL);

  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view

  // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var imgPokeOne = response.sprites.front_default;
    $("#imgPokeOne").attr("src", imgPokeOne);
    console.log(imgPokeOne);
  });
}
function pokeApiCall2(resName) {
  // Here we grab the text from the input box
  var name = resName.toLowerCase();

  // Here we construct our URL
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + name;
  console.log(queryURL);

  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view

  // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var imgPokeOne = response.sprites.front_default;
    $("#imgPokeTwo").attr("src", imgPokeOne);
    console.log(imgPokeOne);
  });
}

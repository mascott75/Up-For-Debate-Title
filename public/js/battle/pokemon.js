$.get("/generate", function(generated) {
  $.get("/api/pokemon", function(pokemon) {
    pulDownPop(pokemon, generated);
  });
});

function pulDownPop(pokemon, generated) {
  console.log("im in");
  console.log(pokemon);
  console.log(generated);
  var nameTag = "<option value='0'>Select</option>";

  for (j = 0; j < generated.length; j++) {
    nameTag += "<option value='P'>" + generated[j].name + "</option>";
  }
  for (i = 0; i < pokemon.length; i++) {
    nameTag += "<option value='U'>" + pokemon[i].name + "</option>";
  }
  $("#selectTwo").append($(nameTag));
  $("#selectOne").append($(nameTag));
  // document.getElementById("selectGen").innerHTML = nameTag;
}

$("#selectOne").on("change", function(event) {
  // CCflag = true;
  var pokemonName = $("#selectOne :selected").text();
  var pokemonTable = $("#selectOne :selected").val();
  var pokemonNameLenght = pokemonName.length;
  if (pokemonTable === "P") {
    /*place call to populate*/
    console.log("is a P");
    console.log("im selectVal=" + pokemonName);
    console.log("im selectVal2=" + pokemonTable);
    console.log("im selectVal=" + pokemonNameLenght);
  } else {
    /*place call to populate*/
    console.log("is a U");
    console.log("im selectVal=" + pokemonName);
    console.log("im selectVal2=" + pokemonTable);
    console.log("im selectVal=" + pokemonNameLenght);
  }
});

function pokemonDisplay(pokemanStatDisplay) {
  console.log("im in");
  pokemanStatDisplay = "Two";
  document.getElementById("pokeName" + pokemanStatDisplay).textContent =
    "new text";
  document.getElementById("imgPoke" + pokemanStatDisplay).src =
    "http://placehold.it/100x100";
  document.getElementById("liHp" + pokemanStatDisplay).textContent = "new text";
  document.getElementById("liAtt" + pokemanStatDisplay).textContent =
    "new text";
  document.getElementById("liDef" + pokemanStatDisplay).textContent =
    "new text";
  document.getElementById("liSp" + pokemanStatDisplay).textContent = "new text";
}

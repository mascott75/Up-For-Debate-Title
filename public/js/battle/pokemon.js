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

$("#selectOne").on("change",populatePokemonSide("One"));
$("#selectTwo").on("change",populatePokemonSide("Two"));
function populatePokemonSide(pullID,event) {
  console.log(this);
  console.log(pullID);
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
    $.get("/api/generated/" + pokemonName, function(res){
      console.log("is a P="+res)
    });
  } else {
    /*place call to populate*/
    console.log("is a U");
    console.log("NAME" + pokemonName);
    console.log("im selectVal2=" + pokemonTable);
    console.log("im selectVal=" + pokemonNameLength);
    $.get("/api/pokemon/" + pokemonName, function(res){
      console.log("is a U ="+res)
      let displayData = res;
    });
  }
  let displayData = res;
  pokemonDisplay(pullID,displayData);
}
function pokemonDisplay(pokemanStatDisplay,displayData) {
  console.log("im in");
  // pokemanStatDisplay = "Two";
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

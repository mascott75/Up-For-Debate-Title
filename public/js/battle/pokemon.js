$(document).ready(function() {
  $("#btn1").on("click", function() {});

  $("#start-btn").on("click", function() {
    // starts the battle
  });
});
function pulDownPop(data, data2) {

  console.log("im in");
  data = ["me", "them", "him"];
  data2 = ["ME", "THEM", "HIM"];

  var nameTag = "<option value='0'>Select</option>";

  for (i = 0; i < data.length; i++) {

    nameTag += "<option value='U'>" + data[index] + "</option>"
  }
  for (index = 0; index < data2.length; index++) {

    nameTag += "<option value='P'>" + data2[index] + "</option>"
  }
  document.getElementById("selectOne").innerHTML = nameTag;
  document.getElementById("selectTwo").innerHTML = nameTag;
  // document.getElementById("selectGen").innerHTML = nameTag;
}

$("#selectOne").on("change", function (event) {
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
  pokemanStatDisplay = "Two"
  document.getElementById("pokeName" + pokemanStatDisplay).textContent = 'new text';
  document.getElementById("imgPoke" + pokemanStatDisplay).src = "http://placehold.it/100x100"
  document.getElementById("liHp" + pokemanStatDisplay).textContent = 'new text';
  document.getElementById("liAtt" + pokemanStatDisplay).textContent = 'new text'
  document.getElementById("liDef" + pokemanStatDisplay).textContent = 'new text'
  document.getElementById("liSp" + pokemanStatDisplay).textContent = 'new text'
}
function pokemonFight(pokemon1, pokemon2) {
  let pName1 = "fred";
  let pName2 = "derf";
  let p1Hp = 20;
  let p2Hp = 30;
  let p1Att = 10;
  let p2Att = 5;
  let p1def = 3;
  let p2def = 4;
  let p1speed = 10;
  let p2speed = 12;
  let roundNum = 0;
  let PMfight = true;
  do {
    roundNum = roundNum + 1;
    console.log("round # " + roundNum);
    document.getElementById("textarea").textContent = "round # " + roundNum;

    if (p2speed < p1speed) {
      if (p1Hp >= 1) {
        damage = p1Att - p2def;
        if (damage < 1) damage = 0;
        p2Hp -= damage;
        console.log(pName1 + " attacks " + pName2 + " for " + damage + " points of damage");
        console.log(pName2 + " has " + p2Hp + " left");
        document.getElementById("textarea").textContent = pName1 + " attacks " + pName2 + " for " + damage + " points of damage";
        document.getElementById("textarea").textContent = pName2 + " has " + p2Hp + " left";
      };
      if (p2Hp >= 1) {
        damage = p2Att - p1def;
        if (damage < 1) damage = 0;
        p1Hp -= damage;
        console.log(pName2 + " attacks " + pName1 + " for " + damage + " points of damage");
        console.log(pName1 + " has " + p1Hp + " left");
        document.getElementById("textarea").textContent = " attacks " + pName1 + " for " + damage + " points of damage";
        document.getElementById("textarea").textContent = pName1 + " has " + p1Hp + " left";
      };
    } else {
      if (p2Hp >= 1) {
        damage = p2Att - p1def;
        if (damage < 1) damage = 0;
        p1Hp -= damage;
        console.log(pName2 + " attacks " + pName1 + " for " + damage + " points of damage");
        console.log(pName1 + " has " + p1Hp + " left");
        document.getElementById("textarea").textContent = " attacks " + pName1 + " for " + damage + " points of damage";
        document.getElementById("textarea").textContent = pName1 + " has " + p1Hp + " left";
      };

      if (p1Hp >= 1) {
        damage = p1Att - p2def;
        if (damage < 1) damage = 0;
        p2Hp -= damage;
        console.log(pName1 + " attacks " + pName2 + " for " + damage + " points of damage");
        console.log(pName2 + " has " + p2Hp + " left");
        document.getElementById("textarea").textContent = pName1 + " attacks " + pName2 + " for " + damage + " points of damage";
        document.getElementById("textarea").textContent = pName2 + " has " + p2Hp + " left";
      };
    }
    if (p2Hp <= 0) {
      console.log(pName2 + " has lost to  " + pName1);
      document.getElementById("textarea").textContent = pName2 + " has lost to  " + pName1;
      PMfight = false;
    };
    if (p1Hp <= 0) {
      console.log(pName1 + " has lost to  " + pName2);
      document.getElementById("textarea").textContent = pName1 + " has lost to  " + pName2;
      PMfight = false;
    };

  }
  while (PMfight);
}
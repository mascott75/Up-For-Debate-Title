$(document).ready(function() {
  // delete function
  $(".delete-pokemon").on("click", function() {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/generate/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted pokemon", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // post function
  $(".create-pokemon").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPokemon = {
      name: $("#name")
        .val()
        .trim(),
      type: getRandomType(),
      hp: Math.floor(Math.random() * 180),
      attack: Math.floor(Math.random() * 180),
      defense: Math.floor(Math.random() * 180),
      speed: Math.floor(Math.random() * 180)
    };

    // Send the POST request.
    $.ajax("/api/generate", {
      type: "POST",
      data: newPokemon
    }).then(function() {
      console.log("created new Pokemon!!");
      // Reload the page to get the updated list
      location.reload();
    });
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

$("#find-pokemon").on("click", function(event) {
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var name = $("#imgPokeOne").val();

  // Here we construct our URL
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + name;

  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view

  // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var imgPokeOne = response.data.sprite.front_default;
    $("#imgPokeOne").attr("src", imgPokeOne);
  });
});
// -----------------------------------------------------------------------
$(document).ready(function() {
  $("#btn1Gen").on("click", function() {});

  $("#start-btn").on("click", function() {
    // starts the battle
  });
});

$("#btn1Gen").on("click", function(event) {
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();
  // Here we append img url with random number between 1-151 to pull up random image
  var one = Math.floor(Math.random() * (151 - 1 + 1) + 1);
  Math.floor(Math.random() * 150 + 1);
  var two = Math.floor(Math.random() * (151 - 1 + 1) + 1);
  Math.floor(Math.random() * 150 + 1);
  // Here we create a variable to generate random number for different traits
  var hp = Math.floor(Math.random() * (255 - 1 + 1) + 1);
  Math.floor(Math.random() * 254 + 1);
  var attack = Math.floor(Math.random() * (526 - 5 + 1) + 5);
  Math.floor(Math.random() * 525 + 1);
  var defense = Math.floor(Math.random() * (250 - 5 + 1) + 5);
  Math.floor(Math.random() * 249 + 1);
  var speed = Math.floor(Math.random() * (260 - 5 + 1) + 5);
  Math.floor(Math.random() * 259 + 1);
  // img URL
  var queryURL =
    "https://images.alexonsager.net/pokemon/fused/" +
    one +
    "/" +
    one +
    "." +
    two +
    ".png";
  $("#imgPokeGen").attr("src", queryURL);
  // input trait numeric value
  $("#hpGen").text("HP: " + hp);
  $("#attGen").text("Attack: " + attack);
  $("#defGen").text("Defense: " + defense);
  $("#spGen").text("Speed: " + speed);
});
$("#btn3Gen").on("click", function(event) {
  event.preventDefault();
  var value = $("#pokeName").val();
  $("select").append("<option>" + value + "</option>");
});
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

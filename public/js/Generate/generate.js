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

$("#btn1Gen").on("click", function(event) {
  console.log("is working");
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();
  // Here we grab the text from the input box
  var one = Math.floor(Math.random() * (151 - 1 + 1) + 1); // x = 1, y = 151
  Math.floor(Math.random() * 150 + 1);

  var two = Math.floor(Math.random() * (151 - 1 + 1) + 1);
  Math.floor(Math.random() * 150 + 1);

  var attack = Math.floor(Math.random() * (3113 - 1 + 1) + 1);
  Math.floor(Math.random() * 3112 + 1);


  console.log(one);
  console.log(two);

  // var name = $("#imgPokeOne").val();

  // Here we construct our URL
  var queryURL =
    "https://images.alexonsager.net/pokemon/fused/" +
    one +
    "/" +
    one +
    "." +
    two +
    ".png";

  $("#imgPokeGen").attr("src", queryURL);
  $("#attGen").text(attack);
  console.log(attack);
  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view
  // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     var imgPokeOne = response.data.sprite.front_default;
  //     $("#imgPokeOne").attr("src", imgPokeOne);
  //     console.log(response);
  //   });
  // });
  // // -----------------------------------------------------------------------
  // $(document).ready(function() {
  //   $("#btn1").on("click", function() {});
  //   $("#start-btn").on("click", function() {
  //     // starts the battle
  //   });
});

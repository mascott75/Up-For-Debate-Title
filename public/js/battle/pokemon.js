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

  // -----------------------------------------------------------------------
});

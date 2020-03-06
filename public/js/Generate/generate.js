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
        .trim()
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

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
  type = getRandomType();
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();
  // Here we append img url with random number between 1-151 to pull up random image
  var one = Math.floor(Math.random() * (151 - 1 + 1) + 1);
  Math.floor(Math.random() * 150 + 1);

  var two = Math.floor(Math.random() * (151 - 1 + 1) + 1);
  Math.floor(Math.random() * 150 + 1);

  // Here we create a variable to generate random number for different traits

  hp = Math.floor(Math.random() * (255 - 1 + 1) + 1);
  Math.floor(Math.random() * 254 + 1);

  attack = Math.floor(Math.random() * (526 - 5 + 1) + 5);
  Math.floor(Math.random() * 525 + 1);

  defense = Math.floor(Math.random() * (250 - 5 + 1) + 5);
  Math.floor(Math.random() * 249 + 1);

  speed = Math.floor(Math.random() * (260 - 5 + 1) + 5);
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
  $("#typGen").text("Type: " + type);
  $("#attGen").text("Attack: " + attack);
  $("#defGen").text("Defense: " + defense);
  $("#spGen").text("Speed: " + speed);
});

$("#btn3Gen").on("click", function(event) {
  event.preventDefault();

  var value = $("#pokeName").val();

  $("select").append("<option>" + value + "</option>");

  var stats = {
    HP: hp,
    Type: type,
    Attack: attack,
    Defense: defense,
    Speed: speed
  };
  console.log(stats);

  $.post("/api/posts/", stats);
});

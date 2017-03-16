function startGame() {
  alert("Ready to bowl? Enter players");
  enterPlayers();
}

function enterPlayers() {
  $("#name-input-one").change(function() {
    $("#name-input-one").replaceWith($("#name-input-one").val());

  });
  $("#name-input-two").change(function() {
    $("#name-input-two").replaceWith($("#name-input-two").val());

  });
  $("#name-input-three").change(function() {
    $("#name-input-three").replaceWith($("#name-input-three").val());

  });
  $("#name-input-four").change(function() {
    $("#name-input-four").replaceWith($("#name-input-four").val());

  });
  $("#name-input-five").change(function() {
    $("#name-input-five").replaceWith($("#name-input-five").val());
  });

  if
}



$(document).ready(function() {
  enterPlayers();
});

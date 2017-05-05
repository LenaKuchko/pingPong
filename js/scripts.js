var gameResults = [];
function checkNumber(number) {
  // number = parseInt(number);
  // debugger;
  if (number%15 == 0) {
    return "ping-pong";
  } else if (number%5 == 0) {
    return "pong";
  } else if (number%3 == 0) {
    return "ping";
  } else {
    return number;
  }
}

function runGame(number) {
  if (isNaN(number)) {
    alert ("Please enter a number");
  } else {
    for (var i = 1; i <= number; i++) {
      gameResults.push(checkNumber(i));
    }
    return gameResults;
  }
}

$(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    $(".output").contents().remove();
    runGame($("input").val());
    gameResults.forEach(function (item) {
    $(".output").append("<li>" + item + "</li>");
    });
  });
});

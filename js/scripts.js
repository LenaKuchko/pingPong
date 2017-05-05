// function checkNumber(input) {
//   if (!isNaN(input)) {
//     return "num";
//   }
//   else {
//     return "not a num";
//   }
// }
function checkNumber(number) {
  // debugger;
  number = parseInt(number);
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

function game(number) {
  for (var i = 1; i <= number; i++) {
    // debugger;
    checkNumber(i);
    console.log(checkNumber(i));
  }
}
$(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    console.log(game("45"));
  });
});

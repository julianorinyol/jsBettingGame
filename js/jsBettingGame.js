// (var entireGame = function(){
// $(document).ready(function(){
var log = console.log.bind(console);

console.log('hhello');
player1 = {
  firstname: "Benny",
  lastname: "Templeton",
  nickname: "mad-dawg",
  cash: 100
};

var money = 100


$('#money').text("You have: $" + money);



$('#make-bet').on('click', function() {
  var answer = Math.floor((Math.random() * 10) + 1);
  log("answer: " + answer);

  var bet = parseInt($('#bet-input').val(),10);
  var guess = parseInt($('#guess-input').val(),10);

  if (bet < 5 || bet > 10 || isNaN(bet)) {
    $('#info-area')("you big bozo, you gotta bet between 5 and 10 ")
  }

  log("bet: " + bet)
  log("guess: " + guess)

  var message = "";
  if (guess) { 
    switch(guess) {
      case answer:
        message = "you got it right!"
        money += bet;
        break;
      case (answer + 1):
      case (answer - 1):
        message = "Close guess! the answer was: " + answer + "you don't lose any money.";
        break;
      default:
        money -= bet
        message = "bummer dude, the answer was : " + answer;
    }
  };
  $('#money').text("You have: $" + money);
  $('#info-area').text(message)
  if (money < 5){
  $('#has-money').attr('class', 'hidden');
  }

})


// });
// })()
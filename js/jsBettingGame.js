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

var keepPlaying = true
var money = 100

while (keepPlaying && money > 5) {

  var answer = Math.floor((Math.random() * 10) + 1);
  log("answer: " + answer);

  var bet = parseInt(prompt("Watcha wanna bet?(between $5 and $10)" + player1.nickname));

  if (bet < 5 || bet > 10 || isNaN(bet)) {
    alert("you big bozo, you gotta bet between 5 and 10 ")
    continue;
  }

  log("bet: " + bet)

  var guess = parseInt(prompt("Yo" + player1.firstname + " " + player1.nickname + " " + player1.lastname + " " + " Guess a number between 1 and 10"));
  log("guess: " + guess)

  // var game = {
  //   answer: Math.floor((Math.random() * 10) + 1),
  //   bet: parseInt(prompt("Watcha wanna bet?" + player1.nickname)),
  //   guess: parseInt(prompt("Yo" + player1.firstname + " " + player1.nickname + " " + player1.lastname + " " + " Guess a number between 1 and 10"))
   
  // };

  console.log("hey2");
  log(guess == answer)
  // log(bet)

  if (guess == answer) {
    log("you guessed: " + guess);
    log("answer was: " + answer);
    log( "you win: " + bet);
    money += bet;
  }else {
    money -= bet;
    if (money < 5) {
      alert("Thanks for playing, you don't have enough to continue")
      break;
    }
  };

  keepPlaying = confirm("You have $" + money + "left, would you care to continue?")
}


// });
// })()
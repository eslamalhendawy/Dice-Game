/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var startAud = document.querySelector(".start");
var failAud = document.querySelector(".fail");
var winAud = document.querySelector(".win");

$("img").css("display", "none");

$(".btn-new").click(function() {
  startAud.play();
  $("#name-0").text("Player 1");
  $("#name-1").text("Player 2");
  $(".winner").removeClass("winner");
  $(".active").removeClass("active");
  $(".player-0-panel").addClass("active");
  $(".player-current-score").text("0");
  $(".player-score").text("0");
  $("img").css("display", "none");
})

$(".btn-roll").click(function() {
  var activePlayer = $(".active").children(".player-name").attr("id").split("-")[1];;
  var ran = Math.floor(Math.random() * (6 - 1 + 1) + 1)
  var score = Number($(".active").children(".player-current-box").children(".player-current-score").text());
  if (ran != 1) {
    $("img").css("display", "inline");
    document.querySelector(".dice").src = "dice-" + ran + ".png";
    score += ran;
    $(".active").children(".player-current-box").children(".player-current-score").text(score);
  } else {
    failAud.play();
    score = 0;
    $("img").attr("src", "dice-1.png");
    $(".active").children(".player-current-box").children(".player-current-score").text(score);
    $(".player-0-panel").removeClass("active");
    $(".player-1-panel").removeClass("active");
    if(activePlayer==0){
      $(".player-1-panel").addClass("active");
    }else{
      $(".player-0-panel").addClass("active");
    }
  }
})

$(".btn-hold").click(function() {
  $("img").css("display", "none");
  var activePlayer = $(".active").children(".player-name").attr("id").split("-")[1];
  var fscore = Number($(".active").children(".player-score").text());
  var temp = Number($(".active").children(".player-current-box").children(".player-current-score").text());
  fscore += temp;
  temp = 0;
  $(".active").children(".player-current-box").children(".player-current-score").text(temp);
  $(".active").children(".player-score").text(fscore);
  $(".player-0-panel").removeClass("active");
  $(".player-1-panel").removeClass("active");
  if (Number($("#score-0").text()) >=100) {
    $("#score-0").parent().addClass("winner");
    $("#score-0").siblings(".player-name").text("Winner!!");
    winAud.play();
  }else if(Number($("#score-1").text()) >=100){
    $("#score-1").parent().addClass("winner");
    $("#score-1").siblings(".player-name").text("Winner!!");
    winAud.play();
  }
  if(activePlayer==0){
    $(".player-1-panel").addClass("active");
  }else{
    $(".player-0-panel").addClass("active");
  }

})

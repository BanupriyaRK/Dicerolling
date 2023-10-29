const dicebutton=document.getElementById('dice-button')
var player1 = "Player 1";
var player2 = "Player 2";
function editNames() {
    player1 = prompt("Enter Player1 name");
    player2 = prompt("Enter player2 name");


    document.querySelector("p.Player1")
                    .innerHTML = player1;
  document.querySelector("p.Player2")
                    .innerHTML = player2;
                    
}
dicebutton.addEventListener("click",()=>{
    document.getElementById('dice1').style.animation="rolling 0.6s 3";
    document.getElementById('dice2').style.animation="rolling 0.6s 3";
})


function rollTheDice() {
    
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        if (randomNumber1 === randomNumber2) {
           document.querySelectorAll("img").innerHTML =(randomNumber1);
            document.querySelector("h1").innerHTML = "Draw!";
            document.querySelector("h2.winner1").innerHTML
                = (player1 + "    ,Your score is : "   + randomNumber1 + "    You Won the Game !!!!! ");
        document.querySelector("h2.winner2").innerHTML
                = (player2 + "   ,Your score is : "   + randomNumber2  + "     You Won the Game !!!!! ");
                document.querySelector("#info")   .innerHTML="Referesh the page and play again";
        }
        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                = (player2 + " WINS!");
                document.querySelector("h2.winner1").innerHTML
                = (player1 + "    ,Your score is : "   +randomNumber1+ "  Sorry! Try Again");
        document.querySelector("h2.winner2").innerHTML
                = (player2 + "    ,Your score is : "   + randomNumber2 + "  You Won the Game !!!!! ");
                document.querySelector("#info")   .innerHTML="Referesh the page and play again";     
        }

        else  {
            document.querySelector("h1").innerHTML
                = (player1 + " WINS!");
                document.querySelector("h2.winner1").innerHTML
                = (player1 + "    ,Your score is : "   +   randomNumber1   + "   You Won the Game !!!!!");
        document.querySelector("h2.winner2").innerHTML
                = (player2 + "    ,Your score is : "   +   randomNumber2   + "    Sorry! Try Again");     
            document.querySelector("#info")   .innerHTML="Referesh the page and play again";

        }
    }, 2500);
    
}
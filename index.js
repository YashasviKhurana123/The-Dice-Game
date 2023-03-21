var player1 = "Player 1"
var player2 = "Player 2"

function nameChange() {
    player1 = prompt("Enter the name of 1st player");
    player2 = prompt("Enter the name of 2nd player");

    document.querySelectorAll("p")[0].innerHTML = player1;
    document.querySelectorAll("p")[1].innerHTML = player2;
}

function rollDice(){
    var ran1 = Math.floor(Math.random()*6)+1
    var ran2 = Math.floor(Math.random()*6)+1
    document.querySelectorAll("img")[0].setAttribute("src","images/ezgif.com-resize.gif");
    document.querySelectorAll("img")[1].setAttribute("src","images/ezgif.com-resize.gif");

    setTimeout(function(){
        document.querySelectorAll("img")[0].setAttribute("src","images/Dice"+ran1+".png");
        document.querySelectorAll("img")[1].setAttribute("src","images/Dice"+ran2+".png");
    },2000)

    setTimeout(function(){
        if(ran1===ran2){
            document.querySelector("h1").innerHTML = "Its a Draw";
        }
        
        else if(ran1>ran2){
            document.querySelector("h1").innerHTML = player1 + " Wins";
        }
        
        else{
            document.querySelector("h1").innerHTML = player2 + " Wins";
        }
    },2000)

}
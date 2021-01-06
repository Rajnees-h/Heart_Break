var startButton = document.querySelector('#startGame');
startButton.addEventListener("click",function(){
    
    var page = document.querySelector("#main");
   
   document.querySelector(".body").style.backgroundColor = "#27AE60";

    startGame();


});

function startGame(){
    startButton.style.display = "none";
    displayHeart();
}
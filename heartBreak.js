var startButton = document.querySelector('#startGame');
var visibleImg = "none";
var score = 0;
var visibleTime = 1000;


startButton.addEventListener("click",function(){
    
    var page = document.querySelector("#main");
   
   document.querySelector(".body").style.backgroundColor = "#27AE60";

    startGame();


});

function startGame(){
    startButton.style.display = "none";
    addEventListeners();
    displayHeart(undefined);
}



function addEventListeners(){
    var hearts = document.querySelectorAll("img");

for(i=0;i<hearts.length;i++){
    hearts[i].addEventListener("click",function(){
        this.src="heart_break.png";


        updateScore();

        visibleImg = this;
        displayHeart();
    });
}

}

function updateScore(){
    var scoreElement = document.querySelector('#score');

    score++;
    scoreElement.textContent = "Score : "+score;
   

}
function displayHeart(){
    

    if(visibleImg != "none" ){
       
        visibleImg.style.visibility = "hidden";
        visibleImg.src="heart.png";
    }

    var id = "#heart"+Math.floor(Math.random(0)*12)+"";

    var visibleHeart = document.querySelector(id);
    visibleHeart.style.visibility = "visible"
    

}

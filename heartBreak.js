var startButton = document.querySelector('#startGame');
var score = 0;
var visibleTime = 1000;
var totalLife = 5;


startButton.addEventListener("click",function(){
    
    var page = document.querySelector("#main");
   
   document.querySelector(".body").style.backgroundColor = "#27AE60";

    startGame();


});

function startGame(){
    startButton.style.display = "none";
    addEventListeners();
    displayHeart();
}



function addEventListeners(){
    var hearts = document.querySelectorAll("img");

for(i=0;i<hearts.length;i++){
    hearts[i].addEventListener("click",function(){
        this.src="heart_break.png";


        updateScore();

        this.style.visibility = "hidden";
        this.src="heart.png";

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


    var id = "#heart"+Math.floor(Math.random(0)*12)+"";

    var visibleHeart = document.querySelector(id);
    visibleHeart.style.visibility = "visible"

    setTimeout(function(){
        if(visibleHeart.style.visibility == "visible"){
            visibleHeart.style.visibility = "hidden";
            displayHeart();
            loseOneLife();
        }
    }
    ,--visibleTime);


}
function loseOneLife(){

    if(totalLife === 1){
        alert("GameOver");
        return;
    }
totalLife--;
var lifeLabel = document.querySelector("#lifes");

var code = "";

for(i=0;i<totalLife;i++){
    code += '<span class="glyphicon glyphicon-heart"></span>';
}

lifeLabel.innerHTML = code;

}

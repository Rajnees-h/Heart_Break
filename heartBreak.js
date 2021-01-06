var startButton = document.querySelector('#startGame');
var newGame = document.querySelector("#newGame");
var lifeLabel = document.querySelector("#lifes")
var score = 0;
var visibleTime = 2000;
var totalLife = 5;

var clicked = false;



startButton.addEventListener("click",function(){
   
    var page = document.querySelector("#main");

    startGame();


});

newGame.addEventListener("click",function(){
    location.reload();
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
        clicked = true;
        this.src="heart_break.png";
    


        updateScore();
       

        setTimeout(function(){   
            if(totalLife > 0){
                displayHeart(); 
            }   
                 
        },10);
        
        
        
        
    });
}

}

function updateScore(){
    var scoreElement = document.querySelector('#score');

    score++;
    scoreElement.textContent = "Score : "+score;
   

}
function displayHeart(){

    clicked = false;
    var allHearts = document.querySelectorAll("img");
    for(j=0;j<allHearts.length;j++){
        allHearts[j].style.visibility = "hidden";
        allHearts[j].src = "heart.png";
    }

    var id = "#heart"+Math.floor(Math.random(0)*12)+"";

    var visibleHeart = document.querySelector(id);
    visibleHeart.style.visibility = "visible";
    if(visibleTime > 1000){
        visibleTime -= 50;
    }
    else if(visibleTime > 600){
        visibleTime -= 4;
    }else if(visibleTime > 300){
        visibleTime -= 3;
    }else if(visibleTime > 100){
        visibleTime -= 2; 
    }else {
        visibleTime -= 1;
    }

    setTimeout(function(){
       
        var st = visibleHeart.src;
    
        if(!clicked && st.substring(st.length-9,st.length) == "heart.png"){
            visibleHeart.style.visibility = "hidden";
            if(loseOneLife()){
                displayHeart();
            }else{
                lifeLabel.innerHTML = "Game Over";
                newGame.style.display = "block";
            }
            
        }
    }
    ,visibleTime);


}
function loseOneLife(){


totalLife--;

var code = "";

for(i=0;i<totalLife;i++){
    code += '<span class="glyphicon glyphicon-heart"></span>';
}

lifeLabel.innerHTML = code;
if(totalLife === 0){

    return false;
}
return true;

}

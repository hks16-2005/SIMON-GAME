let gameSeq=[];
let userSeq=[];
let highScore=0;
let btns=["red","orange","green","purple"];

let h2= document.querySelector("h2");
let h3=document.querySelector("h3")
let started = false;
let level= 0;

document.addEventListener("keypress",function(){//1
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }    
});

function gameflash(btn){//3
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}


function levelUp(){//2
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);//3
}

function checkSeq(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 800);
        }

    }else{
        h2.innerHTML=`Game Over!! Your score was <b>${level-1}</b> <br> Press any Key to restart the game`;
        if(level-1 > highScore){
            highScore = level-1;
            h3.innerText=`Your Highest Score is ${highScore}`;
        }
        reset();
        flashEff(); 
        
    }
}

function btnPress(){
    
    let btn= this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkSeq(userSeq.length-1);
    
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}
function flashEff(){
    let body= document.querySelector("body");
    body.classList.add("bodyflash");
    setTimeout(function(){
        body.classList.remove("bodyflash");
    },150);
};
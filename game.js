const choices = document.querySelectorAll(".img");
let  msg= document.querySelector("#msg");
const compMsg = document.querySelector(".comp-msg");
const userMsg = document.querySelector(".user-msg");
const userSc= document.querySelector(".user-score");
const compSc= document.querySelector(".comp-score");
const newGameBtn=document.querySelector("#new-game");


let userScore=0;
let compScore=0;

const drawGame=()=>{
    console.log("Game was a draw");
    msg.innerText="Game was a draw. Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor= "green";
       userScore++;
       userSc.innerText=userScore;
      
 }
else{
    msg.innerText=`Your lose!.  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor= "red";
    compScore++;
    compSc.innerText=compScore;
    }
};


const genCompChoice=()=>{
    const arr=["rock", "paper", "scissors"];
   const randomIdx= Math.floor(Math.random()*3);
   return(arr[randomIdx]);

}

playGame=(userChoice)=>{
    console.log("user choice =" , userChoice);
     let compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
        userWin= compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
        userWin= compChoice==="scissors"? false: true;
        }
        else{
            userWin= compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((val)=>{
    console.log(val);
    let userChoice=val.getAttribute("id");
    val.addEventListener("click",()=>{
        playGame(userChoice);
    })
})

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userSc.innerText = userScore;
    compSc.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    userMsg.innerText = "User Turn";
    compMsg.innerText = "Computer Turn";
}


newGameBtn.addEventListener("click", resetGame);

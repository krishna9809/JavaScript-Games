let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=> {
     
    let options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const playgame = (choiceId)=> {
        console.log("User Choice " , choiceId)
        const compChoice = genCompChoice();
        console.log("Computer Choice " , compChoice)
        // genrate computer Choice

        if(choiceId === compChoice){
            drawGame();
        }
        else{
            let userWin = true;

            if(choiceId === "rock"){
               userWin = compChoice === "paper" ? false : true;
            }
            else if(choiceId === "paper"){
               userWin = compChoice === "scissors" ? false : true;
            } 
            else{
                userWin = compChoice === "rock" ? false : true;
            }

            showWinner(userWin, choiceId, compChoice)
        }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const choiceId = choice.getAttribute("id")
        playgame(choiceId);
    });
});


const drawGame = () => {
    msg.innerText = "Match DRAW! Try Again"
}

const showWinner = (userWin, choiceId, compChoice)=> {
   if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${choiceId} Beats ${compChoice}`  
    msg.style.backgroundColor = "yellow"; 
    msg.style.color = "black"; 


   }
   else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} Beats Your ${choiceId}`  
    msg.style.backgroundColor = "red"; 
   }
}
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")

let turnO = true; //for Player X and Player 0
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{

        if(turnO){
        box.innerText = "O";
        turnO = false;
        count++;
       }
       else{
        box.innerText = "X";
        turnO = true;
        count++;
       }
       box.disabled = true;

       checkWinner();

});
});

const checkWinner = ()=> {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    

    if(pos1val != "" && pos2val != "" && pos3val != ""){
     
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        }
        else if(count == 9){
            drawMatch();
        }

    }
    }
};

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
};

const showWinner = (winner)=> {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const drawMatch = ()=> {
    msg.innerText = "Match is DRAW try Again";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

resetBtn.addEventListener("click" , ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
    })
})

newGameBtn.addEventListener("click" , ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
    })
})


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


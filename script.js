// Accessing the elements
let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// starts with x turn
let turnX = true;

// all win patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// adding event to each box, when they are clicked innertext is added to it and the turns will be alternate.
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// iterating winPatterns to check if any one of two has won
const checkWinner = () => {
    for(let pattern of winPatterns) {
        console.log(pattern);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxesAfterWin();
}

const disableBoxesAfterWin = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

resetButton.addEventListener("click",resetGame);
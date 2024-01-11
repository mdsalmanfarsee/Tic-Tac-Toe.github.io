let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let player1 = prompt("Enter first player name: ");
let player2 = prompt("Enter second player name: ");
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        }
        else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        count += 1;
        winner();
        if (count == 9) {
            draw();
        }
    })
})
draw = () => {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    turnO = true;
    msgcontainer.classList.add("hide");
    count = 0;
}
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (player) => {
    msg.innerText = `Congratulation, Winner is ${player}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const winner = () => {
    for (let points of win) {
        let pos1 = boxes[points[0]].innerText;
        let pos2 = boxes[points[1]].innerText;
        let pos3 = boxes[points[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                let player = player1;
                if (pos1 == "O") {
                    console.log(player2, " is the winner");
                    player = player2;
                }
                else {
                    console.log(player1, " is the winner");
                }
                showwinner(player);

            }
        }
    }
}
reset.addEventListener("click", enableboxes);
newgame.addEventListener("click", () => {
    player1 = prompt("Enter first player name: ");
    player2 = prompt("Enter second player name: ");
    enableboxes();
});
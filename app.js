/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const displayedNums = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let calculate = "";

/*------------------------ Cached Element References ------------------------*/
const selectedNums = document.createElement("p");

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        selectedNums.innerText = event.target.innerText;
        displayedNums.append(selectedNums);
        const selection = event.target.innerText;

        if (selection === "=") {
            calculate = calcResult(calculate);
            displayedNums.innerText = calculate;
        } else if(selection === "C") {
            calculate = "";
            displayedNums.innerText = null;
        } else {
            calculate += selection;
        }
    });
});

/*-------------------------------- Functions --------------------------------*/
const calcResult = (input) => {
    let result = eval(input);
    return result;
}
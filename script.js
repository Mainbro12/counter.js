
let count = 0;

function minus ()  {
    count = count-1;
    if (count < 0) {
    count = 0;
    }
    countdiv.textContent= count;
}
function plus () {
    count = count+1;
    if (count > 100)
        count = 100;
countdiv.textContent= count;
}
function plusTen () {
    count = count+10;
    if (count > 200)
        count = 100;
countdiv.textContent= count;
}
function reset () {
    count = 0;
    countdiv.textContent= count;

}

const addButton = document.getElementById("add-button")
const countdiv = document.getElementById("count")
const minusButton = document.getElementById("minus-button")
const resetButton = document.getElementById("reset-button")

countdiv.textContent= count;

addButton.addEventListener('dblclick', plusTen)
addButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)








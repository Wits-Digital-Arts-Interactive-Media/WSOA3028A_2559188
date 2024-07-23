//get reference to elements
//click event listeners
//process algorithms
//output

const value = document.getElementById("value");
const increaseBtn = document.querySelector("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.querySelectorById(".reset");

let counter = 0;

increaseBtn.addEventListener("click", function () {
    counter++;
    value.textContent = counter;
}

decreaseBtn.addEventListener("click", function () {
    counter--;
    value.textContent = counter;
}

resetBtn.addEventListener("click", function () {
    counter = 0;
    value.textContent = counter;
}


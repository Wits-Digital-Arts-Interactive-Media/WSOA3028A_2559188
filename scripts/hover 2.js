const myHeading = document.getElementById("myHeading");


myHeading.addEventListener("mouseover", event => {
    myHeading.innerText = myHeading.innerText.toUpperCase()
});


myHeading.addEventListener("mouseout", event => {
    const text = myHeading.innerText.toLowerCase();
    myHeading.innerText = text.charAt(0).toUpperCase() + text.slice(1);
});
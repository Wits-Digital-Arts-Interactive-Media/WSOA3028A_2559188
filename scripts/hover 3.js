const thatHeading = document.getElementById("thatHeading");


thatHeading.addEventListener("mouseover", event => {
    thatHeading.innerText = thatHeading.innerText.toUpperCase()
});


thatHeading.addEventListener("mouseout", event => {
    const text = thatHeading.innerText.toLowerCase();
    thatHeading.innerText = text.charAt(0).toUpperCase() + text.slice(1);
});
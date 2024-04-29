const myQuote = document.getElementById("myQuote");

myQuote.addEventListener("mouseover", event => {
    myQuote.innerText =myQuote.innerText.toUpperCase()
});


myQuote.addEventListener("mouseout", event => {
    const text = myQuote.innerText.toLowerCase();
    myQuote.innerText = text.charAt(0).toUpperCase() + text.slice(1);
});


const emojis = [
    "🐶","🐱","🐭","🐰","🦊","🐼","🦁","🐮","🐸","🐷",
    "🐶","🐱","🐭","🐰","🦊","🐼","🦁","🐮","🐸","🐷"
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

shuffleEmojis.forEach((emoji) => {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = emoji;
    box.onclick = handleClickCard;
    document.querySelector(".game").appendChild(box);
})

function handleClickCard() {
    if( openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if( openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    console.log(openCards[0]);
    if(openCards[0].innerHTML == openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        openCards[0].onclick = null;
        openCards[1].onclick = null;

    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");

    }
    openCards = [];
    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabeńs Você venceu!");
    }
}


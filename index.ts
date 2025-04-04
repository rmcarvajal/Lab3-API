import card from "./card.js"

customElements.define('card-comp', card)

type gun = {
    name:string
    description:string
}

fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json')
.then((response) => response.json())
.then((data) =>{
    const cardInfo = document.querySelector(".container")
})
import card from "./components/card.js"





const addContent = document.getElementById("container")

customElements.define('card-comp', card)

fetch("https://bymykel.com/CSGO-API/api/en/skins.json")
    .then((response)=> response.json())
    .then((data) =>{

        const cardContainer = document.querySelector(".container")
        
        const content = cardContainer.querySelectorAll("card-comp")

        content.forEach((card,index) => {
            card.data = data[index + content.length]
        })
    }
)
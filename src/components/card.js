class card extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = 
                    `
                <div class="card">
            <div class="image"></div>
            <h1>name</h1>
            <h2>description</h2>
        </div>
        
        
<style>
    .image{
    background-image: url(https://cdn-images.dzcdn.net/images/cover/5428172df3ee52b457ccfbfdded21fdb/1900x1900-000000-80-0-0.jpg);
    height: 200px;
    width: 250px;
    background-size: cover;
    background-color: aqua;
}
    .card{
    display:flex;
    flex-direction: column;
    width: 500px;
}
</style>
        `;
    }
    set data(card) {
        this.shadowRoot.querySelector(".image").style.backgroundImage = `url(${card.image})`
        this.shadowRoot.querySelector("h1").textContent = card.name
        this.shadowRoot.querySelector("h2").textContent = card.description
    }
}



export default card
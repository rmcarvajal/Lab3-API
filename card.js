class card extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=
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
    width: 200px;
    background-size: cover;
    background-color: aqua;
}
</style>
        `
    }
}

export default card
const items = [
    {
        id: 0,
        nome: 'linha 1',
        img: './img/img-teste.png',
    },
    {
        id: 1,
        nome: 'linha 2',
        img: './img/img-teste.png',
    },
    {
        id: 2,
        nome: 'linha 3',
        img: './img/img-teste.png',
    },
]

inicializarLoja = () =>{
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `

        <div class = "produto-single">
            <img src ="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key = "`+val.id+`" href=""> Conhecer Linha <a/>
        </div>

        `;
    })
}

inicializarLoja();
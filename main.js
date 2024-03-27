let listaProdutos = [
    {
        id:1,
        nome: "arroz",
        categoria: "alimento",
        preco: 5.80
    },

    {
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.25
    }
];

let idGerador = 2;


function listar() {
    return listaProdutos;
}

function inserir(produto){
    produto.id = ++idGerador;
    listaProdutos.push(produto);
};

function main(){
    console.log(listar());
}

inserir({nome: "feijao",
         categoria: "alimento",
         preco: 8.00
        });

inserir({nome: "suco de laranja",
        categoria: "bebida",
        preco: 9.30
       });

console.log(listar())

main();
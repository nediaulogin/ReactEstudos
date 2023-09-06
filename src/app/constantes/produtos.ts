import Produto from "../model/Produto/page";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 39.9,
        descricao: "Uma camiseta bem bacana",
        imagem: 'https://source.unsplash.com/featured/250x150?tshirt'
    },
    {
        id: 2,
        nome: "Tênis",
        preco: 129.9,
        descricao: "Um tênis bem bacana",
        imagem: 'https://source.unsplash.com/featured/250x150?sneaker'
    },
    {
        id: 3,
        nome: "Meias",
        preco: 19.9,
        descricao: "Um par de meias",
        imagem: 'https://source.unsplash.com/featured/250x150?socks'
    }
]

export default produtos;
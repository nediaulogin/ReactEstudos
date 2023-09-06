import ItemCarrinho from "@/app/model/Produto/ItemCarrinho";

export default function CarrinhoItem(props: ItemCarrinho) {
    function exibirPreco(valor: number) {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }
    return (
        <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-full">
            <span>
                {props.produto.nome}
            </span>
            <span className="flex items-center justify-center p-2 bg-blue-700 rounded-full w-7 h-7">
                {props.quantidade}
            </span>
            <span>
                {exibirPreco(props.produto.preco * props.quantidade)}
            </span>
        </div>)
}
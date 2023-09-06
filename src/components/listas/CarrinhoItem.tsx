import ItemCarrinho from "@/app/model/Produto/ItemCarrinho";
import Moeda from "@/utils/Moeda";

export default function CarrinhoItem(props: ItemCarrinho) {

    return (
        <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-full">
            <span>
                {props.produto.nome}
            </span>
            <span className="flex items-center justify-center p-2 bg-blue-700 rounded-full w-7 h-7">
                {props.quantidade}
            </span>
            <span>
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </span>
        </div>)
}
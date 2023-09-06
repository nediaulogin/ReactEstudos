import ItemCarrinho from "@/app/model/Produto/ItemCarrinho"
import Moeda from "@/utils/Moeda"
import CarrinhoItem from "./CarrinhoItem"
import CarrinhoVazio from "./CarrinhoVazio"

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
    const total = props.itens.reduce((soma, item) => soma + item.quantidade * item.produto.preco, 0)
    return (
        <div className="flex flex-col w-4/5 mt-3 overflow-hidden border border-white rounded-md">
            <div className="flex justify-between p-3 text-3xl bg-zinc-800">
                <span>Carrinho</span>
                <span>{Moeda.formatar(total)}</span>

            </div>
            <div className="flex gap-5 p-5">
                {props.itens.length === 0 ? (
                    <CarrinhoVazio />
                ) : (
                    props.itens.map((item, i) => {
                        return <CarrinhoItem key={item.produto.id} {...item} />
                    })
                )}
            </div>
        </div>
    )
}
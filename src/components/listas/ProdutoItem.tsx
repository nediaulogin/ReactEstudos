import Produto from "@/app/model/Produto/page"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (

        <div className="flex flex-col p-2 border rounded-md border-zinc-400">
            <Image
                src={produto.imagem}
                width={250}
                height={150}
                alt="imagem do produto"
                className="rounded-md"
            />
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="font-bold text-green-500">R${produto.preco}</div>
                </div>
                <div className="">
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className="flex justify-center w-full gap-1 botao">
                        <IconShoppingCart /> comprar
                    </button>
                </div>
            </div>
        </div>
    )
}
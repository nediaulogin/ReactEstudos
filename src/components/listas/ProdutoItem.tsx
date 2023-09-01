import Produto from "@/app/model/Produto/page"
import Image from "next/image"

interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    return (
        <div className="">
            <Image src={props.produto.imagem} width={300} height={300} alt="imagem do produto" />
        </div>
    )
}
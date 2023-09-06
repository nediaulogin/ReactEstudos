import { IconCircleX } from "@tabler/icons-react";

export default function CarrinhoVazio(props) {
    return (
        <div className="flex justify-center gap-3 text-zinc500">
            <IconCircleX />
            <span>Nenhum item no carrinho</span>
        </div>
    )
}
'use client'

import produtos from "@/app/constantes/produtos"
import ItemCarrinho from "@/app/model/Produto/ItemCarrinho"
import Produto from "@/app/model/Produto/page"
import Carrinho from "@/components/listas/Carrinho"
import ListaProdutos from "@/components/listas/ListasProdutos"
import { useState } from "react"

export default function PaginaProdutos() {

    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicicionarProduto(produto: Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? { quantidade: 0, produto: produto }
        const novoItem = {
            ...itemAtual,
            quantidade: itemAtual.quantidade + 1
        }
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicicionarProduto} />
        </div>
    )
}
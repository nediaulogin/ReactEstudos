'use cliente'

import produtos from "@/app/constantes/produtos"
import ListaProdutos from "@/components/listas/ListasProdutos"

export default function PaginaProdutos() {
    const produto = produtos[0]

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ListaProdutos produtos={produtos} />
        </div>
    )
}
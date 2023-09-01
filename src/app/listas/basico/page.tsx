import TabelaSerieA from "@/components/listas/TabelaSerieA"
'use cliente'

import { IconBallFootball } from "@tabler/icons-react"
export default function PaginaListaBasica() {
    const times = [
        'Fluminense',
        'Botafogo',
        'Vasco',
        'Flamengo',
        'São Paulo',
        'Palmeiras',
        'Corinthians',
        'Santos',
        'Internacional',
        'Grêmio'
    ]
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="flex items-center text-4xl font-black">
                <IconBallFootball size={50} stroke={1} className="text-green-600" />
                Tabela Serie A
            </h1>
            <TabelaSerieA times={times} />
        </div>
    )
}
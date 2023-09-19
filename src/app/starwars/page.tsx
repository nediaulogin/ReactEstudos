'use client'

import BackGround from "@/components/starwars/BackGround"
import Personagens from "@/components/starwars/Personagens"
import useStarWars from "@/data/hooks/useStarWars"

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens } = useStarWars()

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-5">
            <button onClick={obterPersonagens} className="p-2 bg-blue-500 border">Obter</button>
            <BackGround />
            {processando ? (
                <div> Processando...</div>
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} />
            )
                : (
                    <div>Não há personagens</div>
                )}


        </div>
    )
}
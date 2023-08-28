'use client'
import Image from "next/image"
import { useState } from "react"
export default function ImagemAleatoria() {
    //    let pesquisa: string = ''
    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)

    const url = 'https://source.unsplash.com/featured/'


    function renderizarBotao(valor: string) {
        return (
            <button className="border-2 border-black rounded-md p-2 bg-yellow-400"
                onClick={() => {
                    setPesquisa(valor)
                }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 rounded-md border-2 border-red-700 items-center p-7">
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} height={200} width={200} alt="imagem" />
            <div className="flex gap-3  justify-between">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div>
                <input
                    type="number"
                    value={tamanho}
                    className="bg-zinc-600 p-2 rounded-md outline-none"
                    onChange={e => {
                        setTamanho(+e.target.value)
                    }} />
            </div>
        </div>
    )
}
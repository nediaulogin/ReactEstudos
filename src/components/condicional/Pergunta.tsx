import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { useState } from "react"
import If from "./if"

interface PerguntaProps {
    texto: string
    resposta: string
}
export default function Pergunta(props: PerguntaProps) {

    const [aberta, setAberta] = useState<boolean>(false)

    return (
        <div className="overflow-hidden border border-white rounded-md">
            <div className="flex justify-between p-5 cursor-pointer bg-zinc-700"
                onClick={() => setAberta(!aberta)}>
                <span>{props.texto}</span>
                {/* <IfElse teste={aberta}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
                {aberta ? <IconChevronUp /> : <IconChevronDown />}
            </div>
            <If teste={aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}
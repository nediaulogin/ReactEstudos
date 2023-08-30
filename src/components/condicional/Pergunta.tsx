import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import If from "./if"

interface PerguntaProps {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}
export default function Pergunta(props: PerguntaProps) {

    // const [aberta, setAberta] = useState<boolean>(false)

    return (
        <div className="overflow-hidden border border-white rounded-md">
            <div className="flex justify-between p-5 cursor-pointer bg-zinc-700"
                onClick={() => props.alternarVisibilidade(props.indice)}>
                <span>{props.texto}</span>
                {/* <IfElse teste={props.aberta}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
                {props.aberta ? <IconChevronUp /> : <IconChevronDown />}
            </div>
            <If teste={props.aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}
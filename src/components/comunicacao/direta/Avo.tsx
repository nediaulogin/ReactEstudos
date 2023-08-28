import Pai from "./Pai";

interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Avo(props: AvoProps) {
    return (
        <div className="flex flex-col gap-5 p-5 text-white bg-purple-500 border-2 border-white rounded-md">
            <div className="flex justify-center gap-2 text-2xl">
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-3">
                <Pai nome={props.nome} sobrenome={props.sobrenome} />
                <Pai nome={props.nome} sobrenome={props.sobrenome} />
                <Pai nome={props.nome} sobrenome={props.sobrenome} />

            </div>
        </div>
    )
}
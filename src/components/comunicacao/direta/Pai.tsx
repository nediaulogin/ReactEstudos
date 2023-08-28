import Filho from "./Filho";
interface PaiProps {
    nome: string
    sobrenome: string
}
export default function Pai(props: PaiProps) {
    return (
        <div className="flex flex-col gap-3 px-4 text-white bg-blue-500 border-2 border-white rounded-md">
            <div className="flex justify-center gap-2 text-xl">
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex justify-between gap-2 m-2">
                <Filho />
                <Filho />
            </div>

        </div>
    )
}
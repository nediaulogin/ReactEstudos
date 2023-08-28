interface Dysplayprops {
    valor: number
}

export default function Dysplay(props: Dysplayprops) {
    return (
        <div className="flex items-center justify-center flex-1 p-5 text-5xl font-black rounded-md bg-zinc-500">
            {props.valor}
        </div>
    )
}
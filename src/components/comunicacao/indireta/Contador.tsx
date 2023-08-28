import { useState } from "react";
import Botoes from "./Botoes";
import Dysplay from "./Display";

export default function Contador() {
    const [num, setNum] = useState<number>(0)

    function incrementar() {
        setNum(num + 1)
    }
    function decrementar() {
        setNum(num - 1)
    }
    return (

        < div className="flex flex-col border rounded-lg p-7 border-zinc-400 w-72 h-72 " >
            <Dysplay valor={num} />
            <Botoes inc={incrementar} dec={decrementar} />
        </div >
    )
}
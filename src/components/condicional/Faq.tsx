import Pergunta from "./Pergunta";

export default function Faq() {
    return (
        <div className="flex flex-col gap-2 w-[90%]  md:w-3/4">
            <Pergunta texto="Quem descobriu o Brasil" resposta="Lorem ipsum sit..." />
            <Pergunta texto="O que é Typescript" resposta="Lorem ipsum sit..." />
            <Pergunta texto="React é um frame work" resposta="Lorem ipsum sit..." />
        </div>
    )
}

interface PersonagemProps {
    personagens: any[]
}
export default function Personagens(props: PersonagemProps) {

    function renderizarPersonagens() {
        return (
            <ul>
                {props.personagens.map((p: any) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>{renderizarPersonagens()}</div>
    )
}
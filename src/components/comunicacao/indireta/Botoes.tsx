interface BotoesPros {
	inc: () => void
	dec: () => void
}

export default function Botoes(props: BotoesPros) {
	return (
		<div className="flex justify-between gap-2 pt-2 text-white">
			<button className="flex-1 botao" onClick={props.inc}>
				inc
			</button>
			<button className="flex-1 botao" onClick={props.dec}>
				Dec
			</button>
		</div>
	)
}
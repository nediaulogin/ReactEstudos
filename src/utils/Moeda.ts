export default class Moeda {
    static formatar(valor: number) {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }
}
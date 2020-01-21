export class Airplane {

    id: number = 0;
    codigo: string = "";
    modelo: string = "";
    quantidadePassageiros: number;
    dataCriacao: any;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
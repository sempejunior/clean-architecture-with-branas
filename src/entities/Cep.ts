export default class Cep{

    cep : string;

    constructor (cep: string){
        this.cep = cep;
    }

    distanceBeetwenAnotherCep(anotherCep: Cep):number{
        return 1000;
    }
}
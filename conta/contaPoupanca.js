import { Conta } from "./Conta.js";

export class contaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

}
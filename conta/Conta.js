//classe abstrata
export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Não é permitido instanciar um objeto tipo conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

//acessores    
    set cliente(novoValor){
        if(novoValor instanceof cliente){  // instanceof : novo valor é uma nova instancia de cliente.
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this.saldo;
    }

//operações

    sacar(valor){
        throw new Error("Metodo Abstrato");
    }

    _sacar(valor, taxa){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0){
           return; 
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
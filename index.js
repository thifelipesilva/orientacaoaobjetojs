import {cliente} from "./funcionarios/Cliente.js";
import {contaCorrente} from "./conta/ContaCorrente.js";
import {contaPoupanca} from "./conta/contaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";
import {Gerente} from "./funcionarios/Gerente.js";
import {Diretor} from "./funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";


// clientes
const cliente1 = new cliente('Thiago', '123456789-10');
const cliente2 = new cliente('Aline', '987654321-10');
const cliente3 = new cliente("Lais", '12378945612', "147852");

// conta corrente
const contaCorrenteDoThiago = new contaCorrente(cliente1, 1010);
const contaCorrenteDaAline = new contaCorrente(cliente2, 1010);
// conta poupança
const poupancaThiago = new contaPoupanca(500, "Thiago", 1010);
const contaS = new ContaSalario(cliente2);

//funcionarios
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Caetano", 8000, 12345678901);

diretor.cadastrarSenha("1234");
gerente.cadastrarSenha("123456");

//Autenticação
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const cliente3EstaLogado = SistemaAutenticacao.login(cliente3, "147852" );

console.log(cliente3EstaLogado);
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);








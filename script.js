//let numero = prompt ('Digite seu número')

function verificarPar() {
    console.log(numero);
    if (numero % 2 === 0) {
        console.log(numero + ' é um número par');
    } else {
        console.log(numero + ' é um número ímpar');
    }
}

//verificarPar();


//let n = parseFloat(prompt ('Digite seu número'));
//let n2 = parseFloat(prompt ('Digite seu número'));
function calcular(n, n2) {
    console.log(n + n2);
    console.log(n - n2);
    console.log(n * n2);
    if (n2 === 0) {
        console.log('essa conta é impossível');
    } else {
        console.log(n / n2);
    }
}

//calcular (n, n2)
//let n = 10
//do{
//console.log(n--);
//}
//while (n > 0);

//let palavra = prompt('digite uma palavra ');
function inverterTexto() {
    console.log(palavra.split('').reverse().join(''));
}
//inverterTexto(palavra);

//let palavra = prompt('digite uma palavra ');
function contarCaracteres(){
console.log (palavra.length);
}
//contarCaracteres(palavra);

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInformacoes() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`);
    }
}
const meuCarro = new Carro('BMW', 'M8 Couple', '2023');
//meuCarro.exibirInformacoes();

let nome = prompt('digite um nome ');
const mensagem = 'Olá';
function mensagemPersonalizada(mensagem, nome){
    console.log (mensagem + nome);
}
mensagemPersonalizada(mensagem, nome);
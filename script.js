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

//let nome = prompt('digite um nome ');
const mensagem = 'Olá';
function mensagemPersonalizada(mensagem, nome){
    console.log (mensagem + nome);
}
//mensagemPersonalizada(mensagem, nome);

//let n = parseFloat(prompt ('Digite seu número'));
//let n2 = parseFloat(prompt ('Digite seu número'));
//let n3 = parseFloat(prompt ('Digite seu número'));

function media(n,n2,n3) {
    console.log ((n+n2+n3)/3 );
}
//media(n,n2,n3);


//for (n = 1; n < 21; n++){
    //console.log (n)
    //if (n % 3 === 0) {
       // console.log('esse número é múltiplo de 3');
   // } else {
        //console.log('esse número não é múltiplo de 3');
   // }
//}

//let palavra = prompt('digite uma palavra ');
function verificarPalindromo(){
    if (palavra === palavra.split('').reverse().join('')) {
        console.log('essa palavra é um palíndromo');
    } else {
        console.log('essa palavra não é um palíndromo');
    } 
}
//verificarPalindromo();

//let n = parseFloat(prompt('digite um número '));
function verificarSinal(){
    if (n > 0) {
        console.log('esse número é positivo ');
    } else if (n === 0 ) {
        console.log('esse número é zero '); 
    } else {
        console.log('esse número é negativo ');  
    }
}
//verificarSinal();

let TCelsius = parseFloat(prompt('digite uma temperatura em graus Celsius '));
function converterTemperatura(){
    console.log ((TCelsius * 1.8) + 32);
    console.log ('é a temperatura em Fahrenheit');
}
converterTemperatura();
//let numero = prompt ('Digite seu número')

function verificarPar (){
        console.log(numero);
        if (numero % 2 === 0){
            console.log (numero + ' é um número par');
        }else{
            console.log (numero + ' é um número ímpar');
        }
    }

    //verificarPar();


//let n = parseFloat(prompt ('Digite seu número'));
//let n2 = parseFloat(prompt ('Digite seu número'));
function calcular(n, n2){
 console.log(n + n2 );
 console.log (n - n2 );
 console.log (n * n2 );
 if (n2 === 0 ){
    console.log ('essa conta é impossível');
}else{
    console.log (n / n2 );
} 
}

 //calcular (n, n2)
let n = 10
do{
    console.log ( n --);
}
while (n > 0);
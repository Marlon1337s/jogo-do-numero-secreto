/*Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo*/

function helloWorld() {
    console.log("Olá, mundo!");
}

function dobro() {
    let numero = prompt("Digite um número:");

    if (isNaN(numero) || numero.trim() === "") {
        alert("Digite um número válido!");
    } else {
        alert(`O dobro do número digitado é ` + Number(numero) * 2);
    }
}

function media() {
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
    let numero3 = prompt("Digite o terceiro número:");

    if (isNaN(numero1) || numero1.trim() === "" || isNaN(numero2) || numero2.trim() === "" || isNaN(numero3) || numero3.trim() === "") {
        alert("Digite números válidos!");
    } else {
        let media = (Number(numero1) + Number(numero2) + Number(numero3)) / 3;
        alert(`A média dos números digitados é ${media}`);
    }
}

function comparador (a, b) {
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");

    if (numero1 > numero2) {
        alert(`${numero1} é maior que ${numero2}`);
    } else if (numero1 < numero2) {
        alert(`${numero2} é maior que ${numero1}`);
    } else {
        alert(`${numero1} e ${numero2} são iguais`);
    }
}

/*function multiplicacao() {
    let numero = prompt("Digite um número:");
    multiplicacao = numero * numero;
    alert(`O resultado da multiplicação do número digitado por ele mesmo é ${multiplicacao}`);
}
multiplicacao();*/

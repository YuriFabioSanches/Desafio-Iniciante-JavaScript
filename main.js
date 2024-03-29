/* 
    Crie um script que exiba a 
    mensagem "Hello World!" em 
    um alerta no navegador. 
*/

alert('Hello World!')

/* 
    Crie um script que declare duas 
    variáveis e exiba o resultado da 
    soma entre elas. 
*/

let numberOne = 5
let numberTwo = 20

let result = numberOne + numberTwo

alert(`${numberOne} + ${numberTwo} = ${result}`)

/* 
    Crie um script que declare uma variável e verifique se o seu valor é um número. 
    Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem 
    "Não é um número". 
*/

let isNumber = 3

if(typeof isNumber == 'number') {
    alert('É um número')
}else {
    alert('Não é um número')
}

/* 
    Crie um script que declare uma variável e verifique 
    se o seu valor é uma string. Se for, exiba a mensagem 
    "É uma string", caso contrário, exiba a mensagem 
    "Não é uma string".
*/

let isString = 'test'

if(typeof isString == 'string'){
    alert('É uma string')
}else {
    alert('Não é uma string')
}

/* 
    Crie um script que declare uma variável e verifique 
    se o seu valor é um booleano. Se for, exiba a 
    mensagem "É um booleano", caso contrário, exiba 
    a mensagem "Não é um booleano".

*/

let isBoolean = true

if(typeof isBoolean == 'boolean'){
    alert('É um booleano')
}else {
    alert('Não é um booleano')
}

/* 
    Crie um script que declare duas variáveis
    e exiba o resultado da subtração entre elas.
*/

result = numberOne - numberTwo

alert(`${numberOne} - ${numberTwo} = ${result}`)

/* 
    Crie um script que declare duas 
    variáveis e exiba o resultado 
    da multiplicação entre elas.
*/

result = numberOne * numberTwo

alert(`${numberOne} * ${numberTwo} = ${result}`)

/* 
    Crie um script que declare duas 
    variáveis e exiba o resultado 
    da divisão entre elas.
*/

result = numberOne / numberTwo

alert(`${numberOne} / ${numberTwo} = ${result}`)

/* 
    Crie um script que declare uma variável e verifique 
    se o seu valor é um número par. Se for, exiba a 
    mensagem "É um número par", caso contrário, 
    exiba a mensagem "Não é um número par".
*/

let isEven = 8

if(isEven % 2 == 0) {
    alert('É um número par')
}else {
    alert('Não é um número par')
}

/* 
    Crie um script que declare uma variável 
    e verifique se o seu valor é um número 
    ímpar. Se for, exiba a mensagem 
    "É um número ímpar", caso contrário, 
    exiba a mensagem "Não é um número ímpar".
*/

let isOdd = 15

if(isOdd % 2 != 0) {
    alert('É um número ímpar')
}else {
    alert('Não é um número ímpar')
}
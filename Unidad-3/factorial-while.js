// Este archivo debe calcular el factorial de 10 utilizando un bucle while

let num = 10;
let factorial = num;

while(num != 1){
    factorial = factorial * (num - 1);
    num -= 1;
}

console.log(`El factorial de ${num} es ${factorial}`);
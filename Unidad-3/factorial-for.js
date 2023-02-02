//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let num = 10;
let factorial = num;

for (let i = 0; i < num; i++) {
    factorial = factorial * (num -i);
}
console.log(`El factorial de ${num} es ${factorial}`);
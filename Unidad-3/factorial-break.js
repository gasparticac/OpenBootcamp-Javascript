// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let factorial = num;

while (true){
    if (num == 1) {
        break;
    } 
    factorial = factorial * (num - 1);
    num -= 1;
}
console.log(`El factorial de ${num} es ${factorial}`);
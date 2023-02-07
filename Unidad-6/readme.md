## Métodos/funciones vistas en esta sección

- New Array()
- array[x] --> accede al valor en la posición x del array.
- Push y Unshift / Pop y Shift: mutan el valor del array, en React cambiará el estado del array al mutarlo
- array.push(var) --> añade "var" al final del array 
- array.unshift(var) --> añade "var" al principio del array
- array.pop() --> borra el último elemento del array
- array.shift() --> borra el primer elemento del array
- array.splice(x,y) --> borra "y" numeros a partir del indice x
- array.splice(x,0,z) --> introduce z (o más, especificados) valores a partir del índice x
- array.splice(x,1,z) --> modifica el valor en el índice x por el valor z
- array1.concat(array2) --> concatena array1 y array2
- SPREAD OPERATOR = [...array]
  - se puede unir/concat arrays con el SO -> array3 = [...array1, array2]
- array.slice(x,y) --> extrae valores del array inicial, comienza desde el índice x y toma hasta el índice y
- array.forEach(callback => {})
- array.find(callback => {}) 
- array.map(callback,{index} =>{}) ---> transforma el array, por lo general se asigna a un objeto/variable nueva
- array.filter(callback => {})
- array.sort(a,b) =>debe retornar un int, positivo es de mayor a menor y negativo al reves
- array.every(callback =>{}) si returna true son iguales, false son distintos... array.every(valor => valor>0) pregunta si todos los valores del array son positivos.TRUE
- array.some(callback =>{}) --> pregunta si existe algo dentro del array
- Array.from(str) --> forma un array a partir de la variable "str"
- array.keys() --> toma las llaves del array inicial

## Ejercicio
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
  
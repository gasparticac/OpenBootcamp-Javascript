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
- array.slice(x,y) --> extrae valores del array inicial, comienza desde el índice x y toma hasta el índice y.
- array.forEach(callback => {})
- array.find(callback => {}) 
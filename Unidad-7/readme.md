## Funciones vistas
- new Set(x) --> crea un nuevo set a partir de x, los set no repiten valores
- set.add(x)
- set.delete(x)
- set.clear()
- set.has(x) --> se fija si existe x en el set
- set.size
- set.values() -->itera el set, es como un for

### Objetos
- obj1 = obj2 --> al intentar copiar un objeto se hace referencia al primer objeto, entonces si modifico el segundo se va a modificar el primero.
  - Lo mejor es usar el Spread Operator
- obj.sort((a,b) => a.prop - b.prop) --> Para ordenar un objeto en funcion de su propiedad
- Comparar fechas --> si o si convertir a milisegundos sino da False
  - para esto se usa el método getTime()
- getDate()
- getMonth()
- getFullYear()
- fecha.toLocaleDateString(local) --> Transforma la fecha a un formato más legible según el país, para eso usar en local el código de zona (en-US, en-GB, etc).

### Obtener valores de usuario
- prompt("str") --> podes asignarlo a una variable

## Ejercicios
1- Crea un archivo llamado conjuntos.js que contenga las siguientes líneas:
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)


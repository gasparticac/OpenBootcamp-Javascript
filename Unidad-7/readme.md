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

2- Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

3- Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

4-
- Abre una nueva ventana "about:blank" en Google Chrome
- Abre la consola de desarrollador de Google Chrome (F12)
- Pregunta al usuario cuál es su edad y almacénala en una variable llamada edad
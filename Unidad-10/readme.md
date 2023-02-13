## Funciones vistas
Formas de exportar archivos:
- CommonJS - require
  - En el archivo del módulo exportas con module.exports = {funciones} y despues lo importas con require("./modulo")... Se puede hacer destructuring
- Import ES6 - import
  1. Colocar la propiedad "type:module" dentro del package.json de la carpeta principal del proyecto (no dentro del modulo)
  2. En el módulo de las funciones exportarlas con "export function..."
  3. Importarlas dentro del main como import {} from "path"... se puede hacer destructuring
- Librería Axios
  - npm i axios
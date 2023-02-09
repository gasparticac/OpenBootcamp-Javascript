## Funciones vistas
- funcion flecha () => {} --> Deben ser hizadas antes de ser utilizadas
### Promesas
- const promesa = new Promise((resolve,reject) =>{})
- para llamarla es:
  - promesa.then(()=> algo).catch(()=> algo)
- yield var dentro de bucle -> devuelve "var" y vuelve a entrar a la funcion esperando q la llamen de nuevo con funcion.next()

## Ejercicio
Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
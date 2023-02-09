/*
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos */

const alwaysTrue = () => true;

const timeOut = new Promise((resolve,reject) =>{
    if(true){
        setTimeout(() => {
            console.log("Hola soy una promesa");
        }, 5000);
    }
});

function* indexGenerator(){
    let i = 0;
    while(i<10){
        i+=2;
        yield i;
    }
}
const gen = indexGenerator();
console.log(gen.next());
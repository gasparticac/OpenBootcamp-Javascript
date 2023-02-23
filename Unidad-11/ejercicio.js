class Estudiante{
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = ["Javascript", "HTML", "CSS"]
    }

    obtenDatos(){
        console.log(`Hola soy ${this.nombre} y las asignaturas son ${this.asignaturas}`);
    }
}

const juan = new Estudiante('juan');

juan.obtenDatos();
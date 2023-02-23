## Programacion Orientada a Objetos
### Funciones/métodos vistos
- Funciones que crean objetos
- si una propiedad tiene el mismo nombre y valor se abrevia a una sola vez, ejemplo:
  - nombre: nombre, apellido: apellido ---> nombre, apellido.
- class Objeto{this.propiedad,metodo()} --> Objeto con mayuscula
- const nuevoObjeto = new Objeto(propiedades)
- nuevoObjeto instanceof Objeto ? bool
- Constructor(parametro){this.parametro = parametro}
- #parametro --> PRIVADO dentro del objeto. Solo se podrá acceder a ese parámetro por los métodos
- #param;constructor(param){this.param = param}
- _param --> PROTEGIDO
#### Getters y setters
- Getters: Métodos q nos permiten obtener atributos/metodos privados o protegidos de forma controlada. Las Getters no tienen q ser ni privadas ni protegidas.
  - getParam(){return this.#param}
- Setters: Métodos q nos permiten cambiar el valor de atributos/metodos privados o protegidos
  - setParam(newParam){#oldparam= newParam}
```
class Persona{
  constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar(){
    console.log(`Hola, soy ${this.nombre} `);
  }
}

const juan = new Persona('juan','perez',true);

```

### Herencia
Del código anterior se puede heredar el objeto/clase y agregarle más métodos o propiedades

```
class Programador extends Persona{
  constructor(nombre, apellido, lenguajeProg){
    super(nombre, apellido) //con el super se hereda del constructor inicial las propiedades que ya existen y despues se agregan las adicionales.
    this.lenguajeProg = lenguajeProg;
  }
}
```

### Polimorfismo
Dentro de la herencia se puede reasignar o modificiar los métodos de las clases, para eso también se usa un super y se sobreescribe (override) el método inicial
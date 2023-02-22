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
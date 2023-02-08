// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let person = {
    firstName: "gaspar",
    lastName: "ticac",
    age: 26,
    height: 190,
    isDeveloper: true
};
let personAge = person.age;

let people = 
[
    person,
    {
        firstName: "Pepe",
        lastName: "Pica",
        age: 28,
        height: 189,
        isDeveloper: false
    },
    {
        firstName: "Pablo",
        lastName: "Mar",
        age: 30,
        height: 150,
        isDeveloper: false
    }
]
let sortedByAge = people.sort((a,b) => a.age - b.age);

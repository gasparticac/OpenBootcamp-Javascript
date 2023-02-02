// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// 
// - Tu nombre (string)
// 
// - Tu edad (number)
// 
// - ¿Eres desarrollador? (boolean)
// 
// - Tu fecha de nacimiento (Date)
// 
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const list = {
    name : "Gaspar",
    age: 26,
    isDeveloper : true,
    birthDate: new Date("1996-03-27 00:00:00"),
    book:{
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        date: new Date ("1943-04-06"),
        url: "https://es.wikipedia.org/wiki/El_principito"
    }
}
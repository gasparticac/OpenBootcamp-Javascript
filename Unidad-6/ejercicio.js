// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let shoppingList = ['fideos', 'arroz', 'aceite', 'azucar', 'vinagre'];
shoppingList.push('Aceite de Girasol');
shoppingList.pop('Aceite de Girasol');
let favMovies = [
    {title: "El Hoyo",
    director:"Galder Gaztelu-Urrutia",
    date: 2019},
    {title: "Sin novedad en el frente",
    director: "Edward Berger",
    date: 2022
    },
    {title:"Top Gun: Maverick",
        director: "Joseph Kosinski",
        date: 2022
        }
];

let newMovies = favMovies.filter(movie => movie.date>2010);
let movieDirectors = favMovies.map(movie => movie.director);
let movieTitle = favMovies.map(movie => movie.title);

let directorsAndTitleConcat = movieDirectors.concat(movieTitle);
let directorsAndTitleSpread = new Array(...movieDirectors,...movieTitle);
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let date = new Date();
let birthDate = new Date("01 jan 1996");
let compare = date > birthDate;
let day = birthDate.getDay();
let month = birthDate.getMonth();
let year = birthDate.getFullYear();
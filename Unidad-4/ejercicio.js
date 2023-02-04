let firstName = "Gaspar";
let lastname = "Ticac";

let estudiante = firstName.concat(" ",lastname);

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let estudianteCount = estudiante.length;

let firstLetter = firstName.charAt(0);

let lastLetter = lastname.charAt(lastname.length-1);

let noWhitespaces = estudiante.replace(/\s/g, "");

let isName = estudiante.includes(firstName);

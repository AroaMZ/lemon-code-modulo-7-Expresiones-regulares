
//Caso 1
//Dado este IBAN:
//ES6600190020961234567890
//Validar que se informa con dos letras, y los números correspondientes.

let ibanCaso1 = "ES6600190020961234567890";
let patternIbanCaso1 = /^[A-Z][A-Z]\d{22}$/
console.log("CASO 1 IBAN");
console.log("El IBAN " + ibanCaso1 + "es correcto (true) o incorrecto (false): ", patternIbanCaso1.test(ibanCaso1));
console.log("");




//Caso 2
//Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

let ibanCaso2 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

let patternIbanCaso2 = /(^[A-Z][A-Z]\d{22}$)|(^[A-Z][A-Z]\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}$)/
console.log("CASO 2 IBAN");
ibanCaso2.forEach(iban => {
    console.log("El IBAN " + iban + " es correcto (true) o incorrecto (false): ", patternIbanCaso2.test(iban))
})
console.log("");

//Caso 3
//Vamos a extraer el código de páis y el dígito de control.

var patternIbanCaso3 = /^[A-Z][A-Z]\d{2}/
let ibanCaso3 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
console.log("CASO 3 IBAN");
ibanCaso3.forEach(iban => {
    console.log("El código del páis y el dígito de control del IBAN " + iban + " son", patternIbanCaso3.exec(iban));

})
console.log("");




//Validar matrícula coche

//Caso 1
//Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a
//validar:

let matriculaCaso1 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

let patternMatriculaCaso1 = /^\d{4}(\s|-|\S)[A-Z]{2,3}$/
console.log("CASO 1 MATRICULA");
matriculaCaso1.forEach(matricula => {
    console.log("Matricula " + matricula + ": ", patternMatriculaCaso1.test(matricula));
})
console.log("");

//Caso 2
//Vamos a extraer por un lado la parte numérica y por otro las letras.

let matriculaCaso2 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

let patternMatriculaCaso2Numeros = /^\d{4}/
console.log("CASO 2 MATRICULA");
matriculaCaso2.forEach(matricula => {
    console.log("Los números de las Matriculas son " + matricula + ": ", patternMatriculaCaso2Numeros.exec(matricula));
})
console.log("");

//Extraer imágenes de un fichero HTML

//Una utilidad divertida es implementar una aspiradora de imagenes, es decir de un HTML extraer de todos los
//tags img el contenido de src en ese contenido tenemos las URL a las imágenes.

console.log("Caso 1 IMAGENES")
//De una sola linea extraer el contenido de src:
let textCaso1Imagenes = `<img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>`
let patternCaso1Imagenes = /src="(?<imagen>https:\/\/.*)"/g
let testCaso1Imagenes = textCaso1Imagenes.match(patternCaso1Imagenes)
for (const match of testCaso1Imagenes) {
    console.log(match)
}
console.log("");


console.log("Caso 2 IMAGENES");
//De un HTML extraer todos los src de todos los objetos img:
let textCaso2Imagenes =
    `<html>
<body>
<img
src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
/>
<h1>ejemplo</h1>
<img
src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"
/>
</body>
</html>`

let patternCaso2Imagenes = /src="(?<imagen>https:\/\/.*)"/g
let testCaso2Imagenes = textCaso2Imagenes.matchAll(patternCaso2Imagenes)
for (const match of testCaso2Imagenes) {
    console.log(match[1])
}
console.log("");

//Validar sintaxis tarjeta de crédito

//En nuestra aplicación tenemos un apartado para que el usuario pueda introducir los datos de su tarjeta de
//crédito máster card, para ello vamos a tener en cuenta:
//Que una máster card tiene una longitud de 16 caracteres (numeros).
//Que tiene que empezar con 50,51,52,53,54,55.
//Qué lo normal es que se agrupen en conjuntos de 4 digitos.
//Ejemplo:
//5299 64000 000 000

//Caso 1
//Vamos a validar los siguiente formatos
//5299 64000 000 000 5299-64000-000-000 529964000000000

console.log("CASO 1 TARJETA");
let tarjetaCaso1 = ["5299 64000 000 000", "5299-64000-000-000", "529964000000000"];
let patternTarjetaCaso1 = /(^5[0-5]\d{2}(\s|-)\d{5}(\s|-)\d{0,4}(\s|-)\d{0,4})|(^\d{16})/
tarjetaCaso1.forEach(tarjeta => {
    console.log("El número de la tarjeta " + tarjeta + " es correcto (true) o incorrecto (false): ", patternTarjetaCaso1.test(tarjeta));
})
console.log("");

//Caso 2
//Vamos a extraer cada grupo de cuatro digitos.
//Si quieres saber más validaciones de tarjetas de crédito y como obtener números para probar:
//https://www.freeformatter.com/credit-card-number-generator-validator.html

console.log("CASO 2 TARJETA");
let tarjetasCaso2 = ["5299 64000 000 000G", "5299-64000-000-0000", "5299640000000000"];
let patternTarjetaCaso2 = /(\d{4})/g
tarjetasCaso2.forEach(tarjeta => {
    tarjeta = tarjeta.replaceAll(" ", "").replaceAll("-", "");
    matches = [...tarjeta.matchAll(patternTarjetaCaso2)].length;
    if (tarjeta.length > 16) {
        console.log("tarjeta no valida");
    }
    else if (matches === 4) {
        console.log("El número de la tarjeta en grupos de 4 digitos es: " + tarjeta, tarjeta.match(patternTarjetaCaso2));
    }
    else {
        console.log("tarjeta no valida");
    }
}
)
console.log("");

console.log("Buscar Expresiones regulares");

//Antes de ponernos a implementar una expresión regular de algo estándar es buena idea buscar y ver si
//existen implementaciones de las que ya podemos partir.
//En este ejercicio vas a buscar una serie de expresiones regulares y validar si la expresión dada es correcta:

console.log("Comprobar si una clave es fuerte o no")

console.log("Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.");
let complejoCaso1 = ["ajdiK93@", "jkldfaljfdmafdklña"];
let patternComplejo = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))./
complejoCaso1.forEach(complejo => {
    console.log("El número de la tarjeta " + complejo + " es correcto (true) o incorrecto (false): ", patternComplejo.test(complejo));
})
console.log("");


console.log("Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud");
let moderadoCaso2 = ["fkakhj89hgjGHJjhjF7", "ADFJLAJFALKJ"];
let patternModerado = /(?=(.*[0-9]))(?=.*)(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
moderadoCaso2.forEach(moderado => {
    console.log("El número de la tarjeta " + moderado + " es correcto (true) o incorrecto (false): ", patternModerado.test(moderado));
})
console.log("");

console.log("Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net");
let urls = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];
let patternUrl =  /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
urls.forEach(url => {
    console.log("La dirección URL " + url + " es correcto (true) o incorrecto (false): ", patternUrl.test(url));
})
console.log("");

console.log("Validar que un color en Hexadecimal esta bien formado");
let hexadecimales = ["#fff", "000"];
let patternHexadecimal = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
hexadecimales.forEach(hexadecimal => {
    console.log("El hexadecimal " + hexadecimal + " es correcto (true) o incorrecto (false): ", patternHexadecimal.test(hexadecimal));
})
console.log("");
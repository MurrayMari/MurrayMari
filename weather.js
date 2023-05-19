const kelvin = 293;
//kelvin is consant 293
const celsius = kelvin - 273;
//celsius is kelvin minus 273
let fahrenheit = celsius*(9/5) + 32;
//fahrenheit
fahrenheit = Math.floor(fahrenheit);
// .floor rounds to neareast whole number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius*(33/100);

newton =  Math.floor(newton);

console.log(`The temperture is ${newton} on the Newton Scale`);

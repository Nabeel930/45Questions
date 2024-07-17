"use strict";
// A program to describes famous quote of a person
console.log(`Prophet MUHAMMAD once said, "It is also a charity to utter a good word."`);
// A program to get the name of a person in upper,lower and tittle case
let name2 = 'Nabeel';
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
function tittleCase(str) {
    let name3 = name2.charAt(0).toUpperCase() + name2.substr(1).toLowerCase();
    console.log(name3);
}
tittleCase(name2);

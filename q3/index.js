"use strict";
let name2 = 'Nabeel';
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
function tittleCase(str) {
    let name3 = name2.charAt(0).toUpperCase() + name2.substr(1).toLowerCase();
    console.log(name3);
}
tittleCase(name2);

"use strict";
let magician_names = [
    "David Copperfield",
    "Penn & Teller",
    "David Blaine",
    "Criss Angel"
];
let copy_names = magician_names;
function show_magicians(names) {
    console.log(names);
}
console.log('simple magician names: ');
show_magicians(magician_names);
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = `${names[i]} the good magician.`;
    }
    return names;
}
console.log('edited magician names: ');
console.log(make_great(copy_names));

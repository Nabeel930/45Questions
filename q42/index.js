"use strict";
let magician_names = [
    "David Copperfield",
    "Penn & Teller",
    "David Blaine",
    "Criss Angel",
    "Dynamo",
    "Derren Brown",
    "Lance Burton",
    "Harry Houdini",
    "Shin Lim",
    "Jeff McBride",
    "Cyril Takayama",
    "The Amazing Randi (James Randi)",
    "Hans Klok",
    "Mat Franco",
    "Max Maven"
];
function show_magicians(names) {
    console.log(names);
}
show_magicians(magician_names);
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`'${names[i]}' the good magician.`);
    }
}
make_great(magician_names);

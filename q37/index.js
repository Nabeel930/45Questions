"use strict";
function make_shirts(size) {
    if (size == 'medium' || size == 'large') {
        console.log(`the size of the shirt is '${size}', the text on the shirt is 'I love TypeScript'`);
    }
    else {
        console.log(`the size of the shirt is ${size}, the text on the shirt is 'keep calm and stay position'`);
    }
}
make_shirts('medium');
make_shirts('large');
make_shirts('small');
make_shirts(34);

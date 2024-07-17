"use strict";
function cars(manufacturer, model_name, ...optional) {
    let obj = {
        manufacturer: manufacturer,
        model_name: model_name,
    };
    optional.forEach((element) => {
        let [key, value] = element.split(":");
        obj[key.trim()] = value.trim();
    });
    return obj;
}
let result = cars("honda", "civic", "color: black");
let result1 = cars("toyota", "corolla", "color: white", "manual: no");
console.log(result);
console.log(result1);

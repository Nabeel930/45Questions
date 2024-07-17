function sandwich(items: string[]){
    console.log('\t Sandwich toppings');
    for(let i = 0; i < items.length; i++){
        console.log(`${i + 1} = ${items[i]}`);
    }
}
let items = ['mayonnaise', 'cucumber', 'lettuce', 'olives', 'mustard'];
let items1 = ['mayonnaise', 'cucumber'];
let items2 = ['mayonnaise', 'cucumber', 'lettuce'];
sandwich(items);
sandwich(items1);
sandwich(items2);

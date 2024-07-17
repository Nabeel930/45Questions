let array = ['Faisal', 'Rehan', 'admin', 'Sameer', 'Hamza'];
for(let i = 0; i < array.length; i++){
    if(array[i] == 'admin'){
        console.log('Hello admin, would you like to see a status report');
    }
    else{
        console.log(`Hello ${array[i]}, thank you for logging in again`);
    }
}
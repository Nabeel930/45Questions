let current_users = ['faisal', 'rehan', 'admin', 'sameer', 'hamza'];
let upper_current_users = current_users.map(user => user.toUpperCase());
let new_users = ['ali', 'ahmed', 'fahad', 'rehan', 'HAMZA'];
for(let i = 0; i < new_users.length; i++){
    let c = 0;
    for(let j = 0; j < current_users.length; j++){
        if(new_users[i] == current_users[j] || new_users[i] == upper_current_users[j]){
            console.log(`${new_users[i]} will need to enter a new username`);
            c = 1;
        }
    }
    if(c == 0){
        console.log(`${new_users[i]} username is available`);
    }
}
let guest1 = ['Ali', 'Sameer', 'Irfan'];
console.log(`Dear ${guest1[0]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[1]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[2]}, I have invited you to dinner.`);
console.log('Hurray!, I have found a big dinner table.');
guest1.unshift('Hamza');
guest1.splice(3, 0, 'Adeel');
guest1.push('Rehan');
console.log(`Dear ${guest1[0]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[1]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[2]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[3]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[4]}, I have invited you to dinner.`);
console.log(`Dear ${guest1[5]}, I have invited you to dinner.`);
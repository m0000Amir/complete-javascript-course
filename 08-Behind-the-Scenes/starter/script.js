'use strict';

const jonas = {
    firstName: 'Jonas',
    year: 28,
    callThis: () => {console.log(this)}
}

jonas.callThis();


const Jessica = {
    firstName: 'Jessica',
    lastName: 'John',
    family: ['Emil', 'Arthur'],
    year: 20
}

//Option 1
let  JessicaAfterMarriage = Object.assign({}, Jessica)
JessicaAfterMarriage.lastName = 'Williams';
JessicaAfterMarriage.family.push('Said', 'Tagir');

// Option 2
let JessicaAfterMarriage2 = {...Jessica};
JessicaAfterMarriage2.lastName = 'Williams';
JessicaAfterMarriage2.family.push('Bella', 'Harry');
// Option 3

let JessicaAfterMarriage3 = JSON.parse(JSON.stringify(Jessica));

console.log('Before:', Jessica);
console.log('After 1:', JessicaAfterMarriage);
console.log('After 2:', JessicaAfterMarriage2);
console.log('After 3:', JessicaAfterMarriage3);

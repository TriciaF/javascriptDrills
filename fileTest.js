'use strict';

function yearOfBirth(age) {
    if (age < 0) throw new Error('Age cannot be negative');

    else { return 2017 - age; }
}

function whoAmI(name, age) {
    if (typeof name === 'string' && typeof age === 'number') {

        try {
            let yob = yearOfBirth(age);
            console.log(`Hi my name is ${name} and I am ${age} years old`);
            console.log(`I was born in ${yob}`);
        } catch (Error) {
            console.log(Error);
        }
    } else { console.log('Arguments not valid'); }
}

function jediName(firstName, lastName) {
    console.log(lastName.slice(0, 3) + firstName.slice(0, 2));
}

function beyond(num) {
    if (!isFinite(num)) {
        console.log("And beyond");
    } else if (isFinite(num) && (num > 0)) {
        console.log('To Infinity');
    } else if (isFinite(num) && (num < 0)) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying home');
    }
}


beyond(Math.log(0));
whoAmI("Sam", 28);
jediName("Tricia", "Forrester");
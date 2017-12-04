'use strict';

function yearOfBirth(age) {
    if (age < 0) throw new Error('Age cannot be negative');

    else {return 2017 - age;}
}

function whoAmI(name, age) {
    if (typeof name === 'string' && typeof age === 'number') {

        try {
            let yob=yearOfBirth(age);
            console.log(`Hi my name is ${name} and I am ${age} years old`);
            console.log(`I was born in ${yob}`);
        }
        catch(Error){
            console.log(Error);
        }
    }
    else {console.log('Arguments not valid');}
}

whoAmI("Sam", 28);
'use strict';

function whoAmI(name, age) {
    let _name = "Tricia" || name;
    let _age = "54" || age;
    let yearOfBirth = 2017 - age;

    console.log(`Hi my name is ${name} and I am ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
}

whoAmI("Sam", 28);
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

function theCode(list) {
    let dividedList = list.split(" ");
    for (let i=0; i<dividedList.length; i++) {
        if (dividedList[i].charAt(0) === 'a') {
            console.log(dividedList[i].charAt(1));
        }
        else if (dividedList[i].charAt(0) === 'b') {
            console.log(dividedList[i].charAt(2));
        }
        else if (dividedList[i].charAt(0) === 'c') {
            console.log(dividedList[i].charAt(3));
        }
        else if (dividedList[i].charAt(0) === 'd') {
            console.log(dividedList[i].charAt(4));
        }
         else {console.log(" ")}
    }
}

function daysOfMonth(name) {
    switch(name){
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(`${name} has 31 days`);
            break;
        
        case 'February':
            console.log(`${name} has 28 days`);
            break;
        
        default:
            console.log(`${name} has 30 days`);
    }
}



whoAmI("Sam", 28);
jediName("Tricia", "Forrester");
beyond(Math.log(0));
theCode('craft block argon meter bells brown croon droop');
daysOfMonth('December');
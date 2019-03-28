//string, number, boolean, null, undefined

const personalName = 'Miller';

const age = 20;

const awesome = true;

const rating = 5.0;

const x = null; //typeof not really an object should be null 

const y = undefined;

let z;

console.log(typeof personalName,typeof age,typeof awesome,typeof rating,
    typeof x, typeof y, typeof z);
//es6 using template strings
const summary = `Hello my name is ${name} I am ${age} and I have a ${rating} rating`;
console.log(summary);
//const.length gives the length of a string
console.log(personalName.length, summary.length);

/*
const.substring(x,y); x takes where you want to start y takes
where you want to finish, to pull a string
*/
console.log(summary.substring(0,8))

//const.split() Paramater takes in what you want to split by
console.log(personalName.split(''));
// Array 
 const names = new Array('Joe', 'Mike', 'Bob', 'Billy', 'Jean');

 names[5] = 'Mike'
 //instead of doing ^^^^ use .push(); Pushes a value to the end.
 //.unshift(); adds a value to the beggining.
 names.push('Gaby');
 //.pop(); takes last value off

 //.indexOf('nameOfValue');
 console.log(`Index of Gaby is ${names.indexOf('Gaby')}`)
 //re-assigned second value;
 names[1] = 'Changed'
 
 console.log(names);
  
 console.log(names[0]);

 //Object Litterals

 const person = {

    firstName: 'Gaby',
    lastName: 'Georges',
    age: 20,
    weight: 170,
    coolness: '1 out of 5',
    hobbies: [ 'being boring', 'code', 'adventure' ],
    address: {
        street: '101 w broadway',
        city: 'San Diego',
        state: 'CA'

    }
 };

  //can add new things to emails
 person.email = 'milla@gmail'

 // this is not assinging a new person const but pulling name from 
 //OG const
 const { firstName, lastName, address: {city}} = person
 console.log(city);

 //Array of Objects
 const arrayPeople = [
    {
        id: 0,
        name: "Jose",
        cool: false
    },
    {
        id: 1,
        name: "Michael",
        cool: true
    }
 ];
 console.log(arrayPeople[1].id)



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
const summary = `Hello my name is ${personalName} I am ${age} and I have a ${rating} star rating`;
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

 //For loops
 //3 parameters assignent of variable, condition to be met, 
 //incriments

 for(let i=0; i<=10; i++){
    console.log(`for loop ${i}`)
 };

 //while loop

 let i = 0;
 while(i<=10){
     console.log(`while loop ${i}`);
     i++
 }

 for(let i=0; i<arrayPeople.length; i++){
     console.log(`for loop ${arrayPeople[i].name}`);
 }

 //alternative is forOf
 for(let x of arrayPeople){
     console.log(`for of ${x.name}`)
 };

 //forEach, map, filter
 arrayPeople.forEach(function(personsName) {
        console.log(`for Each ${personsName.name}`);
 });

 //map
 const nameArray = arrayPeople.map(function(personsName){
    return personsName.name;
 });
 console.log(nameArray);

 //filter
 const onlyCool = arrayPeople.filter(function(personCoolness){
    return personCoolness.cool === true;
 });
 console.log(onlyCool);
 
 //combbining it all
 const onlyCoolName = arrayPeople.filter(function(personCoolness){
    return personCoolness.cool === true;
 }).map(function(name){
     return name.name;
 });
 console.log(onlyCoolName);

 //conditionals

 // || < this means OR && << this means AND
 const theNumber = 20;

if( theNumber == 10 ){
    console.log(`the numer is ${theNumber}`);
} else if(theNumber< 10){
    console.log(`the numer was less than 10`)
} else {
    console.log(`the numer was greater than 10`)
};

//terinary
const determine = 9;
// if X > 10 ? <this means then, : <this means else

// const color = determine > 10 ? 'red' : 'blue '
// console.log(color);
const color = 'green'

//switches
switch(color) {
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default: 
    console.log(`color is neither red nor blue it is ${color}`);
    break;
}
//simple 
function additionMachine(x, y){
    return x + y

}
console.log(additionMachine(10, 99));

//Arrow function

const additoinArrow = (x, y) => {
    return x + y
}
console.log(additoinArrow(9, 20));
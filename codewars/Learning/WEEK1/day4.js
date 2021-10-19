const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})
count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
//console.log(count)

s='abcWUBdacWUBWUBWUBsad'
s=s.split('WUB').filter(n => n).join(' ')
console.log(s)

let email = 'john.doe@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);

console.log(domain); // gmail.com
const arr = ["Hello", "", "king", "", "queen", "",  "early"];

const result =  arr.filter(e =>  e);

console.log(result); // ["Hello", "king", "queen", "early"]

//Remove whitespace from both sides of a string:

let str = "       Hello World!        ";
str.trim()   // Returns "Hello World!"


// The native method filter will loop through the array and leave only those entries that pass the given callback function onlyUnique.
// onlyUnique checks, if the given value is the first occurring. If not, it must be a duplicate and will not be copied.

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter(onlyUnique);

console.log(unique); // ['a', 1, 2, '1']


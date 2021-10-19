  /* Q4
  let today= new Date()
  let BirthDate = new Date("8th of April 2001");
  let birthyr= BirthDate.getFullYear();
  let currentyr= today.getFullYear();
  
  let age=currentyr-birthyr
  console.log(age)

  /* 
	More information at Date: MDN Reference 
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

let today = new Date();
let bday = new Date("8 December 2001");
console.log(bday);
let cond=today.getMonth()-bday.getMonth();
age=today.getFullYear() - bday.getFullYear();
if (cond<0 || (today.getFullYear() == bday.getFullYear())) {
  age--;
}

console.log(age)

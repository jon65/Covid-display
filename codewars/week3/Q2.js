
'use strict'

//Q2 function
function checkMarkValid(mark)
{   
    let cond=false;
    //check if mark is between 0 and 100
    if (mark>=0 && mark<=100)
    {
        
        //if true set cond var to true
        cond=true;
    }
   else 
   {    
       //else set it to false
       cond=false;
   }
   return cond
   
   
   //return variable cond
}


//print result
let marks = [12,45,67,900,"dog",-1,true];

//loop through all the elements in the test array 
for (let i=0; i<8; i++)
{
    console.log(`${marks[i]} : ${checkMarkValid(marks[i])}`)
}
    



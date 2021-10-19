
'use strict'

//Q1 function
function fahrenheitToCelsius(fahrenheit)
{      
    let Celcius=0 
    //calculates celcius by subtracting 32 from degrees then dividing by 9
    Celcius=5*((fahrenheit-32)/9);  
    //return value to 3 d.p
    return(Celcius.toFixed(3))
}


console.log(fahrenheitToCelsius(2))

function below(n) {
    let sum=0;
    for (let i = 1; i <= n+1; i++)
    {
        for (let j = 1; j <= i+1; j++)
        {
            sum+=i;
        }
    }
    return sum
}
console.log(below(1))
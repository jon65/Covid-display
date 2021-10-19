
"use strict"

//function Q9
function findPrimes(min,max) {

    //preallocate variable to store result
    let noprime=[];
    //loop numbers between min and max
    while (min<=max)
    {   
        //preallocate var to be manipulated
        let val=min;
        //preallocate counter for number of divisible numbers
        let sol=0;
        //divide val with all number from min to val
        for (let i=0; i<=val; i++)
        {   
            //calculate rem
            let remainder=val%i;
            //check if i is a factor
            if (remainder==0)
            {
                //count number of factors
                sol++
            }
        }
        //prime numbers have only 2 factors (1,itself)
        //check for prime numbers
        if (sol==2)
        {
            //append prime number to array
            noprime.push(val)
        }
        //increment value to check for prime number
        min++
    }
    //return array of prime numbers
    return noprime
}
console.log(findPrimes(20,150))
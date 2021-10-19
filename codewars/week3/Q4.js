'use strict'

//function daySuffix
function daySuffix(day)
{
    //create an initial string template with day number and : as string
    let suffix=day.toString()+': ';
    
    //checks if day taken is within the allowable range 
    if (typeof(day)==='number' && day>0 && day<=32 )
    {
        //depending on the day, the appropriate suffix is appended 
        suffix+=day.toString()
        if (day=='1') {
            suffix+='st';
        }
        else if (day=='2')
        {
            suffix+='nd';
        }
        else if (day=='3') {
            suffix+='rd';
        }
        else{
            suffix+='th';
        }
    }
    //apend null if day is invalid
    else{
        suffix+='null';
    }
    
    return(suffix)
}

//test output
let output = "";
for (let i = 1; i <= 31; i++)
{
    output += daySuffix(i) + "\n";
}
output += daySuffix("dog") + "\n";
output += daySuffix(-1) + "\n";
output += daySuffix(100) + "\n";
output += daySuffix("d0g") + "\n";
console.log(output);
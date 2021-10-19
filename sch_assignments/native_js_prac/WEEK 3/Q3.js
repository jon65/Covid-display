


 let tax= [
     { income:18200,
        extra:0,
        per:0
     },
     {
        income:37000,
        extra:0,
        per:1.19
     },
     {
        income:90000,
        extra:3572,
        per:0.325,
     },
     {
        income:180000,
        extra:20797,
        per:0.37
     },
     {
        extra:20797,
        per:0.45,
     }
]


 let salary = 127050;
 let sumtax=0;
for ( let obj=0; obj<tax.length; obj++)
{
    if (salary <= tax[obj].income)
    {
        sumtax=salary*tax[obj].per+tax[obj].extra;
        break
    }
    else 
    {
        sumtax=salary*tax[4].per+tax[4].extra;
        break
    }
}

totaltax=sumtax+salary*0.02;

console.log("$"+totaltax.toFixed(2))


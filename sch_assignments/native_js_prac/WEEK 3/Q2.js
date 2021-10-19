
let dataset= [54,-16,80,55,-74,73,26,5,-34,-73,19,63,-55,-61,65,-14,-19,-51,-17,-25];
let odd = [];
let even = [];



for (let j=0; j<dataset.length; j++)
{
    if (dataset[j]%2!==0)
    {
        odd.push(dataset[j]);
    }
    else if (dataset[j]%2==0)
    {
        even.push(dataset[j]);
     
    }
}
console.log(even, odd)
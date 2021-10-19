


length1=8;
width=9;
str="";



for ( let i=0; i<=width; i++)
{
    for ( let j=0; j<=length1; j++)
        {
            if (i==0 || i==9)
            {
            str=str+"*";
            
            }
            else if (j==length1-i && i!==0 && i!==9)
            {
                str=str+"*";
            }
            else if (i!==0 && i!==9 && j!==length1-i)
            {
                str=str+" ";
            }
        
        }
console.log(str)
str="";
} 


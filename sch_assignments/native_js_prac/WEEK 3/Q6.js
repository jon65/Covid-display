

REPORT = [
    {
        Code:"HD",
        Grade:"High Distinction",
        Mark:80
    },
    {
        Code:"D",
        Grade:"Distinction",
        Mark:70
    },
    {
        Code:"C",
        Grade:"Credit",
        Mark:60
    },
    {
        Code:"P",
        Grade:"Pass",
        Mark:50
    },
    {
        Code:"N",
        Grade:"Fail",
        Mark:0
    }
]

let marks =[45,12,67,90,"dog",-1,true];
let obj=0;
for (obj in marks)
{
    if (typeof marks[obj]==="number" && marks[obj]>=0 && marks[obj]<=100 )
    {
        for (key in REPORT)
        {
                 if (marks[obj] >= REPORT[key].Mark)
            {
                console.log("Mark: " + marks[obj] + " ("+ REPORT[key].Code+")");
                break 
            }
        }
    }
    else{
        console.log("Invalid Mark: " + marks[obj])
    }
   
}

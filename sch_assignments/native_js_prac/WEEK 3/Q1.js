//Q1

oddeven(100)


function oddeven(set) {
    for (let i=0; i<=set; i++)
    {   
        if (i<=50 && i%2!==0 || i>=51 && i<=100 && i%2==0)
        {
    
         console.log(i)
        }
    }

}
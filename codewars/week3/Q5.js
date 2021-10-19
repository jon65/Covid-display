"use-strict"

//function used
function addDay (numDay) {
        //initialise variables 
        const today=new Date();
        const  adday= new Date();
        this.adday=adday;

        //calculate new date
        adday.setDate(today.getDate()+numDay);

        //extract individual date elements
        this.year=adday.getFullYear();
        this.month=adday.getMonth();
        this.date=adday.getDate();

        //return object
        return {
            New_Date: this.adday,

            Year:this.year,

            Month:this.month,

            date:this.date
        
        }
    }
console.log(addDay(1))




"use-strict"

let students=[
	{
		id:28976577,
		unit:["ENG1003"],
		nationality:"Australian"
	},
	{
		id:28958234,
		unit:["ENG1003"],
		nationality:"Australian"
	},
	{
		id:36788927,
		unit:["ENG1003"],
		nationality:"Australian"
	},
	{
		id:23978904,
		unit:["ENG1003"],
		nationality:"Australian"
	},
	{
		id:28976589,
		unit:["ENG1003"],
		nationality:"American"
	},
	{
		id:28951284,
		unit:["ENG1003"],
		nationality:"Indian"
	},
	{
		id:36789027,
		unit:["ENG1003"],
		nationality:"Australian"
	},
	{
		id:22345604,
		unit:["ENG1003"],
		nationality:"Sri Lankan"
	}
];

//function 
function  searchInternationalStudents(dataArray)
{
    //initiate variables 
    let search='nationality'; //condition
    let condition='Australian'; //property to query
    this.finder=[];
    let counter=0;

    //query every object in the array
    for (entry in dataArray)
    {   
        //validates that object contains property
        if (dataArray[entry][search]!==undefined)
        {
            if (dataArray[entry][search]!==condition)
            {
                counter++;
            }
            else {
                continue 
            }
         
        }
        else 
        {
    
            console.log('Entry: ' + entry + ' does not have the property you are looking for')
        }
    }
    return {
		counter
	}
}

console.log(searchInternationalStudents(students))
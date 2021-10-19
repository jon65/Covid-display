let orderBook = {
	sell:[],
	buy:[]
};

let orders =[
	{
		trader:"Tian Goh",
		buy:true,
		sell:false,
		price:10,
		quantity:100
	},
	{
		trader:"Nisal De Silva",
		buy:false,
		sell:true,
		price:10,
		quantity:50
	},
	{
		trader:"Jonny Low",
		buy:false,
		sell:true,
		price:11,
		quantity:100
	},
	{
		trader:"Arvind Kaur",
		buy:false,
		sell:true,
		price:10,
		quantity:100
	}
];


for(let i=0;i<orders.length;i++)
{
	//for verifications
	let orderValidity=true;

	if(
		orders[i].price<=0 ||
		orders[i].quantity<=0 ||
		orders[i].trader==="" ||
		(typeof orders[i].buy !== "boolean") ||
		(typeof orders[i].sell !== "boolean")
	)
	{
	   orderValidity=false;
	}

	if((orders[i].buy)==true &&  orderValidity==true)  //define parameters for conditions
	{
        orderBook.buy.push(orders[i]);  //the buy order should be run outside the if statement 
        if(orderBook.sell.length==0)	// no orders to match
		{
			break; 
		}

        let addOrderToBuySide = true;
        for(let j=0;j<orderBook.sell.length;j++)
        {
            if(orderBook.sell[j].price<=orders[i].price)
			{
                if(orderBook.sell[j].quantity>orders[i].quantity)
				{
					orderBook.sell[j].quantity-=orders[i].quantity;
					break;
                }
                else if(orderBook.sell[j].quantity===orders[i].quantity)
				{
					orderBook.sell.splice(j,1);
					addOrderToBuySide = false;
					break;
                }
                else if(orderBook.sell[j].quantity<orders[i].quantity) //a else if statement should be used since it contains conditions to be filtered
				{
					orders[i].quantity-=orderBook.sell[j].quantity;
                    orderBook.sell.splice(j,1);
                   
				}
			}
		}
		if(addOrderToBuySide==false) //add parameters to the condition 
		{
			orderBook.buy.push(orders[i]);
		}
        else
    {

		orderValidity=false;
	}

	if(!orderValidity)
	{
		console.log("order at index "+i+" is invalid!")
	}
    }
} //the loop was not enclosed 

// printing order book
for(let side in orderBook)
{
	let output ="";
	output +=side+" side orders\n\n";

	for(let k=0;k<orderBook[side].length;k++)
	{
		for(let prop in orderBook[side][k])
		{
			output += prop+": "+orderBook[side][k][prop]+"\n";
		}
		output +="\n";
    }
    
    console.log(output)
    }


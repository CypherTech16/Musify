/* Kushal Patel */

document.getElementById("TodaysDate").addEventListener("load",showDate());
function showDate()
{ 
    var rightNow2 =  new Date();
	var monthNum = 0, day = " ", year = 0;
	var todaysDate = "";  
 	monthNum = getMonthName(rightNow2.getMonth() + 1);
	day = rightNow2.getDate();
	year = rightNow2.getFullYear();
	todaysDate = monthNum + '-' + day + '-' + year ;  
	document.getElementById("TodaysDate").innerHTML = todaysDate;
    
     
}

function getMonthName(month)
{
	switch(month)
	{
		case 1:  monName="January"; break;
		case 2:  monName="February"; break;	
		case 3:  monName="March"; break;
		case 4:  monName="April"; break;
		case 5:  monName="May"; break;
		case 6:  monName="June"; break;
		case 7:  monName="July"; break;
		case 8:  monName="August"; break;	
		case 9:  monName="September"; break;
		case 10: monName="October"; break;	
		case 11: monName="November"; break;	
		case 12: monName="December"; break;				
	}
	return(monName);
}

function toTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function changetablecolor()
{
    document.getElementById("changeTable").style.color="cyan";
    document.getElementById("changeTable").style.borderWidth="0.1em";
    document.getElementById("changeTable").style.borderStyle="groove";
    document.getElementById("changeTable").style.borderColor="black";
}
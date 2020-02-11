// Functions to collect the data for the statistics from lolcounter.com

/*Total data indices to collect on each function call*/
var maxDataPerCall = 3000;

/*Total data to collect*/
var totalDataCount = champAccessList.length * champPosAccessList.length * compareTypeAccessList.length;

/*Data collected so far*/
var dataCount = 0;

var functionRunning = false;

/*Create the hyperlink that sends you back to the main page and refresh source*/
async function onBodyLoad()
{
	let returnData = await refreshCounterSourceCode();
	let promiseArray = returnData[0];
	let dataArray = returnData[1];
	setInterval(updateProgressBar, 50);
	Promise.all(promiseArray).then(function(){
		jsonArray = JSON.stringify(dataArray);
		saveAs(new Blob([jsonArray]), "LolCounterSource.json");
		return Promise.resolve(); })
		.then(sleep(5000)).then(sendBackToBasePage);
}



/*Send to the base page*/
function sendBackToBasePage()
{
	let a = document.createElement("a");
	a.setAttribute("href", "../WebContent/BasePage.html");
	a.click();
}



/*Grabs all the data from the website and saves it to this computer's files*/
async function refreshCounterSourceCode(startIndex)
{
	return new Promise(async function(resolve){
	if(startIndex==undefined)
		startIndex=0;
	
	let promiseArray=Array(totalDataCount);
	let dataArray=Array(totalDataCount);
	
	let counter=0;
	for(let champ=0; champ<champAccessList.length; champ++)
	{
		for(let compareType=0; compareType<compareTypeAccessList.length; compareType++)
		{
			for(let champPos=0; champPos<champPosAccessList.length; champPos++)
			{
				let activeChamp=champAccessList[champ];
				let activeCompareType=compareTypeAccessList[compareType];
				let activeChampPos=champPosAccessList[champPos];
				if(counter>=startIndex && counter<startIndex + maxDataPerCall)
				{
					await sleep(5);
					
					console.log("Call "+counter.toString())
					
					promiseArray[getDataAndAddToArray(activeChamp, activeCompareType, activeChampPos, dataArray, counter)];
					counter++;
				}
			}
		}
	}
	
	resolve([promiseArray, dataArray]);
});
}



async function getDataAndAddToArray(activeChamp, activeCompareType, activeChampPos, dataArray, index)
{
	let html = "";
	try
	{
		html = await $.get("https://api.allorigins.win/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?");
	}
	catch(err)
	{
		console.log("Failed to get data for vars "+activeChamp+", "+activeCompareType+", "+activeChampPos);
	}
	
	let data = await getDataFromHtml(html);
	dataArray[index] = data;
	dataCount++;
	return Promise.resolve();
}



/* Collects the data from the raw html of a page */
function getDataFromHtml(html)
{
	/*Object to contain the collected data*/
	data={champArray: Array(0), perArray: Array(0)};
	
	/*Find the start of the data and trim the html*/
	let startOfData=html.indexOf("<div class='weak-block full'");
	html=html.substring(startOfData).replace(/\s/g, "");
	
	/*Run through the html to find the data and give it to the data Object*/
	let activePos=0;
	while(activePos<html.length)
	{
		/*Find the start of the champion's name and break the loop if there are no more*/
		let startOfChampName=html.indexOf('find=', activePos);
		if(startOfChampName==-1)
			break;
		else
			startOfChampName=startOfChampName+'find="'.length;
		
		/*Find the end of the champion's name*/
		let endOfChampName=html.indexOf("'", startOfChampName);
		activePos=endOfChampName;
		
		/*Get name and add it to the data*/
		let champAccessName=html.substring(startOfChampName, endOfChampName);
		data.champArray.push(champAccessName);
		
		/*Find the start of the champion's per*/
		let startOfChampPer=html.indexOf("width:", activePos)+"width:".length;
		
		/*Find the end of the champion's per*/
		let endOfChampPer=html.indexOf("%", startOfChampPer);
		activePos=endOfChampPer;
		
		/*Get per and add it to the data*/
		let champPer=html.substring(startOfChampPer, endOfChampPer);
		data.perArray.push(champPer);
	}
	
	return Promise.resolve(data);	
}



function updateProgressBar()
{
	let per = (dataCount/totalDataCount)*100;
	let perString = per.toString() + "%";
	$("#progressBar").css("width", perString);
	return Promise.resolve();
}



/*Timout function*/
function sleep(ms)
{
	  return new Promise(resolve => setTimeout(resolve, ms));
}



/*Test the callback time of allorigin*/
function callbackTime(activeChamp, activeCompareType, activeChampPos, index)
{
	let start = new Date().getTime();
	$.get("https://api.allorigins.win/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?")
	.then(() => new Date().getTime())
	.then(end => end - start)
	.then(time => console.log("AllOrigins call "+index+" took "+time.toString()+" ms"))
}
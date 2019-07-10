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
	mySetInterval(updateProgressBar, 50);
	
	refreshCounterSourceCode().then(sleep(5000))/*.then(sendBackToBasePage)*/;
}

/*Send to the base page*/
function sendBackToBasePage()
{
	let a=document.createElement("a");
	a.setAttribute("href", "https://tjheim.github.io/LoLCounterPicking/WebContent/BasePage.html");
	a.click();
}

/*Grabs all the data from the website and saves it to this computer's files*/
function refreshCounterSourceCode(startIndex)
{
	return new Promise(async function(resolve){
	if(startIndex==undefined)
		startIndex=0;
	
	let promiseArray=Array(0);
	let dataArray=Array(0);
	
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
					sleep(20);
					console.log("Call "+counter.toString())
					
					promiseArray.push(getDataAndAddToArray(activeChamp, activeCompareType, activeChampPos, dataArray, counter));
					counter++;
				}
			}
		}
	}
	
	/*Save array as a JSON*/
	Promise.all(promiseArray).then(function(){
					jsonArray=JSON.stringify(dataArray);
					saveAs(new Blob([jsonArray]), "LolCounterSource.json");
					resolve(); })
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



///*Collect the data at the given indicators and save it as a file on this computer*/
//function collectDataAndSaveFile(activeChamp, activeCompareType, activeChampPos)
//{
//	var html=$.get("https://allorigins.me/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?");
//	html.catch((activeChamp, activeCompareType, activeChampPos) => collectDataAndSaveFile(activeChamp, activeCompareType, activeChampPos));
//	html.then(html => collectData(html))
//	.then(data => saveAs(new Blob([data]), activeChamp+"!"+activeCompareType+"!"+activeChampPos+".txt"));
//}
//
//
//
///*Collect the data from the given html file*/
//function collectData(html)
//{
//	/*String to contain the collected data*/
//	var data="";
//	
//	/*Find the start and end of the data and trim the html*/
//	var startOfData=html.indexOf("<div class='weak-block full'");
//	html=html.substring(startOfData).replace(/\s/g, "");
//	
//	/*Run through the html to find the data and give it to the data var*/
//	var activePos=0;
//	while(activePos<html.length)
//	{
//		/*Find the start of the champion's name and break the loop if there are no more*/
//		var startOfChampName=html.indexOf('find=', activePos);
//		if(startOfChampName==-1)
//			break;
//		else
//			startOfChampName=startOfChampName+'find="'.length;
//		
//		/*Find the end of the champion's name*/
//		var endOfChampName=html.indexOf("'", startOfChampName);
//		activePos=endOfChampName;
//		
//		/*Get name and add it to the data*/
//		var champAccessName=html.substring(startOfChampName, endOfChampName);
//		data=data.concat(champAccessName+"/");
//		
//		/*Find the start of the champion's per*/
//		var startOfChampPer=html.indexOf("width:", activePos)+"width:".length;
//		
//		/*Find the end of the champion's per*/
//		var endOfChampPer=html.indexOf("%", startOfChampPer);
//		activePos=endOfChampPer;
//		
//		/*Get per and add it to the data*/
//		var champPer=html.substring(startOfChampPer, endOfChampPer);
//		data=data.concat(champPer+"/");
//	}
//	
//	return data;
//}



/*Timout function*/
function sleep(milliseconds)
{
	let start = new Date().getTime();
	for (let i = 0; i < 1e7; i++)
	{
		if ((new Date().getTime() - start) > milliseconds)
			return Promise.resolve();;
	}
}


function mySetInterval(fn, ms)
{
	if(!functionRunning)
	{
		functionRunning = true;
		fn().then(functionRunning = false);
		setTimeout(() => mySetInterval(fn, ms), ms);
	}
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




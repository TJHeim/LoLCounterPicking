/*Create the hyperlink that sends you back to the main page and refresh source*/
function onBodyLoad()
{
	var promise = refreshCounterSourceCode()
	promise.then(doNothing());
}

function doNothing()
{console.log("Back to Base Page")}

function sendBackToBasePage()
{
	var a=document.createElement("a");
	a.setAttribute("href", "https://tjheim.github.io/LoLCounterPicking/WebContent/BasePage.html");
	a.click();
}

/*Grabs all the data from the website and saves it to this computer's files*/
function refreshCounterSourceCode(startIndex)
{
	return new Promise(async function(resolve, reject){
//	if(arguments[0]==undefined)
//		startIndex=0;
	
	var promiseArray=Array(0);
	var dataArray=Array(0);
	
	var counter=0;
//	for(var champ=0; champ<champAccessList.length; champ++)
//	{
//		for(var compareType=0; compareType<compareTypeAccessList.length; compareType++)
//		{
//			for(var champPos=0; champPos<champPosAccessList.length; champPos++)
//			{
//				var activeChamp=champAccessList[champ];
//				var activeCompareType=compareTypeAccessList[compareType];
//				var activeChampPos=champPosAccessList[champPos];
//				if(counter>=startIndex)
//				{
					promiseArray.push(getData("aatrox", "strong", "top"));
					promiseArray.push(getData("akali", "strong", "top"));
//					dataArray.push(await (getData(activeChamp, activeCompareType, activeChampPos)));
//				}
//			}
//		}
//	}
	
	dataArray = Promise.all(promiseArray).then(function(){
					jsonArray=JSON.stringify(dataArray);
					saveAs(new Blob([jsonArray]), "LolCounterSource.json");
					resolve();})
});
}



function getData(activeChamp, activeCompareType, activeChampPos)
{
	return new Promise(function(resolve){
		var html = $.get("https://api.allorigins.ml/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?");
		html.catch((activeChamp, activeCompareType, activeChampPos) => getData(activeChamp, activeCompareType, activeChampPos));
		html.then(html => makeAndReturnData(html))
		.then(data => resolve(data));
	});
//	try
//	{
//		var html = await $.get("https://api.allorigins.ml/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?");
//	}
//	catch(err)
//	{
//		console.log("Failed to get data for vars "+activeChamp+", "+activeCompareType+", "+activeChampPos);
//		return getData(activeChamp, activeCompareType, activeChampPos);
//	}
//	
//	data = await makeAndReturnData(html);
//	return data;
}


function makeAndReturnData(html)
{
	/*Object to contain the collected data*/
	data={champArray: Array(0), perArray: Array(0)};
	
	/*Find the start of the data and trim the html*/
	var startOfData=html.indexOf("<div class='weak-block full'");
	html=html.substring(startOfData).replace(/\s/g, "");
	
	/*Run through the html to find the data and give it to the data Object*/
	var activePos=0;
	while(activePos<html.length)
	{
		/*Find the start of the champion's name and break the loop if there are no more*/
		var startOfChampName=html.indexOf('find=', activePos);
		if(startOfChampName==-1)
			break;
		else
			startOfChampName=startOfChampName+'find="'.length;
		
		/*Find the end of the champion's name*/
		var endOfChampName=html.indexOf("'", startOfChampName);
		activePos=endOfChampName;
		
		/*Get name and add it to the data*/
		var champAccessName=html.substring(startOfChampName, endOfChampName);
		data.champArray.push(champAccessName);
//		data=data.concat(champAccessName+"/");
		
		/*Find the start of the champion's per*/
		var startOfChampPer=html.indexOf("width:", activePos)+"width:".length;
		
		/*Find the end of the champion's per*/
		var endOfChampPer=html.indexOf("%", startOfChampPer);
		activePos=endOfChampPer;
		
		/*Get per and add it to the data*/
		var champPer=html.substring(startOfChampPer, endOfChampPer);
		data.perArray.push(champPer);
//		data=data.concat(champPer+"/");
	}
	
	return Promise.resolve(data);	
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
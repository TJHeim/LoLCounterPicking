/*All access and name lists*/
const champList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho"+"'"+"gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai"+"'"+"Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha"+"'"+"Zix", "Kindred", "Kled", "Kog"+"'"+"Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek"+"'"+"Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel"+"'"+"Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champAccessList=["aatrox", "ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "aurelionsol", "azir", "bard", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "kaisa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred", "kled", "kogmaw", "leblanc", "leesin", "leona", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "masteryi", "missfortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "quinn", "rakan", "rammus", "reksai", "renekton", "rengar", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "syndra", "tahmkench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vi", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xinzhao", "yasuo", "yorick", "zac", "zed", "ziggs", "zilean", "zoe", "zyra"];
const champPosList=["", "Top", "Mid", "Bot", "Sup", "Jg"];
const champPosAccessList=["general", "top", "mid", "bottom", "jungle"];
const champPosMapList=["general", "top", "mid", "bottom", "bottom", "jungle"];

const champsPerTeam=5;

/*Variables to set up BasePage.html*/
const pixelsBeforeStartofBlocks=40;
const pixelsBetweenChampAndPosBlocks=25;
const pixelsBetweenChampBlocks=70;

/*Holds the champs and the percentages for calculation*/
var summonerChampSelections=Array(0);
var summonerChampTotalPers=Array(0);
var summonerTotalDataPoints=Array(0);
var summonerChampFinalPers=Array(0);


			
/*Create necessary elements in the BasePage.html*/
function onBodyLoad()
{
	$("#tabsDiv").css("width", $("#choicesDiv").width()+6);
	
	const teamArray=["ally", "enemy"];
	const teamArrayUppercased=["Ally", "Enemy"];
	
	for(var summonerBlock=1; summonerBlock<=champsPerTeam; summonerBlock++)
	{
		/*Create an allyChamp and an enemyChamp block*/
		for(var team=0; team<teamArray.length; team++)
		{
			/*Initiate the p and select elements*/
			var champBlock=document.createElement("p");
			var champSelect=document.createElement("select");
			
			/*Set the id and class of all elements*/
			var teamName=teamArray[team];
			champBlock.setAttribute("id", teamName+"ChampBlock"+summonerBlock);
			champBlock.setAttribute("class", teamName+"Block");
			champSelect.setAttribute("id", teamName+"ChampSelect"+summonerBlock);
			champSelect.setAttribute("class", teamName+"ChampSelect");
			
			/*Set the position of the block*/
			champBlock.setAttribute("style", "top:"+(pixelsBeforeStartofBlocks+pixelsBetweenChampAndPosBlocks*(summonerBlock-1)+pixelsBetweenChampBlocks*(summonerBlock-1))+"px")
			
			/*Add the blank option to the champ select tag*/
			var champOption=document.createElement("option");
			champOption.setAttribute("value", "");
			champSelect.appendChild(champOption);

			/*Add the options to the champ select tag*/
			for(var champ=0; champ<champList.length; champ++)
			{
				champOption=document.createElement("option");
				champOption.setAttribute("value", champAccessList[champ]);
				champOption.innerHTML=champList[champ];
				champSelect.appendChild(champOption);
			}
			
			/*Append the contents of the block*/
			champBlock.innerHTML=teamArrayUppercased[team]+" Champion: ";
			champBlock.appendChild(champSelect);
			
			/*Add the showSelections buttons*/
			if(teamArray[team]=="ally")
			{
				var showSelectionsButton=document.createElement("input");
				showSelectionsButton.setAttribute("type", "button");
				showSelectionsButton.setAttribute("id", "showSelectionsButton"+summonerBlock)
				showSelectionsButton.setAttribute("class", "showSelectionsButton")
				showSelectionsButton.setAttribute("value", "Show Selections");
				showSelectionsButton.setAttribute("style", "position: relative; top: 10px; left: 5px")
				champBlock.appendChild(showSelectionsButton);
			}
			
			
			/*Append the block to the body*/
			document.body.appendChild(champBlock);
		}
		
		/*Create an allyPos and an enemyPos block*/
		for(var team=0; team<teamArray.length; team++)
		{
			/*Initiate the p and select elements*/
			var posBlock=document.createElement("p");
			var posSelect=document.createElement("select");
			
			/*Set the id and class of all elements*/
			var teamName=teamArray[team];
			posBlock.setAttribute("id", teamName+"PosBlock"+summonerBlock);
			posBlock.setAttribute("class", teamName+"Block");
			posSelect.setAttribute("id", teamName+"PosSelect"+summonerBlock);
			posSelect.setAttribute("class", teamName+"PosSelect");
			
			/*Set the position of the block*/
			posBlock.setAttribute("style", "top:"+(pixelsBeforeStartofBlocks+pixelsBetweenChampAndPosBlocks*summonerBlock+pixelsBetweenChampBlocks*(summonerBlock-1))+"px")
			
			/*Add the options to the pos select tag*/
			for(var champPos=0; champPos<champPosList.length; champPos++)
			{
				posOption=document.createElement("option");
				posOption.setAttribute("value", champPosAccessList[champPos]);
				posOption.innerHTML=champPosList[champPos];
				posSelect.appendChild(posOption);
			}
			
			/*Append the contents of the block*/
			posBlock.innerHTML=teamArrayUppercased[team]+" Position: ";
			posBlock.appendChild(posSelect);
			
			/*Append the block to the body*/
			document.body.appendChild(posBlock);
		}
	}
}








/*Grabs all the data from the website and saves it to this computer's files*/
function refreshCounterSourceCode(startIndex)
{
	const compareTypeList=["Strong", "Weak", "Even", "Well"];
	const compareTypeAccessList=["strong", "weak", "even", "good"];
	
	if(arguments[0]==undefined)
		arguments[0]=0;
	
	var counter=0;
	for(var champ=0; champ<champAccessList.length; champ++)
	{
		for(var compareType=0; compareType<compareTypeAccessList.length; compareType++)
		{
			for(var champPos=0; champPos<champPosAccessList.length; champPos++)
			{
				var activeChamp=champAccessList[champ];
				var activeCompareType=compareTypeAccessList[compareType];
				var activeChampPos=champPosAccessList[champPos];
				if(counter>=startIndex)
					$.get("https://allorigins.me/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?")
					.then(html => collectDataAndSaveFile(html, activeChamp, activeCompareType, activeChampPos));
			}
		}
	}
}


/*Collect the data from the given html and save it as a file on this computer*/
function collectDataAndSaveFile(html, activeChamp, activeCompareType, activeChampPos)
{
	var data=collectData(html);
	
	saveAs(new Blob([data]), activeChamp+"!"+activeCompareType+"!"+activeChampPos+".txt");
}



/*Collect the data from the given html file*/
function collectData(html)
{
	/*String to contain the collected data*/
	var data="";
	
	/*Find the start and end of the data and trim the html*/
	var startOfData=html.indexOf("<div class='weak-block full'");
	html=html.substring(startOfData).replace(/\s/g, "");
	
	/*Run through the html to find the data and give it to the data var*/
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
		data=data.concat(champAccessName+"/");
		
		/*Find the start of the champion's per*/
		var startOfChampPer=html.indexOf("width:", activePos)+"width:".length;
		
		/*Find the end of the champion's per*/
		var endOfChampPer=html.indexOf("%", startOfChampPer);
		activePos=endOfChampPer;
		
		/*Get per and add it to the data*/
		var champPer=html.substring(startOfChampPer, endOfChampPer);
		data=data.concat(champPer+"/");
	}
	
	return data;
}



/*Calculate the percentages for each unidentified ally*/
function calculateAndPrintPercentages()
{
	summonerChampSelections=Array(0);
	summonerChampTotalPers=Array(0);
	summonerTotalDataPoints=Array(0);
	
	var allyChamps=Array(0);
	var enemyChamps=Array(0);
	
	for(var summonerNumber=1; summonerNumber<=champsPerTeam; summonerNumber++)
	{
		if($("#allyChampSelect"+summonerNumber).val()!="")
		{
			allyChamps.push($("#allyChampSelect"+summonerNumber).val());
		}
		
		if($("#enemyChampSelect"+summonerNumber).val()!="")
		{
			enemyChamps.push($("#enemyChampSelect"+summonerNumber).val());
		}
	}
	
	
	for(var summonerNumber=1; summonerNumber<=champsPerTeam; summonerNumber++)
	{
		if($("#allyChampSelect"+summonerNumber).val()=="")
		{
			calculateAndPrintPercentagesForSummoner(summonerNumber, $("#allyPosSelect"+summonerNumber).val(), allyChamps, enemyChamps);
		}
	}
}



/*Calculate the percentages for one summoner*/
function calculateAndPrintPercentagesForSummoner(summonerNumber, champPos, allyChamps, enemyChamps, promise)
{
	/*Calculate from allies*/
	for(var ally=0; ally<allyChamps.length; ally++)
	{
		if(ally==allyChamps.length-1)
		{
			grabDataFromFile(summonerNumber, allyChamps[ally], champPos, "good", true);
		}
			
		
		grabDataFromFile(summonerNumber, allyChamps[ally], champPos, "good", false);
	}
}



/*Grab the percentage data from the specified files*/
function grabDataFromFile(summonerNumber, champ, champPos, compareType, isLastRun)
{
	fetch("https://tjheim.github.io/LoLCounterPicking/WebContent/ChampionCounterSource/"+champ+"!"+compareType+"!"+champPos+".txt")
	.then(response => response.text())
	.then(text => addDataToArraysAndPrint(summonerNumber, text, compareType, isLastRun))
}



/*Add the found data to the arrays*/
function addDataToArraysAndPrint(summonerNumber, text, compareType, isLastRun)
{
	var lastPos=0;
	var textPos=0;
	
	while(textPos<text.length)
	{
		if(text.charAt(textPos)=="/")
		{
			var champ=text.substring(lastPos, textPos);
			lastPos=textPos+1;
			textPos=lastPos;
			
			while(textPos<text.length)
			{
				if(text.charAt(textPos)=="/")
				{
					var champPer=parseInt(text.substring(lastPos, textPos));
					lastPos=textPos+1;
					
					if(!summonerChampSelections.includes(champ))
					{
						summonerChampSelections.push(champ);
						summonerChampTotalPers.push(champPer);
						summonerTotalDataPoints.push(1);
					}
			
					else
					{
						var champPosInArray=summonerChampSelections.indexOf(champ)
						summonerChampTotalPers[champPosInArray]+=champPer;
						summonerTotalDataPoints[champPosInArray]+=1;
					}
					
					break;
				}
				
				textPos++;
			}
		}
		
		textPos++;
	}
	
	if(isLastRun)
	{
		sortAndPrintData(summonerNumber)
	}
}




function sortAndPrintData(summonerNumber)
{
	var data="";
	for(var champ=0; champ<summonerChampSelections.length; champ++)
		data=data.concat(summonerChampSelections[champ]+"/"+Math.round((summonerChampTotalPers[champ]/summonerTotalDataPoints[champ])*10)/10+"/");
	$("#showSelectionsButton"+summonerNumber).attr("data", data);
}




function binarySearch(array, champ, low, high)
{
  var mid=Math.floor((low+high)/2);
  if(low>high)
    return -1;
  else if(array[mid]==champ)
    return mid;
  else if(array[mid]>champ)
    return binarySearch(array, champ, low, mid-1);
  else if(array[mid]<champ)
    return binarySearch(array, champ, mid+1, high);
}
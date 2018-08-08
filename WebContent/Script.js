/*All access and name lists*/
const champList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champAccessList=["aatrox", "ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "aurelionsol", "azir", "bard", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "kaisa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred", "kled", "kogmaw", "leblanc", "leesin", "leona", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "masteryi", "missfortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "quinn", "rakan", "rammus", "reksai", "renekton", "rengar", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "syndra", "tahmkench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vi", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xinzhao", "yasuo", "yorick", "zac", "zed", "ziggs", "zilean", "zoe", "zyra"];
const champPosList=["", "Top", "Mid", "Bot", "Sup", "Jg"];
const champPosAccessList=["general", "top", "mid", "bottom", "jungle"];
const champPosMapList=["general", "top", "mid", "bottom", "bottom", "jungle"];

const champTopList=["Aatrox", "Amumu", "Camille", "Cho'Gath", "Darius", "Diana", "Dr. Mundo", "Ekko", "Fiora", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Illaoi", "Irelia", "Ivern", "Jarvan IV", "Jax", "Jayce", "Jhin", "Kai'Sa", "Karma", "Kayle", "Kennen", "Kled", "Lee Sin", "Malphite", "Maokai", "Master Yi", "Nasus", "Nautilus", "Nunu", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Rammus", "Renekton", "Riven", "Rumble", "Sejuani", "Shen", "Shyvana", "Singed", "Sion", "Swain", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Urgot", "Vi", "Viktor", "Wukong", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed"];
const champTopAccessList=["aatrox", "amumu", "camille", "chogath", "darius", "diana", "drmundo", "ekko", "fiora", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "illaoi", "irelia", "ivern", "jarvaniv", "jax", "jayce", "jhin", "kaisa", "karma", "kayle", "kennen", "kled", "leesin", "malphite", "maokai", "masteryi", "nasus", "nautilus", "nunu", "olaf", "ornn", "pantheon", "poppy", "quinn", "rammus", "renekton", "riven", "rumble", "sejuani", "shen", "shyvana", "singed", "sion", "swain", "tahmkench", "teemo", "trundle", "tryndamere", "urgot", "vi", "viktor", "wukong", "xinzhao", "yasuo", "yorick", "zac", "zed"];
const champMidList=["Ahri", "Akali", "Anivia", "Annie", "Aurelion Sol", "Azir", "Brand", "Cassiopeia", "Cho'Gath", "Corki", "Diana", "Ekko", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gragas", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Jax", "Jhin", "Kai'Sa", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "LeBlanc", "Lissandra", "Lux", "Malzahar", "Master Yi", "Mordekaiser", "Morgana", "Nidalee", "Nunu", "Orianna", "Pyke", "Rammus", "Riven", "Ryze", "Swain", "Syndra", "Taliyah", "Talon", "Teemo", "Twisted Fate", "Varus", "Veigar", "Vel'Koz", "Viktor", "Vladimir", "Xerath", "Yasuo", "Zed", "Ziggs", "Zoe", "Zyra"];
const champMidAccessList=["ahri", "akali", "anivia", "annie", "aurelionsol", "azir", "brand", "cassiopeia", "chogath", "corki", "diana", "ekko", "fiddlesticks", "fiora", "fizz", "galio", "gragas", "heimerdinger", "illaoi", "irelia", "ivern", "jax", "jhin", "kaisa", "karma", "karthus", "kassadin", "katarina", "kayle", "kennen", "leblanc", "lissandra", "lux", "malzahar", "master Yi", "mordekaiser", "morgana", "nidalee", "nunu", "orianna", "pyke", "rammus", "riven", "ryze", "swain", "syndra", "taliyah", "talon", "teemo", "twistedfate", "varus", "veigar", "velkoz", "viktor", "vladimir", "xerath", "yasuo", "zed", "ziggs", "zoe", "zyra"];
const champBotList=["Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Kennen", "Kog'Maw", "Lucian", "Miss Fortune", "Quinn", "Sivir", "Teemo", "Tristana", "Twitch", "Varus", "Vayne", "Xayah"];
const champBotAccessList=["ashe", "caitlyn", "draven", "ezreal", "jhin", "jinx", "kaisa", "kalista", "kennen", "kogmaw", "lucian", "missfortune", "quinn", "sivir", "teemo", "tristana", "twitch", "varus", "vayne", "xayah"];
const champSupList=["Alistar", "Amumu", "Anivia", "Bard", "Blitzcrank", "Brand", "Braum", "Fiddlesticks", "Galio", "Heimerdinger", "Ivern", "Janna", "Karma", "Karthus", "Kayle", "Leona", "Lulu", "Lux", "Morgana", "Nami", "Nautilus", "Poppy", "Pyke", "Rakan", "Ryze", "Shen", "Sona", "Soraka", "Syndra", "Tahm Kench", "Taric", "Thresh", "Veigar", "Vel'Koz", "Viktor", "Vladimir", "Xerath", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champSupAccessList=["alistar", "amumu", "anivia", "bard", "blitzcrank", "brand", "braum", "fiddlesticks", "galio", "heimerdinger", "ivern", "janna", "karma", "karthus", "kayle", "leona", "lulu", "lux", "morgana", "nami", "nautilus", "poppy", "pyke", "rakan", "ryze", "shen", "sona", "soraka", "syndra", "tahmkench", "taric", "thresh", "veigar", "velkoz", "viktor", "vladimir", "xerath", "ziggs", "zilean", "zoe", "zyra"];
const champJgList=["Akali", "Amumu", "Cho'Gath", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Fiora", "Fizz", "Gnar", "Graves", "Hecarim", "Ivern", "Jax", "Kai'Sa", "Katarina", "Kayn", "Kha'Zix", "Kindred", "Kled",  "Lee Sin", "Maokai", "Master Yi", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Ornn", "Pantheon", "Pyke", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Sejuani", "Shaco", "Shyvana", "Singed", "Sion", "Trundle", "Tryndamere", "Twisted Fate", "Udyr", "Urgot", "Vi", "Volibear", "Warwick", "Wukong", "Xin Zhao", "Zac", "Zed"]
const champJgAccessList=["akali", "amumu", "chogath", "diana", "ekko", "elise", "evelynn", "fiddlesticks", "fiora", "fizz", "gnar", "graves", "hecarim", "ivern", "jax", "kaisa", "katarina", "kayn", "khazix", "kindred", "kled",  "leesin", "maokai", "masteryi", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "ornn", "pantheon", "pyke", "rammus", "reksai", "renekton", "rengar", "riven", "sejuani", "shaco", "shyvana", "singed", "sion", "trundle", "tryndamere", "twistedfate", "udyr", "urgot", "vi", "volibear", "warwick", "wukong", "xinzhao", "zac", "zed"]

const champsPerTeam=5;

/*Variables to set up BasePage.html*/
const pixelsBeforeStartofBlocks=40;
const pixelsBetweenChampAndPosBlocks=25;
const pixelsBetweenChampBlocks=70;

/*Holds the champs and the percentages for calculation*/
var summonerChampSelections=Array(0);
var summonerChampTotalPers=Array(0);
var summonerTotalDataPoints=Array(0);


			
/*Create necessary elements in the BasePage.html*/
function onBodyLoad()
{
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
				showSelectionsButton.setAttribute("style", "position: relative; top: 10px; left: 10px")
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
				posOption.setAttribute("value", champPosMapList[champPos]);
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*Empty the data arrays*/
function resetDataArrays()
{
	summonerChampSelections=Array(0);
	summonerChampTotalPers=Array(0);
	summonerTotalDataPoints=Array(0);
}



/*Calculate the percentages for each unidentified ally*/
function calculateAndPrintPercentages()
{
	allyChamps=Array(0);
	enemyChamps=Array(0);
	allyPos=Array(0);
	enemyPos=Array(0);
	
	/*Find all champs and their pos on each team*/
	for(var summonerNumber=1; summonerNumber<=champsPerTeam; summonerNumber++)
	{
		if($("#allyChampSelect"+summonerNumber).val()!="")
		{
			allyChamps.push($("#allyChampSelect"+summonerNumber).val());
			allyPos.push($("#allyPosSelect"+summonerNumber).val())
		}
		
		if($("#enemyChampSelect"+summonerNumber).val()!="")
		{
			enemyChamps.push($("#enemyChampSelect"+summonerNumber).val());
			enemyPos.push($("#enemyPosSelect"+summonerNumber).val())
		}
	}
	
	/*Calculate percentages for all empty summoners*/
	for(var summonerNumber=1; summonerNumber<=champsPerTeam; summonerNumber++)
	{
		if($("#allyChampSelect"+summonerNumber).val()=="")
		{
			calculateAndPrintPercentagesForSummoner(summonerNumber, $("#allyPosSelect"+summonerNumber).val());
		}
	}
}



/*Calculate the percentages for one summoner*/
function calculateAndPrintPercentagesForSummoner(summonerNumber, champPos)
{
	if(champPos=="general")
		grabAllDataAndPrint(summonerNumber, champPos, champList, champAccessList);
	else if(champPos=="top")
		grabAllDataAndPrint(summonerNumber, champPos, champTopList, champTopAccessList);
	else if(champPos=="mid")
		grabAllDataAndPrint(summonerNumber, champPos, champMidList, champMidAccessList);
	else if(champPos=="bottom")
	{
		if($("#allyPosSelect"+summonerNumber).text()=="Bot")
			grabAllDataAndPrint(summonerNumber, champPos, champBotList, champBotAccessList);
		else if($("#allyPosSelect"+summonerNumber).text()=="Sup")
			grabAllDataAndPrint(summonerNumber, champPos, champSupList, champSupAccessList);
	}
	else if(champPos=="jungle")
		grabAllDataAndPrint(summonerNumber, champPos, champJgList, champJgAccessList);
}




function grabAllDataAndPrint(summonerNumber, champPos, champsAtPosList, champsAtPosAccessList)
{
	/*Calculate Good*/
	resetDataArrays()
	
	/*Calculate "Works Well With" from allies*/
	for(var ally=0; ally<allyChamps.length; ally++)
	{
		grabDataAndPrint(summonerNumber, allyChamps[ally], "general", "good", champsAtPosList, champsAtPosAccessList, false);
	}
	
	/*Calculate "Weak Against" for all enemies in general and the enemy at this ally's position*/
	var enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
	if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
	{
		for(var enemy=0; enemy<enemyChamps.length; enemy++)
		{
			grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList, false);
		}
		
		grabDataAndPrint(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "weak", champsAtPosList, champsAtPosAccessList, true);
	}
	
	/*Else Calculate only "Weak Against" for all enemies in general*/
	else
	{
		for(var enemy=0; enemy<enemyChamps.length; enemy++)
		{
			if(enemy==enemyChamps.length-1)
			{
				grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList, true);
				break;
			}
				
			grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList, false);
		}
	}
		
	
	
	/*Calculate Fair*/
	resetDataArrays()
	
	/*Calculate "Goes Even With" for all enemies in general and the enemy at this ally's position*/
	enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
	if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
	{
		for(var enemy=0; enemy<enemyChamps.length; enemy++)
		{
			grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "even", champsAtPosList, champsAtPosAccessList, false);
		}
		
		grabDataAndPrint(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "even", champsAtPosList, champsAtPosAccessList, true);
	}
	
	/*Else Calculate only "Goes Even With" for all enemies in general*/
	else
	{
		for(var enemy=0; enemy<enemyChamps.length; enemy++)
		{
			if(enemy==enemyChamps.length-1)
			{
				grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "even", champsAtPosList, champsAtPosAccessList, true);
				break;
			}
				
			grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "even", champsAtPosList, champsAtPosAccessList, false);
		}
	}
	
	
	/*Calculate Bad*/
	resetDataArrays()
	
	/*Calculate "Strong Against" for all enemies in general and the enemy at this ally's position*/
	enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
	if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
	{
		for(var enemy=0; enemy<enemyChamps.length; enemy++)
		{
			grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "strong", champsAtPosList, champsAtPosAccessList, false);
		}
		
		grabDataAndPrint(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "strong", champsAtPosList, champsAtPosAccessList, true);
	}
	
	/*Else Calculate only "Strong Against" for all enemies in general*/
	else
	{
		for(var enemy=0; enemy<enemyChamps.length; enemy++)
		{
			if(enemy==enemyChamps.length-1)
			{
				grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "strong", champsAtPosList, champsAtPosAccessList, true);
				break;
			}
				
			grabDataAndPrint(summonerNumber, enemyChamps[enemy], "general", "strong", champsAtPosList, champsAtPosAccessList, false);
		}
	}
}



/*Grab the percentage data from the specified files*/
function grabDataAndPrint(summonerNumber, champ, champPos, compareType, champsAtPosList, champsAtPosAccessList, createBlocks)
{
	fetch("https://tjheim.github.io/LoLCounterPicking/WebContent/ChampionCounterSource/"+champ+"!"+compareType+"!"+champPos+".txt")
	.then(response => response.text())
	.then(text => addDataToArraysAndPrint(summonerNumber, champPos, compareType, champsAtPosList, champsAtPosAccessList, text, createBlocks))
}



/*Add the found data to the arrays*/
function addDataToArraysAndPrint(summonerNumber, champPos, compareType, champsAtPosList, champsAtPosAccessList, text, createBlocks)
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
					
					if(summonerChampSelections.includes(champ))
					{
						var champPosInArray=summonerChampSelections.indexOf(champ)
						summonerChampTotalPers[champPosInArray]+=champPer;
						summonerTotalDataPoints[champPosInArray]+=1;
					}
					
					else if(champsAtPosAccessList.includes(champ))
					{
						summonerChampSelections.push(champ);
						summonerChampTotalPers.push(champPer);
						summonerTotalDataPoints.push(1);
					}
					
					break;
				}
				
				textPos++;
			}
		}
		
		textPos++;
	}
	
	if(createBlocks)
	{
		if(compareType=="good" || compareType=="weak")
			sortAndPrintData(summonerNumber, "Good", champsAtPosList, champsAtPosAccessList)
		if(compareType=="even")
			sortAndPrintData(summonerNumber, "Fair", champsAtPosList, champsAtPosAccessList)
		if(compareType=="strong")
			sortAndPrintData(summonerNumber, "Bad", champsAtPosList, champsAtPosAccessList)
	}
}




function sortAndPrintData(summonerNumber, dataType, champsAtPosList, champsAtPosAccessList)
{
	/*Find the average pers for each champ*/
	var summonerChampFinalPers=Array(0)
	for(var champ=0; champ<summonerChampFinalPers.length; champ++)
	{
		summonerChampFinalPers.push(summonerChampTotalPers[champ]/summonerTotalDataPoints[champ]);
	}
	
	/*Sort the data largest first*/
	for(var i=0; i<summonerChampSelections.length-1; i++)
	{
		var maxIndex=i;
		for(var j=i+1; j<summonerChampSelections.length; j++)
		{
			if(summonerChampFinalPers[j]>summonerChampFinalPers[maxIndex])
				maxIndex==j;
		}
		
		var tempChamp=summonerChampSelections[i];
		var tempPer=summonerChampFinalPers[i];
		summonerChampSelections[i]=summonerChampSelections[maxIndex];
		summonerChampFinalPers[i]=summonerChampPers[maxIndex];
		summonerChampSelections[maxIndex]=tempChamp;
		summonerChampFinalPers[maxIndex]=tempPer;
	}
	
	
	for(var ranking=0; ranking<summonerChampSelections.length; ranking++)
	{
		var champ=champsAtPosList[champsAtPosAccessList.indexOf(summonerChampSelections[ranking])];
		var per=summonerChampFinalPers[ranking];
		$("#choicesDiv").append('<button class="championBlock" summonerNumber="'+summonerNumber+'" dataType="'+dataType+'" ranking="'+ranking+'"></button>'+
													'<div class="championBlock" style="width:'+per+'%">'+champ+' '+per+'%</div>'+
								'</button>');
	}
}
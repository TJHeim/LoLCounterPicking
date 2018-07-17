const champList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho"+"'"+"gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai"+"'"+"Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha"+"'"+"Zix", "Kindred", "Kled", "Kog"+"'"+"Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek"+"'"+"Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel"+"'"+"Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champAccessList=["aatrox", "ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "aurelionsol", "azir", "bard", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "kaisa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred", "kled", "kogmaw", "leblanc", "lee-sin", "leona", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "masteryi", "missfortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "quinn", "rakan", "rammus", "reksai", "renekton", "rengar", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "syndra", "tahmkench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vi", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xinzhao", "yasuo", "yorick", "zac", "zed", "ziggs", "zilean", "zoe", "zyra"];
const champPosList=["", "Top", "Mid", "Bot", "Sup", "Jg"];
const champPosAccessList=["general", "top", "mid", "bottom", "jungle"];
const champPosMapList=["general", "top", "mid", "bottom", "bottom", "jungle"];

const champsPerTeam=5;
const pixelsBeforeStartofBlocks=40;
const pixelsBetweenChampAndPosBlocks=25;
const pixelsBetweenChampBlocks=70;

var websiteHTMLArray=Array(0);

var summoner1Champs=Array(0);
var summoner1Pers=Array(0);
var summoner2Champs=Array(0);
var summoner2Pers=Array(0);
var summoner3Champs=Array(0);
var summoner3Pers=Array(0);
var summoner4Champs=Array(0);
var summoner4Pers=Array(0);
var summoner5Champs=Array(0);
var summoner5Pers=Array(0);

var grabHTML=function(counter, activeChamp, activeCompareType, activeChampPos){$.get("https://allorigins.me/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?", function(html){websiteHTMLArray.push(html);});}
var runCollectDataAndSaveFile=function(counter, activeChamp, activeCompareType, activeChampPos){collectDataAndSaveFile(websiteHTMLArray[counter], activeChamp, activeCompareType, activeChampPos);}

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




function refreshCounterSourceCode(startIndex)
{
	runThroughAccessLists(grabHTML, startIndex);
}

function collectDataFiles(startIndex)
{
	runThroughAccessLists(runCollectDataAndSaveFile, startIndex);
}




function runThroughAccessLists(myFunction, startIndex)
{
	const compareTypeList=["Strong", "Weak", "Even", "Well"];
	const compareTypeAccessList=["strong", "weak", "even", "good"];
	
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
					myFunction.call(undefined, counter-startIndex, activeChamp, activeCompareType, activeChampPos);
				
				counter++;
			}
		}
	}
}




function collectDataAndSaveFile(html, activeChamp, activeCompareType, activeChampPos)
{
	var data=collectData(html);
	
	saveAs(new Blob([data]), activeChamp+"!"+activeCompareType+"!"+activeChampPos+".txt");
}




function collectData(html)
{
	/*String to contain the collected data*/
	var data="";
	
	/*Find the start and end of the data and trim the html*/
	var startOfData=html.indexOf("<div class='weak-block full'");
	html=html.substring(startOfData, /*endOfData*/).replace(/\s/g, "");
	
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
		data=data.concat(champAccessName);
		
		/*Find the start of the champion's per*/
		var startOfChampPer=html.indexOf("width:", activePos)+"width:".length;
		
		/*Find the end of the champion's per*/
		var endOfChampPer=html.indexOf("%", startOfChampPer);
		activePos=endOfChampPer;
		
		/*Get per and add it to the data*/
		var champPer=html.substring(startOfChampPer, endOfChampPer);
		data=data.concat(champPer);
	}
	
	return data;
}




function calculatePercentages()
{
	var allyChamps=Array(0);
	var enemyChamps=Array(0);
	
	for(var summonerNumber=1; summonerNumber<=champsPerTeam; summonerNumber++)
	{
		if($("#allyChampSelect"+summonerNumber).val()!="")
		{
			allyChamps.append($("#allyChampSelect"+summonerNumber).val());
		}
		
		if($("#enemyChampSelect"+summonerNumber).val()!="")
		{
			enemyChamps.append($("#enemyChampSelect"+summonerNumber).val());
		}
	}
	
	
	for(var summonerNumber=1; summonerNumber<=champsPerTeam; summonerNumber++)
	{
		if($("#allyChampSelect"+summonerNumber).val()=="")
		{
			calculatePercentagesForSummoner(summonerNumber, $("#allyPosSelect"+summonerNumber).val(), allyChamps, enemyChamps)
		}
	}
}




function calculatePercentagesForSummoner(summonerNumber, champPos, allyChamps, enemyChamps)
{
	/*Calculate from allies*/
	for(var ally=0; ally<allyChamps.length; ally++)
	{
			
	}
}




function grabDataFromFile(champ, champPos, compareType)
{
	var data;
	fetch("https://tjheim.github.io/LoLCounterPicking/WebContent/ChampionCounterSource/"+champ+"!"+compareType+"!"+champPos+".txt")
	  .then(response => response.text())
	  .then(text => data=text);
	
	return data;
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
//$("#btn-save").click( function() {
//  var text = $("#textarea").val();
//  var filename = $("#input-fileName").val()
//  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
//  saveAs(blob, filename+".txt");
//});

const champList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho"+"'"+"gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai"+"'"+"Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha"+"'"+"Zix", "Kindred", "Kled", "Kog"+"'"+"Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek"+"'"+"Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel"+"'"+"Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champAccessList=["aatrox", "ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "aurelionsol", "azir", "bard", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "kaisa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred", "kled", "kogmaw", "leblanc", "lee-sin", "leona", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "masteryi", "missfortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "quinn", "rakan", "rammus", "reksai", "renekton", "rengar", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "syndra", "tahmkench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vi", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xinzhao", "yasuo", "yorick", "zac", "zed", "ziggs", "zilean", "zoe", "zyra"];
const champPosList=["", "Top", "Mid", "Bot", "Sup", "Jg"]
const champPosAccessList=["general", "top", "mid", "bottom", "bottom", "jungle"]

function onBodyLoad()
{
	const champsPerTeam=5;
	const teamArray=["ally", "enemy"];
	const teamArrayUppercased=["Ally", "Enemy"];
	const pixelsBeforeStartofBlocks=40;
	const pixelsBetweenChampAndPosBlocks=25;
	const pixelsBetweenChampBlocks=70;
	
	for(var atChampBlock=1; atChampBlock<=champsPerTeam; atChampBlock++)
	{
		/*Create an allyChamp and an enemyChamp block*/
		for(var team=0; team<teamArray.length; team++)
		{
			/*Initiate the p and select elements*/
			var champBlock=document.createElement("p");
			var champSelect=document.createElement("select");
			
			/*Set the id and class of all elements*/
			var teamName=teamArray[team];
			champBlock.setAttribute("id", teamName+"ChampBlock"+atChampBlock);
			champBlock.setAttribute("class", teamName+"Block");
			champSelect.setAttribute("id", teamName+"ChampSelect"+atChampBlock);
			champSelect.setAttribute("class", teamName+"ChampSelect");
			
			/*Set the position of the block*/
			champBlock.setAttribute("style", "top:"+(pixelsBeforeStartofBlocks+pixelsBetweenChampAndPosBlocks*(atChampBlock-1)+pixelsBetweenChampBlocks*(atChampBlock-1))+"px")
			
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
			posBlock.setAttribute("id", teamName+"PosBlock"+atChampBlock);
			posBlock.setAttribute("class", teamName+"Block");
			posSelect.setAttribute("id", teamName+"PosSelect"+atChampBlock);
			posSelect.setAttribute("class", teamName+"PosSelect");
			
			/*Set the position of the block*/
			posBlock.setAttribute("style", "top:"+(pixelsBeforeStartofBlocks+pixelsBetweenChampAndPosBlocks*atChampBlock+pixelsBetweenChampBlocks*(atChampBlock-1))+"px")
			
			/*Append the contents of the block*/
			posBlock.innerHTML=teamArrayUppercased[team]+" Position: ";
			posBlock.appendChild(posSelect);
			
			/*Append the block to the body*/
			document.body.appendChild(posBlock);
		}
	}
}




function refreshCounterSource()
{
	var compareTypeList=["Strong", "Weak", "Even", "Well"];
	var compareTypeAccessList=["strong", "weak", "even", "good"];
	for(var champ=0; champ<champAccessList.length; champ++)
	{
		for(var compareType=0; compareType<compareTypeAccessList.length-2; compareType++)
		{
			for(var champPos=0; champPos<champPosAccessList.length; champPos++)
			{
				var activeChamp=champAccessList[champ];
				var activeCompareType=compareTypeAccessList[compareType];
				var activeChampPos=champPosAccessList[champPos];
				
				$.get("https://allorigins.me/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos), collectDataAndSaveFile(html, activeChamp, activeCompareType, activeChampPos));
			}
		}
	}
	
}




function collectDataAndSaveFile(html, activeChamp, activeCompareType, activeChampPos)
{
	var data=collectData(html);
}




function collectData(html)
{
	/*String to contain the collected data*/
	var data="";
	
	/*Find the start and end of the data and trim the html*/
	var startOfData=html.indexOf("<div class='weak-block full'");
	//var endOfData=findEndOfDiv(html, startOfData, 1);
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



function findEndOfDiv(html, pos, numberOfDivsInside)
{
	if(numberOfDivsInside==0)
		return pos;
	
	var indexOfNextDiv=html.indexOf("div", pos);
	
	if(html.substring(indexOfNextDiv-1, indexOfNextDiv)=="<")
		return findEndOfDiv(html, indexOfNextDiv+"div>".length, numberOfDivsInside+1);
	
	else //if(html.substring(indexOfNextDiv-1, indexOfNextDiv)=="/")
		return findEndOfDiv(html, indexOfNextDiv+"div>".length, numberOfDivsInside-1)
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
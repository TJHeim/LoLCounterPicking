function MakeA()
{
var a=document.createElement("a")
a.innerHTML="Press"
a.setAttribute("href", "https://tjheim.github.io/LoLCounterPicking/WebContent/ChampionCounterSource/annie!weak!mid.txt")
a.setAttribute("download", "test")
document.body.appendChild(a);
}

/*All access and name lists*/
const champList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champAccessList=["aatrox", "ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "aurelionsol", "azir", "bard", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "kaisa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred", "kled", "kogmaw", "leblanc", "leesin", "leona", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "masteryi", "missfortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "quinn", "rakan", "rammus", "reksai", "renekton", "rengar", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "syndra", "tahmkench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vi", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xinzhao", "yasuo", "yorick", "zac", "zed", "ziggs", "zilean", "zoe", "zyra"];
const champPosList=["", "Top", "Mid", "Bot", "Sup", "Jg"];
const champPosAccessList=["general", "top", "mid", "bottom", "jungle"];
const champPosMap={"":"general", "Top":"top", "Mid":"mid", "Bottom":"bottom", "Sup":"bottom", "Jg":"jungle"};

const champImgAccessList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "Kogmaw", "Leblanc", "LeeSin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Reksai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];


const champTopList=["Aatrox", "Amumu", "Camille", "Cho'Gath", "Darius", "Diana", "Dr. Mundo", "Ekko", "Fiora", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Illaoi", "Irelia", "Ivern", "Jarvan IV", "Jax", "Jayce", "Jhin", "Kai'Sa", "Karma", "Kayle", "Kennen", "Kled", "Lee Sin", "Malphite", "Maokai", "Master Yi", "Nasus", "Nautilus", "Nunu", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Rammus", "Renekton", "Riven", "Rumble", "Sejuani", "Shen", "Shyvana", "Singed", "Sion", "Swain", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Urgot", "Vi", "Viktor", "Wukong", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed"];
const champTopAccessList=["aatrox", "amumu", "camille", "chogath", "darius", "diana", "drmundo", "ekko", "fiora", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "illaoi", "irelia", "ivern", "jarvaniv", "jax", "jayce", "jhin", "kaisa", "karma", "kayle", "kennen", "kled", "leesin", "malphite", "maokai", "masteryi", "nasus", "nautilus", "nunu", "olaf", "ornn", "pantheon", "poppy", "quinn", "rammus", "renekton", "riven", "rumble", "sejuani", "shen", "shyvana", "singed", "sion", "swain", "tahmkench", "teemo", "trundle", "tryndamere", "urgot", "vi", "viktor", "wukong", "xinzhao", "yasuo", "yorick", "zac", "zed"];
const champMidList=["Ahri", "Akali", "Anivia", "Annie", "Aurelion Sol", "Azir", "Brand", "Cassiopeia", "Cho'Gath", "Corki", "Diana", "Ekko", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gragas", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Jax", "Jhin", "Kai'Sa", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "LeBlanc", "Lissandra", "Lux", "Malzahar", "Master Yi", "Mordekaiser", "Morgana", "Nidalee", "Nunu", "Orianna", "Pyke", "Rammus", "Riven", "Ryze", "Swain", "Syndra", "Taliyah", "Talon", "Teemo", "Twisted Fate", "Varus", "Veigar", "Vel'Koz", "Viktor", "Vladimir", "Xerath", "Yasuo", "Zed", "Ziggs", "Zoe", "Zyra"];
const champMidAccessList=["ahri", "akali", "anivia", "annie", "aurelionsol", "azir", "brand", "cassiopeia", "chogath", "corki", "diana", "ekko", "fiddlesticks", "fiora", "fizz", "galio", "gragas", "heimerdinger", "illaoi", "irelia", "ivern", "jax", "jhin", "kaisa", "karma", "karthus", "kassadin", "katarina", "kayle", "kennen", "leblanc", "lissandra", "lux", "malzahar", "master Yi", "mordekaiser", "morgana", "nidalee", "nunu", "orianna", "pyke", "rammus", "riven", "ryze", "swain", "syndra", "taliyah", "talon", "teemo", "twistedfate", "varus", "veigar", "velkoz", "viktor", "vladimir", "xerath", "yasuo", "zed", "ziggs", "zoe", "zyra"];
const champBotList=["Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Kennen", "Kog'Maw", "Lucian", "Miss Fortune", "Quinn", "Sivir", "Tristana", "Twitch", "Varus", "Vayne", "Xayah"];
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
var summonerChampSelectionsGood=Array(0);
var summonerChampInitialPersGood=Array(0);
var summonerChampHelpGood=Array(0);

var summonerChampSelectionsFair=Array(0);
var summonerChampInitialPersFair=Array(0);
var summonerChampHelpFair=Array(0);

var summonerChampSelectionsBad=Array(0);
var summonerChampInitialPersBad=Array(0);
var summonerChampHelpBad=Array(0);


var summonerChampFinalPersGood=Array(0);

var summonerChampFinalPersFair=Array(0);

var summonerChampFinalPersBad=Array(0);


			
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
			champBlock.setAttribute("style", "top:"+(pixelsBeforeStartofBlocks+pixelsBetweenChampAndPosBlocks*(summonerBlock-1)+pixelsBetweenChampBlocks*(summonerBlock-1))+"px");
			
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
				var showSelectionsButton=document.createElement("button");
				showSelectionsButton.setAttribute("id", "showSelectionsButton"+summonerBlock);
				showSelectionsButton.setAttribute("class", "showSelectionsButton");
				showSelectionsButton.setAttribute("style", "position: relative; top: -6px; left: 225px");
				showSelectionsButton.setAttribute("summonerNumber", summonerBlock)
				showSelectionsButton.innerHTML = "Show Selections";
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
			
			activateShowSelectionClickListeners();
			activateTabClickListeners();
		}
	}
}




function activateTabClickListeners()
{
	$("button.tab").click(function(){
		var dataType=$(this).html();
		var summonerNumber=$("div#choicesDiv").attr("summonerNumber");
		var color=$(this).css("background-color");
		var endOfFirstColor=color.indexOf(")");
		color=color.substring(0, endOfFirstColor+1);
		var choicesDivColor=$("#choicesDiv").css("background");
		var ChoicesDivEndOfFirstColor=choicesDivColor.indexOf(")");
		choicesDivColor=choicesDivColor.substring(0, endOfFirstColor+1);
		if(color!=choicesDivColor)
		{
			$("button.tab").css("border-bottom-color", "#737373");
			$(this).css("border-bottom-color", color);
			$("div#choicesDiv").css("background", color);
			$("div#choicesDiv").css("border-color", color);
			$("button.championBlock").css({"display": "none", "border-color": "blue"});
			$("button.championBlock[dataType="+dataType+"][summonerNumber="+summonerNumber+"]").css("display", "block");
			$("p#helpText").html("");			
		}
	});	
}




function activateShowSelectionClickListeners()
{
	$("button.showSelectionsButton").click(function(){
		var summonerNumber=$(this).attr("summonerNumber");
		if(summonerNumber!=$("div#choicesDiv").attr("summonerNumber"))
		{
			$("div#choicesDiv").attr("summonerNumber", summonerNumber);
			$("div#choicesDiv").css("display", "inline-block");
			$("button.championBlock").css({"display": "none", "border-color": "blue"});
			if($("button.championBlock[dataType=Good]").length>0)
				$("#tabGood").css("display", "inline");
			if($("button.championBlock[dataType=Fair]").length>0)
				$("#tabFair").css("display", "inline");
			if($("button.championBlock[dataType=Bad]").length>0)
				$("#tabBad").css("display", "inline");
			
			setPrimaryStyleOfChoicesDiv(summonerNumber);
		}
	});
}




function activateChampionBlockClickListeners()
{
	/*Highlight championBlock*/
	$(document).ready(function(){
    	$("button.championBlock").click(function(){
			$("button.championBlock").css("border-color", "blue");
			$(this).css("border-color", "red");
			$("p#helpText").html($(this).attr("help"));
			$("p#helpText").css("display", "block");
		});
	});
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*Grabs all the data from the website and saves it to this computer's files*/
async function refreshCounterSourceCode(startIndex)
{
	const compareTypeList=["Strong", "Weak", "Even", "Well"];
	const compareTypeAccessList=["strong", "weak", "even", "good"];
	
	if(arguments[0]==undefined)
		startIndex=0;
	
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
				{
					collectDataAndSaveFile(activeChamp, activeCompareType, activeChampPos);
				}
					
			}
		}
	}
	
	return Promise.resolve();
}







/*Collect the data at the given indicators and save it as a file on this computer*/
function collectDataAndSaveFile(activeChamp, activeCompareType, activeChampPos)
{
	var html=$.get("https://allorigins.me/get?method=raw&url="+encodeURIComponent("https://lolcounter.com/champions/"+activeChamp+"/"+activeCompareType+"/"+activeChampPos)+"&callback=?");
	html.catch((activeChamp, activeCompareType, activeChampPos) => collectDataAndSaveFile(activeChamp, activeCompareType, activeChampPos));
	html.then(html => collectData(html))
	.then(data => saveAs(new Blob([data]), activeChamp+"!"+activeCompareType+"!"+activeChampPos+".txt"));
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
	summonerChampSelectionsGood=Array(0);
	summonerChampInitialPersGood=Array(0);
	summonerChampHelpGood=Array(0);
	
	summonerChampSelectionsFair=Array(0);
	summonerChampInitialPersFair=Array(0);
	summonerChampHelpFair=Array(0);
	
	summonerChampSelectionsBad=Array(0);
	summonerChampInitialPersBad=Array(0);
	summonerChampHelpBad=Array(0);
}



/*Calculate the percentages for each unidentified ally*/
async function calculateAndPrintPercentages()
{
	$("#choicesDiv").css("display", "none");
	$("#choicesDiv").attr("summonerNumber", "");
	$(".tab").css("display", "none");
	$("button.championBlock").remove();
	$(".showSelectionsButton").css("display", "none");
	$(".showSelectionsButton").attr("display", "no");
	$("p#helpText").css("display", "none");
	
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
		await resetDataArrays();
		
		if($("#allyChampSelect"+summonerNumber).val()=="")
		{
			await calculateAndPrintPercentagesForSummoner(summonerNumber, $("#allyPosSelect"+summonerNumber).val());
		}
		
		await normalizeAllData();
		
		await sortAndPrintAllData(summonerNumber);
	}
	
	$(".showSelectionsButton").each(function(){
		if($(this).attr("display")=="yes")
			$(this).css("display", "block");
	})
	
	activateChampionBlockClickListeners()
}



/*Calculate the percentages for one summoner*/
async function calculateAndPrintPercentagesForSummoner(summonerNumber, champPos)
{
	if(champPos=="general")
	{
		await grabAllDataAndPrint(summonerNumber, champPos, champList, champAccessList);
		return Promise.resolve();
	}
	else if(champPos=="top")
	{
		await grabAllDataAndPrint(summonerNumber, champPos, champTopList, champTopAccessList);
		return Promise.resolve();
	}
	else if(champPos=="mid")
	{
		await grabAllDataAndPrint(summonerNumber, champPos, champMidList, champMidAccessList);
		return Promise.resolve();
	}
	else if(champPos=="bottom")
	{
		if($("#allyPosSelect"+summonerNumber+" option:selected").text()=="Bot")
		{
			await grabAllDataAndPrint(summonerNumber, champPos, champBotList, champBotAccessList);
			return Promise.resolve();
		}
		else if($("#allyPosSelect"+summonerNumber+" option:selected").text()=="Sup")
		{
			await grabAllDataAndPrint(summonerNumber, champPos, champSupList, champSupAccessList);
			return Promise.resolve();
		}
	}
	else if(champPos=="jungle")
	{
		await grabAllDataAndPrint(summonerNumber, champPos, champJgList, champJgAccessList);
		return Promise.resolve();
	}
}



async function grabAllDataAndPrint(summonerNumber, champPos, champsAtPosList, champsAtPosAccessList)
{
	await grabDataAndPrint(summonerNumber, champPos, champsAtPosList, champsAtPosAccessList, "Good");
	await grabDataAndPrint(summonerNumber, champPos, champsAtPosList, champsAtPosAccessList, "Fair");
	await grabDataAndPrint(summonerNumber, champPos, champsAtPosList, champsAtPosAccessList, "Bad");
	return Promise.resolve();
}




async function grabDataAndPrint(summonerNumber, champPos, champsAtPosList, champsAtPosAccessList, dataType)
{
	/*Calculate Good*/
	if(dataType=="Good")
	{
		if(allyChamps.length==0)
		{
			if(enemyChamps.length>0)
			{
				/*Calculate "Weak Against" for all enemies in general and the enemy at this ally's position*/
				var enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
				if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
				{
					for(var enemy=0; enemy<enemyChamps.length; enemy++)
					{
						await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList);
					}
					
					await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "weak", champsAtPosList, champsAtPosAccessList);
					return Promise.resolve();
				}
				
				/*Else Calculate only "Weak Against" for all enemies in general*/
				else
				{
					for(var enemy=0; enemy<enemyChamps.length; enemy++)
					{
						await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList);
					}
					
					return Promise.resolve();
				}
			}
			
			else //if(enemyChamps.length==0)
				return Promise.resolve();
		}
			
		else //if(allyChamps.length>0)
		{
			if(enemyChamps.length==0)
			{
				/*Calculate "Works Well With" from allies*/
				for(var ally=0; ally<allyChamps.length; ally++)
				{
					await grabDataAndAddToArrays(summonerNumber, allyChamps[ally], "general", "good", champsAtPosList, champsAtPosAccessList);
				}
				
				return Promise.resolve();
			}
			
			else //if(enemyChamps.length>0)
			{
				/*Calculate "Works Well With" from allies*/
				for(var ally=0; ally<allyChamps.length; ally++)
				{
					await grabDataAndAddToArrays(summonerNumber, allyChamps[ally], "general", "good", champsAtPosList, champsAtPosAccessList);
				}
				
				/*Calculate "Weak Against" for all enemies in general and the enemy at this ally's position*/
				var enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
				if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
				{
					for(var enemy=0; enemy<enemyChamps.length; enemy++)
					{
						await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList);
					}
					
					await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "weak", champsAtPosList, champsAtPosAccessList);
					return Promise.resolve();
				}
				
				/*Else Calculate only "Weak Against" for all enemies in general*/
				else
				{
					for(var enemy=0; enemy<enemyChamps.length; enemy++)
					{
						await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "weak", champsAtPosList, champsAtPosAccessList);
					}
					
					return Promise.resolve();
				}
			}
		}
	}
	
	
	/*Calculate Fair*/
	else if(dataType=="Fair")
	{
		if(enemyChamps.length>0)
		{
			/*Calculate "Goes Even With" for all enemies in general and the enemy at this ally's position*/
			enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
			if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
			{
				for(var enemy=0; enemy<enemyChamps.length; enemy++)
				{
					await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "even", champsAtPosList, champsAtPosAccessList);
				}
				
				await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "even", champsAtPosList, champsAtPosAccessList);
				return Promise.resolve();
			}
			
			/*Else Calculate only "Goes Even With" for all enemies in general*/
			else
			{
				for(var enemy=0; enemy<enemyChamps.length; enemy++)
				{	
					await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "even", champsAtPosList, champsAtPosAccessList);
				}
				
				return Promise.resolve();
			}
		}
		
		else //if(enemyChamps.length==0)
			return Promise.resolve();
	}
	
	
	/*Calculate Bad*/
	else if(dataType=="Bad")
	{
		if(enemyChamps.length>0)
		{
			/*Calculate "Strong Against" for all enemies in general and the enemy at this ally's position*/
			enemyChampAtSamePosIndex=enemyChamps.indexOf(champPos);
			if(champPos!="general" && enemyChampAtSamePosIndex!=-1)
			{
				for(var enemy=0; enemy<enemyChamps.length; enemy++)
				{
					await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "strong", champsAtPosList, champsAtPosAccessList);
				}
				
				await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemyChampAtSamePosIndex], champPos, "strong", champsAtPosList, champsAtPosAccessList);
				return Promise.resolve();
			}
			
			/*Else Calculate only "Strong Against" for all enemies in general*/
			else
			{
				for(var enemy=0; enemy<enemyChamps.length; enemy++)
				{
					await grabDataAndAddToArrays(summonerNumber, enemyChamps[enemy], "general", "strong", champsAtPosList, champsAtPosAccessList);
				}
				
				return Promise.resolve();
			}
		}
		
		else //if(enemyChamps.length==0)
			return Promise.resolve();
	}
}



/*Grab the percentage data from the specified files*/
async function grabDataAndAddToArrays(summonerNumber, champ, champPos, compareType, champsAtPosList, champsAtPosAccessList)
{
	var response=await fetch("https://tjheim.github.io/LoLCounterPicking/WebContent/ChampionCounterSource/"+champ+"!"+compareType+"!"+champPos+".txt")
	var text=await response.text();
	await addDataToArrays(summonerNumber, champ, champPos, compareType, champsAtPosList, champsAtPosAccessList, text);
	return Promise.resolve();
}



/*Add the found data to the arrays*/
function addDataToArrays(summonerNumber, activeChamp, champPos, compareType, champsAtPosList, champsAtPosAccessList, text)
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
					champPer=(champPer-50)*2;
					
					if(champPer<0)
						champPer=0;
					
					lastPos=textPos+1;
					
					if(compareType=="weak")
					{
						if(summonerChampSelectionsGood.includes(champ))
						{
							var champPosInArray=summonerChampSelectionsGood.indexOf(champ)
							var presentPer=summonerChampInitialPersGood[champPosInArray];
							summonerChampInitialPersGood[champPosInArray]=presentPer+(100-presentPer)*(champPer/100);
							summonerChampHelpGood[champPosInArray]+=", Strong against "+champList[champAccessList.indexOf(activeChamp)];
						}
						
						else if(champsAtPosAccessList.includes(champ))
						{
							summonerChampSelectionsGood.push(champ);
							summonerChampInitialPersGood.push(champPer);
							summonerChampHelpGood.push("Strong against "+champList[champAccessList.indexOf(activeChamp)]);
						}
					}
					
					if(compareType=="good")
					{
						if(summonerChampSelectionsGood.includes(champ))
						{
							var champPosInArray=summonerChampSelectionsGood.indexOf(champ)
							var presentPer=summonerChampInitialPersGood[champPosInArray];
							summonerChampInitialPersGood[champPosInArray]=presentPer+(100-presentPer)*(champPer/100);
							summonerChampHelpGood[champPosInArray]+=", Good with "+champList[champAccessList.indexOf(activeChamp)];
						}
						
						else if(champsAtPosAccessList.includes(champ))
						{
							summonerChampSelectionsGood.push(champ);
							summonerChampInitialPersGood.push(champPer);
							summonerChampHelpGood.push("Good with "+champList[champAccessList.indexOf(activeChamp)]);
						}
					}
					
					else if(compareType=="even")
					{
						if(summonerChampSelectionsFair.includes(champ))
						{
							var champPosInArray=summonerChampSelectionsFair.indexOf(champ)
							var presentPer=summonerChampInitialPersFair[champPosInArray];
							summonerChampInitialPersFair[champPosInArray]=presentPer+(100-presentPer)*(champPer/100);
							summonerChampHelpFair[champPosInArray]+=", Goes even with "+champList[champAccessList.indexOf(activeChamp)];
						}
						
						else if(champsAtPosAccessList.includes(champ))
						{
							summonerChampSelectionsFair.push(champ);
							summonerChampInitialPersFair.push(champPer);
							summonerChampHelpFair.push("Goes even with "+champList[champAccessList.indexOf(activeChamp)]);
						}
					}
					
					if(compareType=="strong")
					{
						if(summonerChampSelectionsFair.includes(champ))
						{
							var champPosInArray=summonerChampSelectionsBad.indexOf(champ)
							var presentPer=summonerChampInitialPersBad[champPosInArray];
							summonerChampInitialPersBad[champPosInArray]=presentPer+(100-presentPer)*(champPer/100);
							summonerChampHelpBad[champPosInArray]+=", Weak against "+champList[champAccessList.indexOf(activeChamp)];
						}
						
						else if(champsAtPosAccessList.includes(champ))
						{
							summonerChampSelectionsBad.push(champ);
							summonerChampInitialPersBad.push(champPer);
							summonerChampHelpBad.push("Weak against "+champList[champAccessList.indexOf(activeChamp)]);
						}
					}
					
					break;
				}
				
				textPos++;
			}
		}
		
		textPos++;
	}
	
	return Promise.resolve();
}




function normalizeAllData()
{
	summonerChampFinalPersGood=summonerChampInitialPersGood;
	summonerChampFinalPersFair=summonerChampInitialPersFair;
	summonerChampFinalPersBad=summonerChampInitialPersBad;
	
	var availableData=Array(0);
	
	if(summonerChampSelectionsGood.length>0)
		availableData.push("good");
	
	if(summonerChampSelectionsFair.length>0)
		availableData.push("fair");
	
	if(summonerChampSelectionsBad.length>0)
		availableData.push("bad");
	
	if(availableData.length>1)
	{
		for(var activeDataTypeIndex=0; activeDataTypeIndex<availableData.length; activeDataTypeIndex++)
		{
			var otherAvailableData=availableData;
			otherAvailableData.splice(activeDataTypeIndex);
			
			for(var dataTypeIndex=0; dataTypeIndex<otherAvailableData.length; datatTypeIndex++)
			{
				var activeDataType=availableData[activeDataTypeIndex];
				var comparingDataType=otherAvailableData[datatTypeIndex];
				
				if(activeDataType=="good")
				{
					if(comparingDataType=="fair")
						normalizeGivenData(summonerChampSelectionsGood, summonerChampFinalPersGood, summonerChampSelectionsFair, summonerChampInitialPersFair);
					
					if(comparingDataType=="bad")
						normalizeGivenData(summonerChampSelectionsGood, summonerChampFinalPersGood, summonerChampSelectionsBad, summonerChampInitialPersBad);
				}
				
				else if(activeDataType=="fair")
				{
					if(comparingDataType=="good")
						normalizeGivenData(summonerChampSelectionsFair, summonerChampFinalPersFair, summonerChampSelectionsGood, summonerChampInitialPersGood);
					
					if(comparingDataType=="bad")
						normalizeGivenData(summonerChampSelectionsFair, summonerChampFinalPersFair, summonerChampSelectionsBad, summonerChampInitialPersBad);
				}
				
				else if(activeDataType=="bad")
				{
					if(comparingDataType=="good")
						normalizeGivenData(summonerChampSelectionsBad, summonerChampFinalPersBad, summonerChampSelectionsGood, summonerChampInitialPersGood);
					
					if(comparingDataType=="fair")
						normalizeGivenData(summonerChampSelectionsBad, summonerChampFinalPersBad, summonerChampSelectionsFair, summonerChampInitialPersFair);
				}
			}
		}
	}
}




function normalizeGivenData(activeSummonerChampSelections, activeSummonerChampFinalPers, comparingSummonerChampSelections, comparingSummonerChampInitialPers)
{
	for(var champIndex=0; champIndex<activeSummonerChampSelection.length; champIndex++)
	{
		var comparingChampIndex=comparingSummonerChampSelections.indexOf(activeSummonerChampSelections[champIndex])
		if(comparingChampIndex>=0)
		{
			var currentPer=activeSummonerChampFinalPers[champIndex];
			activeSummonerChampFinalPers[champIndex]=currentPer-(currentPer/2*(comparingSummonerChampInitialPers[comparingChampIndex]/100));
		}
	}
}




function sortAndPrintAllData(summonerNumber)
{
	if(summonerChampSelectionsGood.length>0 || summonerChampSelectionsFair.length>0 || summonerChampSelectionsBad.length>0)
		$("#showSelectionsButton"+summonerNumber).attr("display", "yes");
	
	if(summonerChampSelectionsGood.length>0)
		sortAndPrintData(summonerNumber, "Good", summonerChampSelectionsGood, summonerChampInitialPersGood, summonerChampHelpGood);
		
	if(summonerChampSelectionsFair.length>0)
		sortAndPrintData(summonerNumber, "Fair", summonerChampSelectionsFair, summonerChampInitialPersFair, summonerChampHelpFair);
	
	if(summonerChampSelectionsBad.length>0)
		sortAndPrintData(summonerNumber, "Bad", summonerChampSelectionsBad, summonerChampInitialPersBad, summonerChampHelpBad);
}




function sortAndPrintData(summonerNumber, dataType, summonerChampSelections, summonerChampPers, summonerChampHelp)
{
	/*Sort the data largest first*/
	for(var i=0; i<summonerChampSelections.length-1; i++)
	{
		var maxIndex=i;
		for(var j=i+1; j<summonerChampSelections.length; j++)
		{
			if(summonerChampPers[j]>summonerChampPers[maxIndex])
				maxIndex=j;
		}
		
		var tempChamp=summonerChampSelections[i];
		var tempPer=summonerChampPers[i];
		var tempHelpText=summonerChampHelp[i];
		summonerChampSelections[i]=summonerChampSelections[maxIndex];
		summonerChampPers[i]=summonerChampPers[maxIndex];
		summonerChampHelp[i]=summonerChampHelp[maxIndex];
		summonerChampSelections[maxIndex]=tempChamp;
		summonerChampPers[maxIndex]=tempPer;
		summonerChampHelp[maxIndex]=tempHelpText;
	}
	
	/*Round the pers for each champ*/
	for(var champ=0; champ<summonerChampSelections.length; champ++)
	{
		var per=Math.round(summonerChampPers[champ]*10)/10;
		
		if(per>0)
			summonerChampPers[champ]=per;
			
		else
		{
			summonerChampSelections.splice(champ, 1);
			summonerChampPers.splice(champ, 1);
			summonerChampHelp.splice(champ, 1);
		}
	}
	
	/*Print the champion blocks*/
	for(var ranking=0; ranking<summonerChampSelections.length; ranking++)
	{
		var champ=champImgAccessList[champAccessList.indexOf(summonerChampSelections[ranking])];
		var per=summonerChampPers[ranking];
		var helpText=summonerChampHelp[ranking];
		
		var choicesDiv=document.getElementById("choicesDiv");
		
		var championBlockButton=document.createElement("button");
		championBlockButton.setAttribute("class", "championBlock");
		championBlockButton.setAttribute("summonerNumber", summonerNumber);
		championBlockButton.setAttribute("dataType", dataType);
		championBlockButton.setAttribute("ranking", ranking);
		championBlockButton.setAttribute("help", helpText);
		
		var championBlockChampImg=document.createElement("div");
		championBlockChampImg.setAttribute("class", "championBlockImg");
		championBlockChampImg.style="background: url(http://ddragon.leagueoflegends.com/cdn/8.12.1/img/champion/"+champ+".png) left/40px 40px";

		var championBlockPercentageBoxDiv=document.createElement("div");
		championBlockPercentageBoxDiv.setAttribute("class", "championBlockPercentageBox");
		
		var championBlockPercentageDiv=document.createElement("div");
		championBlockPercentageDiv.setAttribute("class","championBlockPercentage");
		championBlockPercentageDiv.style="width: "+per+"%;";
		
		championBlockPercentageBoxDiv.appendChild(championBlockPercentageDiv);

		championBlockButton.appendChild(championBlockChampImg);
		championBlockButton.appendChild(championBlockPercentageBoxDiv);

		choicesDiv.appendChild(championBlockButton);
	}
	
	return Promise.resolve();
}




function setPrimaryStyleOfChoicesDiv(summonerNumber)
{
	$("button.tab").css("border-bottom-color", "#737373");
	
	if($("#tabGood").css("display")!="none")
	{
		$("#tabGood").css("border-bottom-color", "lightgreen");
		$("#choicesDiv").css({"background-color":"lightgreen", "border-color":"lightgreen"});
		$("button.championBlock[dataType=Good][summonerNumber="+summonerNumber+"]").css("display", "block");
	}
	
	else if($("#tabFair").css("display")!="none")
	{
		$("#tabFair").css("border-bottom-color", "lightblue");
		$("#choicesDiv").css({"background-color":"lightblue", "border-color":"lightblue"});
		$("button.championBlock[dataType=Fair][summonerNumber="+summonerNumber+"]").css("display", "block");
	}

	else if($("#tabBad").css("display")!="none")
	{
		$("#tabBad").css("border-bottom-color", "pink");
		$("#choicesDiv").css({"background-color":"pink", "border-color":"pink"});
		$("button.championBlock[dataType=Bad][summonerNumber="+summonerNumber+"]").css("display", "block");
	}
}
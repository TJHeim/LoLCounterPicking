/*Create necessary elements in the BasePage.html*/
async function onBodyLoad()
{
	let response = await fetch("https://tjheim.github.io/LoLCounterPicking/WebContent/ChampionCounterSource/LolCounterSource.json");
	let counterDataJson = await response.text();
	counterDataArray = await JSON.parse(counterDataJson);
	
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
				posOption.setAttribute("value", champPosMap[champPosList[champPos]]);
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
			activatePageButtonClickListeners();
		}
	}
}




function activateTabClickListeners()
{
	$("button.tab").off().click(function(){
		var choicesDiv=$("div#choicesDiv");
		var color=$(this).css("background-color");
		var endOfFirstColor=color.indexOf(")");
		color=color.substring(0, endOfFirstColor+1);
		var choicesDivColor=choicesDiv.css("background");
		var ChoicesDivEndOfFirstColor=choicesDivColor.indexOf(")");
		choicesDivColor=choicesDivColor.substring(0, endOfFirstColor+1);
		if(color!=choicesDivColor)
		{
			var dataType=$(this).html();
			var summonerNumber=choicesDiv.attr("summonerNumber");
			
			$("button.tab").css("border-bottom-color", "#737373");
			$(this).css("border-bottom-color", color);
			
			$("button.page").css("display", "none");
			$("div#choicesDiv").attr("page", 0);
			if($("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Good][page=1]").length>0)
			{
				var rightPageButton=$("button.page#right");
				rightPageButton.css("display", "block");
				rightPageButton.html("Page 2");
			}
			
			choicesDiv.css("background", color);
			choicesDiv.css("border-color", color);
			
			$("button.championBlock").css({"display": "none", "border-color": "blue"});
			$("button.championBlock[summonerNumber="+summonerNumber+"][dataType="+dataType+"][page=0]").css("display", "block");
			
			resetHelp();
		}
	});	
}




function activatePageButtonClickListeners()
{
	$("button.page").off().click(function(){
		var page=parseInt($(this).html().substring(5))-1;
		var choicesDiv=$("div#choicesDiv");
		if(page!=choicesDiv.attr("page"))
		{
			var dataType=colorToDataTypeMap[choicesDiv.css("background-color")];
			var summonerNumber=choicesDiv.attr("summonerNumber");
			choicesDiv.attr("page", page);
			$("button.page").css("display", "none");
			
			var leftPage=$("button.championBlock[summonerNumber="+summonerNumber+"][dataType="+dataType+"][page="+(page-1)+"]")
			var rightPage=$("button.championBlock[summonerNumber="+summonerNumber+"][dataType="+dataType+"][page="+(page+1)+"]")
			for(var i=0; i<leftPage.length; i++)
			{
				if(leftPage[i].getAttribute("page")==page-1)
				{
					leftPageButton=$("button.page#left");
					leftPageButton.css("display", "block");
					leftPageButton.html("Page "+(page))
					break;
				}
			}
			for(var i=0; i<rightPage.length; i++)
			{
				if(rightPage[i].getAttribute("page")==page+1)
				{
					rightPageButton=$("button.page#right");
					rightPageButton.css("display", "block");
					rightPageButton.html("Page "+(page+2))
					break;
				}
			}
			
			$("button.championBlock").css({"display": "none", "border-color": "blue"});
			$("button.championBlock[summonerNumber="+summonerNumber+"][dataType="+dataType+"][page="+page+"]").css("display", "block");
			
			resetHelp();
		}
	});
}




function activateShowSelectionClickListeners()
{
	$("button.showSelectionsButton").off().click(function(){
		var choicesDiv=$("div#choicesDiv");
		var summonerNumber=$(this).attr("summonerNumber");
		if(summonerNumber!=choicesDiv.attr("summonerNumber"))
		{
			choicesDiv.attr("summonerNumber", summonerNumber);
			choicesDiv.attr("page", 0);
			choicesDiv.css("display", "inline-block");
			$("button.championBlock").css({"display": "none", "border-color": "blue"});
			if($("button.championBlock[dataType=Good]").length>0)
				$("#tabGood").css("display", "inline");
			if($("button.championBlock[dataType=Fair]").length>0)
				$("#tabFair").css("display", "inline");
			if($("button.championBlock[dataType=Bad]").length>0)
				$("#tabBad").css("display", "inline");
			
			setIntitialPageButtonLayout(summonerNumber);
			setInitialStyleOfChoicesDiv(summonerNumber);

			resetHelp();
		}
	});
}




function activateChampionBlockClickListeners()
{
	/*Activate help when champion block is clicked*/
	$(document).ready(function(){
    	$("button.championBlock").click(function(){
			$("button.championBlock").css("border-color", "blue");
			$(this).css("border-color", "red");
			let helpString = $(this).attr("help");
			let helpObject = JSON.parse(helpString);
			
			let comparisonHelpArray = [helpObject.strong, helpObject.good, helpObject.even, helpObject.weak];
			let helpDivArray = $("#allHelpDiv").children().toArray();
			
			resetHelp();
			
			for(let i = 0; i<comparisonHelpArray.length; i++)
			{
				let champs = comparisonHelpArray[i].champs;
				let posses = comparisonHelpArray[i].posses;
				
				for(let j = 0; j<champs.length; j++)
				{
					let helpBlock = document.createElement("div");
					helpBlock.setAttribute("class","helpBlock");
					let helpChampPic = document.createElement("div")
					helpChampPic.setAttribute("class","helpBlockEl");
					helpChampPic.style = "background: url(http://ddragon.leagueoflegends.com/cdn/8.12.1/img/champion/"+champImgAccessList[champAccessList.indexOf(champs[j])]+".png) left center / 40px 40px;";
					let helpPosPic = document.createElement("div");
					helpPosPic.setAttribute("class","helpBlockEl");
					helpPosPic.style = "background: url(https://tjheim.github.io/LoLCounterPicking/WebContent/PositionPictures/"+champPosImgAccessList[champPosAccessList.indexOf(posses[j])]+".png) left center / 40px 40px;";
					helpBlock.appendChild(helpChampPic);
					helpBlock.appendChild(helpPosPic);
					helpDivArray[i].appendChild(helpBlock);
				}
				
				$("#allHelpDiv").css("display","inline-block");
				$("#helpTitle").css("display","inline-block");
			}
		});
	});
}




function setIntitialPageButtonLayout(summonerNumber)
{
	if($("#tabGood").css("display")!="none")
	{
		if($("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Good][page=1]").length>0)
		{
			var rightPageButton=$("button.page#right");
			rightPageButton.css("display", "block");
			rightPageButton.html("Page 2");
		}
	}
	else if($("#tabFair").css("display")!="none")
	{
		if($("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Fair][page=1]").length>0)
		{
			var rightPageButton=$("button.page#right");
			rightPageButton.css("display", "block");
			rightPageButton.html("Page 2");
		}
	}
	else if($("#tabBad").css("display")!="none")
	{
		if($("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Bad][page=1]").length>0)
		{
			var rightPageButton=$("button.page#right");
			rightPageButton.css("display", "block");
			rightPageButton.html("Page 2");
		}
	}
}




function setInitialStyleOfChoicesDiv(summonerNumber)
{
	$("button.tab").css("border-bottom-color", "#737373");
	
	if($("#tabGood").css("display")!="none")
	{
		var color=dataTypeToColorMap["Good"];
		$("#tabGood").css("border-bottom-color", color);
		$("#choicesDiv").css({"background-color":color, "border-color":color});
		$("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Good][page=0]").css("display", "block");
	}
	
	else if($("#tabFair").css("display")!="none")
	{
		var color=dataTypeToColorMap["Fair"];
		$("#tabFair").css("border-bottom-color", color);
		$("#choicesDiv").css({"background-color":color, "border-color":color});
		$("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Fair][page=0]").css("display", "block");
	}

	else if($("#tabBad").css("display")!="none")
	{
		var color=dataTypeToColorMap["Bad"];
		$("#tabBad").css("border-bottom-color", color);
		$("#choicesDiv").css({"background-color":color, "border-color":color});
		$("button.championBlock[summonerNumber="+summonerNumber+"][dataType=Bad][page=0]").css("display", "block");
	}
}




function resetHelp()
{
	$("#allHelpDiv").css("display","none");
	$(".helpBlock").remove();
	$("#helpTitle").css("display","none");
}

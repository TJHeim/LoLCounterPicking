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
				posOption.setAttribute("value", champPosList[champPos]);
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
			choicesDiv.css("background", color);
			choicesDiv.css("border-color", color);
			$("button.championBlock").css({"display": "none", "border-color": "blue"});
			$("button.championBlock[summonerNumber="+summonerNumber+"][dataType="+dataType+"][page=0]").css("display", "block");
			$("p#helpText").html("");
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
			$("p#helpText").html("");
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
			await calculateAndPrintPercentagesForSummoner(summonerNumber, champPosMap[$("#allyPosSelect"+summonerNumber).val()]);
		}
		
		await normalizeAllData();
		
		await sortAndPrintAllData(summonerNumber);
		
		//Reveal Show Selections Buttons
		if(summonerChampSelectionsGood.length>0 || summonerChampSelectionsFair.length>0 || summonerChampSelectionsBad.length>0)
			$("#showSelectionsButton"+summonerNumber).css("display", "block");
	}
	
	activateChampionBlockClickListeners();
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
		championBlockButton.setAttribute("page", Math.floor(ranking/champsPerPage));
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
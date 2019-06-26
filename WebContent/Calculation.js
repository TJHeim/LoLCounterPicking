/*Empty the data arrays*/
function resetDataArrays()
{
	summonerChampSelectionsGood=Array(0);
	summonerChampPersGood=Array(0);
	summonerChampHelpGood=Array(0);
	
	summonerChampSelectionsFair=Array(0);
	summonerChampPersFair=Array(0);
	summonerChampHelpFair=Array(0);
	
	summonerChampSelectionsBad=Array(0);
	summonerChampPersBad=Array(0);
	summonerChampHelpBad=Array(0);
	
	summonerNormalizedChampPersGood=Array(0);
	summonerNormalizedChampSelectionsGood=Array(0);

	summonerNormalizedChampPersFair=Array(0);
	summonerNormalizedChampSelectionsFair=Array(0);

	summonerNormalizedChampPersBad=Array(0);
	summonerNormalizedChampSelectionsBad=Array(0);
	
	summonerNormalizedChampHelp=Array(0);
	
	return Promise.resolve();
}



/*Calculate the percentages for each unidentified ally*/
async function calculateAndPrintPercentages()
{
	$("div#choicesDiv").css("display", "none");
	$("div#choicesDiv").attr("summonerNumber", "");
	
	$("button.tab").css("display", "none");
	
	$("button.page").css("display", "none");
	
	$("button.championBlock").remove();
	
	$(".showSelectionsButton").css("display", "none");
	
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
		
		await normalizeAllData(summonerNumber);
		
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



/*Grab the percentage data from file*/
async function grabDataAndAddToArrays(summonerNumber, champ, champPos, compareType, champsAtPosList, champsAtPosAccessList)
{
	let champIndex = champAccessList.indexOf(champ);
	let champPosIndex = champPosAccessList.indexOf(champPos);
	let compareTypeIndex = compareTypeAccessList.indexOf(compareType);
	let dataObject = counterDataArray[champPosIndex + champPosAccessList.length*compareTypeIndex + champPosAccessList.length*compareTypeAccessList.length*champIndex];
	await addDataToArrays(summonerNumber, champIndex, compareType, champsAtPosList, champsAtPosAccessList, dataObject);
	return Promise.resolve();
}



/*Add the found data to the arrays*/
function addDataToArrays(summonerNumber, activeChampIndex, compareType, champsAtPosList, champsAtPosAccessList, dataObject)
{
	for(let i = 0; i < dataObject.champArray.length; i++)
	{
		let champ = dataObject.champArray[i];
		let champPer = dataObject.perArray[i];
		
		if(compareType=="weak")
		{
			if(summonerChampSelectionsGood.includes(champ))
			{
				var champPosInArray=summonerChampSelectionsGood.indexOf(champ)
				var presentPer=summonerChampPersGood[champPosInArray];
				summonerChampPersGood[champPosInArray]=(1-(1-presentPer/100)*(1-champPer/100))*100;
				summonerChampHelpGood[champPosInArray]+=", Strong against "+champList[activeChampIndex];
			}
							
			else if(champsAtPosAccessList.includes(champ))
			{
				summonerChampSelectionsGood.push(champ);
				summonerChampPersGood.push(champPer);
				summonerChampHelpGood.push("Strong against "+champList[activeChampIndex]);
			}
		}
						
		if(compareType=="good")
		{
			if(summonerChampSelectionsGood.includes(champ))
			{
				var champPosInArray=summonerChampSelectionsGood.indexOf(champ)
				var presentPer=summonerChampPersGood[champPosInArray];
				summonerChampPersGood[champPosInArray]=(1-(1-presentPer/100)*(1-champPer/100))*100;
				summonerChampHelpGood[champPosInArray]+=", Good with "+champList[activeChampIndex];
			}
							
			else if(champsAtPosAccessList.includes(champ))
			{
				summonerChampSelectionsGood.push(champ);
				summonerChampPersGood.push(champPer);
				summonerChampHelpGood.push("Good with "+champList[activeChampIndex]);
			}
		}
						
		else if(compareType=="even")
		{
			if(summonerChampSelectionsFair.includes(champ))
			{
				var champPosInArray=summonerChampSelectionsFair.indexOf(champ)
				var presentPer=summonerChampPersFair[champPosInArray];
				summonerChampPersFair[champPosInArray]=(1-(1-presentPer/100)*(1-champPer/100))*100;
				summonerChampHelpFair[champPosInArray]+=", Goes even with "+champList[activeChampIndex];
			}
							
			else if(champsAtPosAccessList.includes(champ))
			{
				summonerChampSelectionsFair.push(champ);
				summonerChampPersFair.push(champPer);
				summonerChampHelpFair.push("Goes even with "+champList[activeChampIndex]);
			}
		}
						
		if(compareType=="strong")
		{
			if(summonerChampSelectionsFair.includes(champ))
			{
				var champPosInArray=summonerChampSelectionsBad.indexOf(champ)
				var presentPer=summonerChampPersBad[champPosInArray];
				summonerChampPersBad[champPosInArray]=(1-(1-presentPer/100)*(1-champPer/100))*100;
				summonerChampHelpBad[champPosInArray]+=", Weak against "+champList[activeChampIndex];
			}
							
			else if(champsAtPosAccessList.includes(champ))
			{
				summonerChampSelectionsBad.push(champ);
				summonerChampPersBad.push(champPer);
				summonerChampHelpBad.push("Weak against "+champList[activeChampIndex]);
			}
		}
	}
	
	return Promise.resolve();
}




function normalizeAllData(summonerNumber)
{
	normalizeFromDataArray(summonerChampSelectionsGood);
	normalizeFromDataArray(summonerChampSelectionsFair);
	normalizeFromDataArray(summonerChampSelectionsBad);
	
}




function normalizeFromDataArray(dataArray)
{
	let availableData = Array(0);
	
	for(var i = 0; i<dataArray.length; i++)
	{
		let champ = dataArray[i];
		if(!summonerNormalizedChampSelectionsGood.includes(champ))
		{
			if(summonerChampSelectionsGood.includes(champ))
				availableData.push("good");
			if(summonerChampSelectionsFair.includes(champ))
				availableData.push("fair");
			if(summonerChampSelectionsBad.includes(champ))
				availableData.push("bad");
			
			normalizeChampData(champ, availableData);
			
			availableData = Array(0);
		}
	}
}




function normalizeChampData(champ, availableData)
{
	let champIndexGood;
	let perGood;
	let summonerNormalizedChampPerGood;
	let champIndexFair;
	let perFair;
	let summonerNormalizedChampPerFair;
	let champIndexBad;
	let perBad;
	let summonerNormalizedChampPerBad
	
	summonerNormalizedChampHelp.push("");
	
	if(availableData.includes("good"))
	{
		champIndexGood = summonerChampSelectionsGood.indexOf(champ);
		perGood = parseInt(summonerChampPersGood[champIndexGood])/100;
		summonerNormalizedChampHelp[-1]+=summonerChampHelpGood[champIndexGood];
	}
	
	if(availableData.includes("fair"))
	{
		champIndexFair = summonerChampSelectionsFair.indexOf(champ);
		perFair = parseInt(summonerChampPersFair[champIndexFair])/100;
		summonerNormalizedChampHelp[-1]+=summonerChampHelpFair[champIndexFair];
	}
	
	if(availableData.includes("bad"))
	{
		champIndexBad = summonerChampSelectionsBad.indexOf(champ);
		perBad = parseInt(summonerChampPersBad[champIndexBad])/100;
		summonerNormalizedChampHelp[-1]+=summonerChampHelpBad[champIndexBad];
	}
	
	if(availableData.toString()==["good"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = perGood;
		summonerNormalizedChampPerFair = (1/2)*(1-perGood);
		summonerNormalizedChampPerBad = (1/2)*(1-perGood);
	}
	
	else if(availableData.toString()==["fair"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = (1/2)*(1-perFair);
		summonerNormalizedChampPerFair = perFair;
		summonerNormalizedChampPerBad = (1/2)*(1-perFair);
	}
	
	else if(availableData.toString()==["bad"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = (1/2)*(1-perBad);
		summonerNormalizedChampPerFair = (1/2)*(1-perBad);
		summonerNormalizedChampPerBad = perBad;
	}
	
	else if(availableData.toString()==["good","fair"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = perGood*perFair + (1/2)*perGood*(1-perFair) + (1/4)*(1-perGood)*(1-perFair);
		summonerNormalizedChampPerFair = (1/2)*perGood*(1-perFair) + (1/2)*(1-perGood)*perFair + (1/4)*(1-perGood)*(1-perFair)
		summonerNormalizedChampPerBad = (1/2)*(1-perGood)*perFair + (1/2)*(1-perGood)*(1-perFair)
	}
	
	else if(availableData.toString()==["good","bad"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = perGood*(1-perBad) + (1/4)*(1-perGood)*(1-perBad)
		summonerNormalizedChampPerFair = perGood*perBad + (1/2)*(1-perGood)*(1-perBad)
		summonerNormalizedChampPerBad = (1-perGood)*perBad + (1/4)*(1-perGood)*(1-perBad)
	}
	
	else if(availableData.toString()==["fair","bad"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = (1/2)*perFair*(1-perBad) + (1/2)*(1-perFair)*(1-perBad)
		summonerNormalizedChampPerFair = (1/2)*perFair*(1-perBad) + (1/2)*(1-perFair)*perBad + (1/4)*(1-perFair)*(1-perBad)
		summonerNormalizedChampPerBad = perFair*perBad + (1/2)*(1-perFair)*perBad + (1/4)*(1-perFair)*(1-perBad)
	}
	
	else if(availableData.toString()==["good","fair","bad"].toString())
	{
		pushChampIntoAllNormalizedDataArrays(champ);
		
		summonerNormalizedChampPerGood = perGood*perFair(1-perBad) + (1/4)*perGood*(1-perFair)*perBad + (5/8)*perGood*(1-perFair)*(1-perBad) + (1/4)*(1-perGood)*perFair*(1-perBad) + (5/16)*(1-perGood)*(1-perFair)*(1-perBad)
		summonerNormalizedChampPerFair = perGood*perFair*perBad + (1/2)*perGood*(1-perFair)*perBad + (3/8)*perGood*(1-perFair)*(1-perBad) + (1/2)*(1-perGood)*perFair*(1-perBad) + (3/8)*(1-perGood)*(1-perFair)*perBad + (3/8)*(1-perGood)*(1-perFair)*(1-perBad)
		summonerNormalizedChampPerBad = (1/4)*perGood*(1-perFair)*perBad + (1-perGood)*perFair*perBad + (1/4)*(1-perGood)*perFair*(1-perBad) + (5/8)*(1-perGood)*(1-perFair)*perBad + (5/16)*(1-perGood)*(1-perFair)*(1-perBad)
	}
	
	else
	{
		console.error('No match found for "availableData" in the function "normalizeChampData"');
	}
	
	
	summonerNormalizedChampPersGood.push(summonerNormalizedChampPerGood*100);
	summonerNormalizedChampPersFair.push(summonerNormalizedChampPerFair*100);
	summonerNormalizedChampPersBad.push(summonerNormalizedChampPerBad*100);
}



function pushChampIntoAllNormalizedDataArrays(champ)
{
	summonerNormalizedChampSelectionsGood.push(champ);
	summonerNormalizedChampSelectionsFair.push(champ);
	summonerNormalizedChampSelectionsBad.push(champ);
}




function sortAndPrintAllData(summonerNumber)
{
	if(summonerNormalizedChampSelectionsGood.length>0)
		sortAndPrintData(summonerNumber, "Good", summonerNormalizedChampSelectionsGood, summonerNormalizedChampPersGood, summonerNormalizedChampHelp);
		
	if(summonerNormalizedChampSelectionsFair.length>0)
		sortAndPrintData(summonerNumber, "Fair", summonerNormalizedChampSelectionsFair, summonerNormalizedChampPersFair, summonerNormalizedChampHelp);
	
	if(summonerNormalizedChampSelectionsBad.length>0)
		sortAndPrintData(summonerNumber, "Bad", summonerNormalizedChampSelectionsBad, summonerNormalizedChampPersBad, summonerNormalizedChampHelp);
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





# LoLCounterPicking
This is an unfinished personal project in order to simplify the process of counter-picking in League of Legends. 
All data comes from the website, "lolcounter.com", and the champion images come from "ddragon.leagueoflegends.com".
This project is being hosted publicly, but I do not take any responsibility for those accessing the website without my knowledge. Each team has 5 champions that have positions "Top," "Jungle" (Jg), "Middle" (Mid), "Bottom" (Bot), or "Support" (Sup).

Main access is at "https://tjheim.github.io/LoLCounterPicking/WebContent/BasePage.html".

`BasePage.html` is the user-friendly interface for counter picking. Select champions on either side as they are chosen. Press 'Calculate' to bring up selections. 'Show Selctions' brings up selections ordered by 'Good,' 'Fair,' and 'Bad' with picks added in terms of most fitting to that fit. There can be multiple pages per tab. Each selection can have an added position marker that will calculate the general comparisons as well as comparisons on the enemy champion in the same position. Press on specific data to show more information as to why this champ has been given this grade for the game. This is ordered by 'Strong Against,' 'Works Well With' (Own Team), 'Goes Even With,' and 'Weak Against.' Shown images give general comparisons as a star and positions for position comparisons (WIP).

## Warning
"https://tjheim.github.io/LoLCounterPicking/WebContent/RefreshSource.html" This page will download a JSON file to your device.

`RefreshSource.html` is a download page for me. If you go to this page and the download finishes, a JSON will be downloaded to your computer which is how I implemented data collection. This is the JSON that is being held in `LoLCounterPicking/WebContent/ChampionCounterSource`. This site uses a web scraper API to collect all relevant data from "lolcounter.com" and order it for easy access in JSON array format. The data that I collect is in percentages of votes and this percentage is what is stored in the JSON. This will collect ALL data for each type of comparison, for each champion, for each position.

I cannot promise this currently works as this API and the website are not my own and are subject to change without my notice. The most recent JSON is found in the above directory. I apologize for the many 'txt' files as this was a previous implementation that was scrapped in favor of a single file.

/*Access and print lists*/
const champList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
const champAccessList=["aatrox", "ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "aurelionsol", "azir", "bard", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "kaisa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred", "kled", "kogmaw", "leblanc", "leesin", "leona", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "masteryi", "missfortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "quinn", "rakan", "rammus", "reksai", "renekton", "rengar", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "syndra", "tahmkench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vi", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xinzhao", "yasuo", "yorick", "zac", "zed", "ziggs", "zilean", "zoe", "zyra"];
const champPosList=["", "Top", "Mid", "Bot", "Sup", "Jg"];
const champPosAccessList=["general", "top", "mid", "bottom", "jungle"];
const champPosMap={"":"general", "Top":"top", "Mid":"mid", "Bot":"bottom", "Sup":"bottom", "Jg":"jungle"};
const compareTypeList=["Strong", "Weak", "Even", "Well"];
const compareTypeAccessList=["strong", "weak", "even", "good"];

/*Image access names*/
const champImgAccessList=["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "Kogmaw", "Leblanc", "LeeSin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Reksai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "MonkeyKing", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];

/*Access and print lists for champions at each position*/
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

/*Champions per team and page*/
const champsPerTeam=5;
const champsPerPage=7;

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

/*Data array*/
var counterDataArray=Array(0)

var colorToDataTypeMap={"rgb(144, 238, 144)":"Good", "rgb(173, 216, 230)":"Fair", "rgb(255, 192, 203)":"Bad"};
var dataTypeToColorMap={"Good":"lightgreen", "Fair":"lightblue", "Bad":"pink"};
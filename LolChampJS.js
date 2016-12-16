var ch = new Array(); ch[36] = 'DrMundo', ch[33] = 'Rammus', ch[34] = 'Anivia', ch[39] = 'Irelia', ch[157] = 'Yasuo', ch[37] = 'Sona', ch[38] = 'Kassadin', ch[154] = 'Zac', ch[150] = 'Gnar',
ch[43] = 'Karma', ch[42] = 'Corki', ch[41] = 'Gangplank', ch[40] = 'Janna', ch[201] = 'Braum', ch[22] = 'Ashe', ch[23] = 'Tryndamere', ch[24] = 'Jax', ch[25] = 'Morgana', ch[26] = 'Zilean',
ch[27] = 'Singed', ch[28] = 'Evelynn', ch[29] = 'Twitch', ch[3] = 'Galio', ch[161] = 'Velkoz', ch[2] = 'Olaf', ch[1] = 'Annie', ch[7] = 'Leblanc', ch[30] = 'Karthus', ch[6] = 'Urgot',
ch[32] = 'Amumu', ch[5] = 'XinZhao', ch[31] = 'Chogath', ch[4] = 'TwistedFate', ch[9] = 'FiddleSticks', ch[8] = 'Vladimir', ch[19] = 'Warwick', ch[17] = 'Teemo', ch[18] = 'Tristana',
ch[15] = 'Sivir', ch[16] = 'Soraka', ch[13] = 'Ryze', ch[14] = 'Sion', ch[11] = 'MasterYi', ch[12] = 'Alistar', ch[21] = 'MissFortune', ch[20] = 'Nunu', ch[107] = 'Rengar', ch[106] = 'Volibear',
ch[105] = 'Fizz', ch[104] = 'Graves', ch[103] = 'Ahri', ch[99] = 'Lux', ch[102] = 'Shyvana', ch[101] = 'Xerath', ch[412] = 'Thresh', ch[98] = 'Shen', ch[222] = 'Jinx', ch[96] = 'KogMaw',
ch[223] = 'TahmKench', ch[92] = 'Riven', ch[91] = 'Talon', ch[90] = 'Malzahar', ch[429] = 'Kalista', ch[10] = 'Kayle', ch[421] = 'RekSai', ch[89] = 'Leona', ch[79] = 'Gragas', ch[117] = 'Lulu',
ch[114] = 'Fiora', ch[78] = 'Poppy', ch[115] = 'Ziggs', ch[77] = 'Udyr', ch[112] = 'Viktor', ch[113] = 'Sejuani', ch[110] = 'Varus', ch[111] = 'Nautilus', ch[119] = 'Draven', ch[432] = 'Bard',
ch[245] = 'Ekko', ch[82] = 'Mordekaiser', ch[83] = 'Yorick', ch[80] = 'Pantheon', ch[81] = 'Ezreal', ch[86] = 'Garen', ch[84] = 'Akali', ch[85] = 'Kennen', ch[67] = 'Vayne', ch[126] = 'Jayce',
ch[69] = 'Cassiopeia', ch[127] = 'Lissandra', ch[68] = 'Rumble', ch[121] = 'Khazix', ch[122] = 'Darius', ch[120] = 'Hecarim', ch[72] = 'Skarner', ch[236] = 'Lucian', ch[74] = 'Heimerdinger',
ch[75] = 'Nasus', ch[238] = 'Zed', ch[76] = 'Nidalee', ch[134] = 'Syndra', ch[133] = 'Quinn', ch[59] = 'JarvanIV', ch[58] = 'Renekton', ch[57] = 'Maokai', ch[56] = 'Nocturne', ch[55] = 'Katarina',
ch[64] = 'LeeSin', ch[62] = 'MonkeyKing', ch[63] = 'Brand', ch[268] = 'Azir', ch[267] = 'Nami', ch[60] = 'Elise', ch[131] = 'Diana', ch[61] = 'Orianna', ch[266] = 'Aatrox', ch[143] = 'Zyra',
ch[48] = 'Trundle', ch[45] = 'Veigar', ch[44] = 'Taric', ch[51] = 'Caitlyn', ch[53] = 'Blitzcrank', ch[54] = 'Malphite', ch[254] = 'Vi', ch[50] = 'Swain', ch[35] = 'Shaco';
var sp = new Array(); sp[1] = 'SummonerBoost', sp[12] = 'SummonerTeleport', sp[30] = 'SummonerPoroRecall', sp[14] = 'SummonerDot', sp[6] = 'SummonerHaste', sp[32] = 'SummonerSnowball',
sp[7] = 'SummonerHeal', sp[11] = 'SummonerSmite', sp[3] = 'SummonerExhaust', sp[31] = 'SummonerPoroThrow', sp[13] = 'SummonerMana', sp[2] = 'SummonerClairvoyance', sp[21] = 'SummonerBarrier',
sp[4] = 'SummonerFlash', sp[17] = 'SummonerOdinGarrison';
var itemAPI;
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++)
    buttons[i].setAttribute("tabindex", "-1");
if (screen.width >= 1750) {
    $(".page_container").css("width", "1530px");
    $(".page_container").css("height", "754.6px");
}
else {
    $(".page_container").css("width", "1092.8px");
    $(".page_container").css("height", "539px");
}
var pageWidth = $(".page_container").width();
if (pageWidth < 1530) {
    $(".top_container").css("width", "1092.8px");
    $("html").css("font-size", "71%");
    $(".champImgMatch").css("height", "28.4px");
    $(".summ1Match").css("height", "14.2px");
    $(".summ2Match").css("height", "14.2px");
    $(".playerItemMatch").css("width", "24.85px");
    $(".playerItemMatch").css("height", "24.85px");
    $(".ct-chart").css({"height": "106.7%", "margin-top": "2%"});
    $(".ct-label").css("line-height", ".45");
    $(".ct-chart21, .ct-chart22").css("height", "76px");
    $(".rankedBoxButtons, .rankedBox2015, .rankedBox2014, .rankedBox3").css("width", "1092.8px");
    $(".rankedStats tr:nth-child(even)").css("height", "24.8px");
    $(".rankedStats tr:nth-child(odd)").css("height", "24.8px");
    $(".rankedCol0").css("padding", "7.1px 21.3px");
    $(".rankedCol").css("padding", "7.1px 10.67px");
}

(function (window) {

    'use strict';

    var version = "5.17.1",
        body = document.body,
		mask = document.createElement("div"),
		togglePushTop = document.querySelector(".toggle-push-top"),
		pushMenuTop = document.querySelector(".push-menu-top"),
        toggleSlideBottom = document.querySelector(".toggle-slide-bottom"),
        slideMenuBottom = document.querySelector(".slide-menu-bottom"),
        toggleSlideBottom2 = document.querySelector(".toggle-slide-bottom2"),
        slideMenuBottom2 = document.querySelector(".slide-menu-bottom2"),
        togglePushTop2 = document.querySelector(".toggle-push-top2"),
		pushMenuTop2 = document.querySelector(".push-menu-top2"),
        togglePushTop3 = document.querySelector(".toggle-push-top3"),
		pushMenuTop3 = document.querySelector(".push-menu-top3"),
        togglePushTop4 = document.querySelector(".toggle-push-top4"),
		pushMenuTop4 = document.querySelector(".push-menu-top4"),
        togglePushTop5 = document.querySelector(".toggle-push-top5"),
		pushMenuTop5 = document.querySelector(".push-menu-top5"),
        togglePushTop6 = document.querySelector(".toggle-push-top6"),
		pushMenuTop6 = document.querySelector(".push-menu-top6"),
        togglePushTop7 = document.querySelector(".toggle-push-top7"),
		pushMenuTop7 = document.querySelector(".push-menu-top7"),
        togglePushTop8 = document.querySelector(".toggle-push-top8"),
		pushMenuTop8 = document.querySelector(".push-menu-top8"),
        togglePushTop9 = document.querySelector(".toggle-push-top9"),
		pushMenuTop9 = document.querySelector(".push-menu-top9"),
        togglePushTop10 = document.querySelector(".toggle-push-top10"),
		pushMenuTop10 = document.querySelector(".push-menu-top10"),
        togglePushTop11 = document.querySelector(".toggle-push-top11"),
		pushMenuTop11 = document.querySelector(".push-menu-top11"),
        username = "", region = "na",
        profileTopChamps = false,
        idHolder, pAmount, summAPICalls, inc,
        playersFound = false,
        matchesExecuted = false,
        match0Executed = false,
        match1Executed = false,
        match2Executed = false,
        match3Executed = false,
        match4Executed = false,
        match5Executed = false,
        match6Executed = false,
        match7Executed = false,
        match8Executed = false,
        match9Executed = false,
        playerMap = new Map(),
        playerMapName = new Map(),
        matches = [],
        sCount = 0,
        idArr = [],
        summonerID = "",
        summonerNameActual,
        toggleSlideBottom3 = document.querySelector(".toggle-slide-bottom3"),
        slideMenuBottom3 = document.querySelector(".slide-menu-bottom3"),
        toggleSlideBottom31 = document.querySelector(".toggle-slide-bottom31"),
        slideMenuBottom31 = document.querySelector(".slide-menu-bottom31"),
        toggleSlideBottom32 = document.querySelector(".toggle-slide-bottom32"),
        slideMenuBottom32 = document.querySelector(".slide-menu-bottom32"),
        toggleSlideBottom33 = document.querySelector(".toggle-slide-bottom33"),
        slideMenuBottom33 = document.querySelector(".slide-menu-bottom33"),
        rankedStatsExecutedS5 = false,
        rankedStatsExecutedS4 = false,
        rankedStatsExecutedS3 = false,
        wrapperSave = [],
        buttonNotClicked = true,
        toggleSlideBottom4 = document.querySelector(".toggle-slide-bottom4"),
        slideMenuBottom4 = document.querySelector(".slide-menu-bottom4"),
        runesExecuted = false,
        activeNav = "";
    getItems();
    if (document.location.hash.substring(1, 9).toLowerCase() == "summoner") { // If matches/rankedstats/etc is added after summoner name, go to that page
        username = document.location.hash.substring(10);
        var urlHasName = true;
        summonerLookUp(urlHasName);
    }
    window.addEventListener('hashchange', function () { // reloads page if url is changed without use of a button
        hashChanging();
    });

    //mask.className = "mask";

    /* push menu top */ /* When another summoner is searched then pages all go down and sleep for a small amount of time and then come back up with new data */
    $(document).ready(function () {
        $('#username_input').keypress(function (e) {
            if (e.keyCode == 13) {
                $('#search_name').click;
                return false;
            }
        });
    });
    function replaceAll(find, replace, str) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    togglePushTop.addEventListener("click", function () {
        var urlHasName = false;
        summonerLookUp(urlHasName);
    });

    /* slide menu bottom */
    toggleSlideBottom.addEventListener("click", function () {
        classie.add(body, "smb-open");
        document.body.appendChild(mask);
        classie.remove(body, "smb-open2"), classie.remove(body, "smb-open3"), classie.remove(body, "smb-open31"), classie.remove(body, "smb-open32"),
        classie.remove(body, "smb-open33"), classie.remove(body, "smb-open4");
        activeNav = "smb-open";
    });
    /* slide menu bottom2 */
    toggleSlideBottom2.addEventListener("click", function () {
        $(".match_container").css("height", $(".match_container_big").height() - 2); // sets match_container height equal to match_container_big height
        if (pageWidth == 1530)
            $(".match_info").css("height", 17); /*17 Width:1920 || 12 Width:1366*/
        else
            $(".match_info").css("height", 12);
        $("span.tooltip > span").css("min-width", $(".item_img").height() * 6.666667); // sets min-width of tooltip
        document.body.appendChild(mask);
        classie.remove(body, "smb-open"), classie.remove(body, "smb-open3"), classie.remove(body, "smb-open31"), classie.remove(body, "smb-open32"),
        classie.remove(body, "smb-open33"), classie.remove(body, "smb-open4");
        //classie.add(body, "smb-open2");
        activeNav = "smb-open2";
        if (!matchesExecuted) {
            document.getElementById("loadingGif").style.display = "block";
            profileTopChamps = true;
            matchesExecuted = true;
            getRecentMatches();
        }
        else {
            classie.add(body, "smb-open2");
            //activeNav = "smb-open2";
        }
        if (!playersFound) {
            getPlayers(idHolder, pAmount, summAPICalls, inc);
            playersFound = true;
        }
    });
    /* slide menu bottom 3 */
    toggleSlideBottom3.addEventListener("click", function () {
        classie.add(body, "smb-open3"), classie.add(body, "smb-open31");
        document.body.appendChild(mask);
        classie.remove(body, "smb-open"), classie.remove(body, "smb-open2"), classie.remove(body, "smb-open32"), classie.remove(body, "smb-open33"),
        classie.remove(body, "smb-open4");
        activeNav = "smb-open3";
    });
    toggleSlideBottom31.addEventListener("click", function () {
        classie.add(body, "smb-open31");
        classie.remove(body, "smb-open32"), classie.remove(body, "smb-open33");
        if (!rankedStatsExecutedS5) {
            rankedStatsExecutedS5 = true;
        }
    });
    toggleSlideBottom32.addEventListener("click", function () {
        classie.add(body, "smb-open32");
        classie.remove(body, "smb-open31"), classie.remove(body, "smb-open33");
        if (!rankedStatsExecutedS4) {
            rankedStatsExecutedS4 = true;
            getRankedStats(2014);
        }
    });
    toggleSlideBottom33.addEventListener("click", function () {
        classie.add(body, "smb-open33");
        classie.remove(body, "smb-open31"), classie.remove(body, "smb-open32");
        if (!rankedStatsExecutedS3) {
            rankedStatsExecutedS3 = true;
            getRankedStats(3);
        }
    });
    /* slide menu bottom 4 */
    toggleSlideBottom4.addEventListener("click", function () {
        classie.add(body, "smb-open4");
        document.body.appendChild(mask);
        classie.remove(body, "smb-open"), classie.remove(body, "smb-open2"), classie.remove(body, "smb-open3"), classie.remove(body, "smb-open31"),
        classie.remove(body, "smb-open32"), classie.remove(body, "smb-open33");
        activeNav = "smb-open4";
        if (!runesExecuted) {
            runesExecuted = true;
            getRunes();
        }
    });

    /* push menu top 2 */
    togglePushTop2.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open2") {
            document.getElementById("wrapper2").style.top = "0";
            classie.remove(body, "pmt-open2");
            activeNav = "";
        }
        else {
            $(".push-menu-top2").css("height", wrapperSave[0]);
            document.getElementById("wrapper2").style.top = $(".push-menu-top2").height() + "px";
            classie.add(body, "pmt-open2");
            activeNav = "pmt-open2";
            if (!match0Executed) {
                match0Executed = true;
                getMatch(0, matches[0]);
            }
        }
    });
    /* push menu top 3 */
    togglePushTop3.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open3") {
            document.getElementById("wrapper3").style.top = "0";
            classie.remove(body, "pmt-open3");
            activeNav = "";
        }
        else {
            $(".push-menu-top3").css("height", wrapperSave[1]);
            document.getElementById("wrapper3").style.top = $(".push-menu-top3").height() + "px";
            classie.add(body, "pmt-open3");
            activeNav = "pmt-open3";
            if (!match1Executed) {
                match1Executed = true;
                getMatch(1, matches[1]);
            }
        }
    });
    /* push menu top 4 */
    togglePushTop4.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open4") {
            document.getElementById("wrapper4").style.top = "0";
            classie.remove(body, "pmt-open4");
            activeNav = "";
        }
        else {
            $(".push-menu-top4").css("height", wrapperSave[2]);
            document.getElementById("wrapper4").style.top = $(".push-menu-top4").height() + "px";
            classie.add(body, "pmt-open4");
            activeNav = "pmt-open4";
            if (!match2Executed) {
                match2Executed = true;
                getMatch(2, matches[2]);
            }
        }
    });
    /* push menu top 5 */
    togglePushTop5.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open5") {
            document.getElementById("wrapper5").style.top = "0";
            classie.remove(body, "pmt-open5");
            activeNav = "";
        }
        else {
            $(".push-menu-top5").css("height", wrapperSave[3]);
            document.getElementById("wrapper5").style.top = $(".push-menu-top5").height() + "px";
            classie.add(body, "pmt-open5");
            activeNav = "pmt-open5";
            if (!match3Executed) {
                match3Executed = true;
                getMatch(3, matches[3]);
            }
        }
    });
    /* push menu top 6 */
    togglePushTop6.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open6") {
            document.getElementById("wrapper6").style.top = "0";
            classie.remove(body, "pmt-open6");
            activeNav = "";
        }
        else {
            $(".push-menu-top6").css("height", wrapperSave[4]);
            document.getElementById("wrapper6").style.top = $(".push-menu-top6").height() + "px";
            classie.add(body, "pmt-open6");
            activeNav = "pmt-open6";
            if (!match4Executed) {
                match4Executed = true;
                getMatch(4, matches[4]);
            }
        }
    });
    /* push menu top 7 */
    togglePushTop7.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open7") {
            document.getElementById("wrapper7").style.top = "0";
            classie.remove(body, "pmt-open7");
            activeNav = "";
        }
        else {
            $(".push-menu-top7").css("height", wrapperSave[5]);
            document.getElementById("wrapper7").style.top = $(".push-menu-top7").height() + "px";
            classie.add(body, "pmt-open7");
            activeNav = "pmt-open7";
            if (!match5Executed) {
                match5Executed = true;
                getMatch(5, matches[5]);
            }
        }
    });
    /* push menu top 8 */
    togglePushTop8.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open8") {
            document.getElementById("wrapper8").style.top = "0";
            classie.remove(body, "pmt-open8");
            activeNav = "";
        }
        else {
            $(".push-menu-top8").css("height", wrapperSave[6]);
            document.getElementById("wrapper8").style.top = $(".push-menu-top8").height() + "px";
            classie.add(body, "pmt-open8");
            activeNav = "pmt-open8";
            if (!match6Executed) {
                match6Executed = true;
                getMatch(6, matches[6]);
            }
        }
    });
    /* push menu top 9 */
    togglePushTop9.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open9") {
            document.getElementById("wrapper9").style.top = "0";
            classie.remove(body, "pmt-open9");
            activeNav = "";
        }
        else {
            $(".push-menu-top9").css("height", wrapperSave[7]);
            document.getElementById("wrapper9").style.top = $(".push-menu-top9").height() + "px";
            classie.add(body, "pmt-open9");
            activeNav = "pmt-open9";
            if (!match7Executed) {
                match7Executed = true;
                getMatch(7, matches[7]);
            }
        }
    });
    /* push menu top 10 */
    togglePushTop10.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open10") {
            document.getElementById("wrapper10").style.top = "0";
            classie.remove(body, "pmt-open10");
            activeNav = "";
        }
        else {
            $(".push-menu-top10").css("height", wrapperSave[8]);
            document.getElementById("wrapper10").style.top = $(".push-menu-top10").height() + "px";
            classie.add(body, "pmt-open10");
            activeNav = "pmt-open10";
            if (!match8Executed) {
                match8Executed = true;
                getMatch(8, matches[8]);
            }
        }
    });
    /* push menu top 11 */
    togglePushTop11.addEventListener("click", function () {
        if (activeNav.valueOf() == "pmt-open11") {
            $(".push-menu-top11").css("height", "0");
            classie.remove(body, "pmt-open11");
            activeNav = "";
        }
        else {
            $(".push-menu-top11").css("height", wrapperSave[9]);
            classie.add(body, "pmt-open11");
            activeNav = "pmt-open11";
            if (!match9Executed) {
                match9Executed = true;
                getMatch(9, matches[9]);
            }
        }
    });

    function summonerLookUp(urlHasName) { //loading animated image comes up with nav screen and is removed at very end of getting data.
        $(".left_side_bar_profile").css("height", $(".page_container").height());
        if (!urlHasName) {
            username = $("#username_input").val();
            region = $("#region").val();
        }
        if (username != "") {
            var summonerName = replaceAll(" ", "", username);
            $.ajax({
                url: '/Server/SummonerLookUp.php',
                type: 'GET',
                data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v1.4/summoner/by-name/' + summonerName + '?' },
                dataType: 'json',
                success: function (json) {
                    document.getElementById("loadingGif").style.display = "block";
                    summonerName = summonerName.toLowerCase();
                    summonerID = json[summonerName].id;
                    getLeagueInfo(summonerID);
                    summonerNameActual = json[summonerName].name;
                    document.getElementById("summNameProfile").innerHTML = summonerNameActual;
                    document.getElementById("summIconImg").src = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/profileicon/" + json[summonerName].profileIconId + ".png"
                    document.getElementById("summLevelProfile").innerHTML = json[summonerName].summonerLevel;
                    if (window.location.hash == "") {
                        buttonNotClicked = false;
                        window.location.hash = "summoner:" + username;
                        //window.history.pushState("Summoner Search", "Summoner", "summoner/" + region + "/" + username.toLowerCase());
                    }
                },
                error: function (error) {
                    alert("Not a Valid Summoner");
                }
            });
        } else { alert("Please Input a Summoner Name") }
    }
    function getItems() {
        $.ajax({
            url: '/Server/GetItems.php',
            type: 'GET',
            data: { leagueData : 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?' },
            dataType: 'json',
            success: function (resp) {
                itemAPI = resp;
            },
            error: function (err) {
                alert("Riot Items API down for maintenance");
            }
        });
    }
    function getLeagueInfo(summonerID) {
        $.ajax({
            url: '/Server/GetLeagueInfo.php',
            type: 'GET',
            data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v2.5/league/by-summoner/' + summonerID + '/entry?' },
            dataType: 'json',
            success: function (resp) {
                var tierMap = new Map();
                var divMap = new Map();
                tierMap.set("BRONZE", 10); tierMap.set("SILVER", 20); tierMap.set("GOLD", 30); tierMap.set("PLATINUM", 40); tierMap.set("DIAMOND", 50); tierMap.set("MASTER", 60);
                tierMap.set("CHALLENGER", 70); divMap.set("I", 5); divMap.set("II", 4); divMap.set("III", 3); divMap.set("IV", 2); divMap.set("V", 1);

                var r5 = 0;
                var r3 = 0;
                for (var i = 1; i < resp[summonerID].length; i++) {
                    if (resp[summonerID][i].queue == "RANKED_TEAM_5x5" && (tierMap.get(resp[summonerID][i].tier) + divMap.get(resp[summonerID][i].entries[0].division)) > r5) {
                        var r5queue = replaceAll("_", " ", resp[summonerID][i].queue);
                        var r5tier = resp[summonerID][i].tier;
                        var r5div = resp[summonerID][i].entries[0].division;
                        r5 = tierMap.get(resp[summonerID][i].tier) + divMap.get(resp[summonerID][i].entries[0].division);
                        var r5wins = resp[summonerID][i].entries[0].wins;
                        var r5losses = resp[summonerID][i].entries[0].losses;
                        var r5lp = resp[summonerID][i].entries[0].leaguePoints;
                    }
                    if (resp[summonerID][i].queue == "RANKED_TEAM_3x3" && (tierMap.get(resp[summonerID][i].tier) + divMap.get(resp[summonerID][i].entries[0].division)) > r3) {
                        var r3queue = replaceAll("_", " ", resp[summonerID][i].queue);
                        var r3tier = resp[summonerID][i].tier;
                        var r3div = resp[summonerID][i].entries[0].division;
                        r3 = tierMap.get(resp[summonerID][i].tier) + divMap.get(resp[summonerID][i].entries[0].division);
                        var r3wins = resp[summonerID][i].entries[0].wins;
                        var r3losses = resp[summonerID][i].entries[0].losses;
                        var r3lp = resp[summonerID][i].entries[0].leaguePoints;
                    }
                }
                /* solo queue */
                var queue = resp[summonerID][0].queue, singleGame = false, singleGame3 = false, singleGame5 = false;
                if (queue != "RANKED_TEAM_5x5" && queue != "RANKED_TEAM_3x3") {
                    var wins = resp[summonerID][0].entries[0].wins;
                    var losses = resp[summonerID][0].entries[0].losses;
                    var tier = resp[summonerID][0].tier;
                    var division = resp[summonerID][0].entries[0].division;
                    document.getElementById("r1queue").innerHTML = replaceAll("_", " ", queue).toLowerCase().replace('r', 'R').replace('s', 'S');
                    document.getElementById("r1tier").innerHTML = tier;
                    document.getElementById("r1div").innerHTML = division;
                    document.getElementById("r1wins").innerHTML = wins + " Wins";
                    document.getElementById("r1losses").innerHTML = losses + " Losses";
                    document.getElementById("r1lp").innerHTML = resp[summonerID][0].entries[0].leaguePoints + " League Points";
                    document.getElementById("r1img").src = "http://static.lolskill.net/img/tiers/192/" + tier.toLowerCase() + division + ".png";
                    if (resp[summonerID][0].entries[0].wins != 0)
                        document.getElementById("r1winratio").innerHTML = "(Win Ratio: " + ((wins / (wins + losses)) * 100).toFixed(2) + "%)";
                    else
                        document.getElementById("r1winratio").innerHTML = "(Win Ratio: 0.00%)";
                }
                else {
                    getUnrankedInfo(1);
                    if (queue == "RANKED_TEAM_5x5") {
                        getUnrankedInfo(5);
                        singleGame5 = true;
                    }
                    else {
                        getUnrankedInfo(3);
                        singleGame3 = true;
                    }
                    singleGame == true;
                }
                /* ranked 5s */
                if (r5queue !== undefined && !singleGame) {
                    document.getElementById("r5queue").innerHTML = r5queue.toLowerCase().replace('r', 'R').replace('t', 'T');
                    document.getElementById("r5tier").innerHTML = r5tier;
                    document.getElementById("r5div").innerHTML = r5div;
                    document.getElementById("r5wins").innerHTML = r5wins + " Wins";
                    document.getElementById("r5losses").innerHTML = r5losses + " Losses";
                    document.getElementById("r5lp").innerHTML = r5lp + " League Points";
                    document.getElementById("r5img").src = "http://static.lolskill.net/img/tiers/192/" + r5tier.toLowerCase() + r5div + ".png";
                    if (resp[summonerID][0].entries[0].wins != 0)
                        document.getElementById("r5winratio").innerHTML = "(Win Ratio: " + ((r5wins / (r5wins + r5losses)) * 100).toFixed(2) + "%)";
                    else
                        document.getElementById("r5winratio").innerHTML = "(Win Ratio: 0.00%)";
                }
                else if (!singleGame5) {
                    getUnrankedInfo(5);
                }
                /* ranked 3s */
                if (r3queue !== undefined && !singleGame) {
                    document.getElementById("r3queue").innerHTML = r3queue.toLowerCase().replace('r', 'R').replace('t', 'T');
                    document.getElementById("r3tier").innerHTML = r3tier;
                    document.getElementById("r3div").innerHTML = r3div;
                    document.getElementById("r3wins").innerHTML = r3wins + " Wins";
                    document.getElementById("r3losses").innerHTML = r3losses + " Losses";
                    document.getElementById("r3lp").innerHTML = r3lp + " League Points";
                    document.getElementById("r3img").src = "http://static.lolskill.net/img/tiers/192/" + r3tier.toLowerCase() + r3div + ".png";
                    if (resp[summonerID][0].entries[0].wins != 0)
                        document.getElementById("r3winratio").innerHTML = "(Win Ratio: " + ((r3wins / (r3wins + r3losses)) * 100).toFixed(2) + "%)";
                    else
                        document.getElementById("r3winratio").innerHTML = "(Win Ratio: 0.00%)";
                }
                else if (!singleGame3) {
                    getUnrankedInfo(3);
                }
                getOverallStats(2015, summonerID);
            },
            error: function (error) {
                for (var i = 1; i < 6; i = i + 2)
                    getUnrankedInfo(i);
                getOverallStats(2015, summonerID);
            }
        });
    }
    function getUnrankedInfo(t) {
        if (t == 1)
            document.getElementById("r" + t + "queue").innerHTML = "Ranked Solo Queue";
        else
            document.getElementById("r" + t + "queue").innerHTML = "Ranked Team " + t + "x" + t;
        document.getElementById("r" + t + "tier").innerHTML = "Unranked"
        document.getElementById("r" + t + "lp").innerHTML = "---";
        document.getElementById("r" + t + "wins").innerHTML = "---";
        document.getElementById("r" + t + "losses").innerHTML = "---";
        document.getElementById("r" + t + "winratio").innerHTML = "---";
        document.getElementById("r" + t + "img").src = "http://lkimg.zamimg.com/images/medals/placing.png"
    }
    function getRecentMatches() {
        $.ajax({
            url: "/Server/RecentMatches.php",
            type: 'GET',
            data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v1.3/game/by-summoner/' + summonerID + '/recent?' },
            dataType: 'json',
            success: function (resp) {
                if (!profileTopChamps) {
                    var champMap = new Array(), winMap = new Array();
                    for (var k = 0; k < 10; k++) {
                        if (resp.games[k].stats.win)
                            var win = 1;
                        else
                            var win = 0;
                        if (champMap[resp.games[k].championId] == undefined) {
                            champMap[resp.games[k].championId] = 1;
                            winMap[resp.games[k].championId] = win;
                        }
                        else {
                            champMap[resp.games[k].championId] = champMap[resp.games[k].championId] + 1;
                            winMap[resp.games[k].championId] = winMap[resp.games[k].championId] + win;
                        }
                    }
                    var iHold = [], gHold = [], wHold = [];
                    for (var j = 0; j < 5; j++) {
                        champMap.forEach(function (gameC, id, cMap) {
                            if (gameC > gHold[j] || iHold[j] == undefined && gameC != 0) {
                                iHold[j] = id;
                                gHold[j] = gameC;
                                wHold[j] = winMap[id];
                            }
                        });
                        champMap[iHold[j]] = 0;
                        document.getElementById("strong" + j).innerHTML = ch[iHold[j]];
                        document.getElementById("spanG" + j).innerHTML = "Games: " + gHold[j];
                        document.getElementById("spanW" + j).innerHTML = "Wins: " + wHold[j];
                        document.getElementById("spanL" + j).innerHTML = "Losses: " + (gHold[j] - wHold[j]);
                        $("#topChamp" + j).attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + ch[iHold[j]] + ".png")
                        if (!isNaN(wHold[j]))
                            document.getElementById("topPerc" + j).innerHTML = Math.round((wHold[j] / gHold[j]) * 100) + "%";
                    }
                    if (pageWidth == 1530) {
                        var yOffset = 70, barDist = 17;
                    }
                    else {
                        var yOffset = 50, barDist = 12;
                    }
                    new Chartist.Bar('.ct-chart', {
                        labels: ['', '', '', '', ''],
                        series: [
                            {
                                name: 'Games',
                                data: [gHold[0], gHold[1], gHold[2], gHold[3], gHold[4]]
                            },
                            {
                                name: 'Wins',
                                data: [wHold[0], wHold[1], wHold[2], wHold[3], wHold[4]]
                            },
                            {
                                name: 'Losses',
                                data: [gHold[0] - wHold[0], gHold[1] - wHold[1], gHold[2] - wHold[2], gHold[3] - wHold[3], gHold[4] - wHold[4]]
                            }

                        ]
                    }, {
                        seriesBarDistance: barDist,
                        reverseData: true,
                        horizontalBars: true,
                        axisY: {
                            offset: yOffset
                        },
                        axisX: {
                            onlyInteger: true
                        }
                    });
                    classie.add(body, "pmt-open");
                    classie.add(body, "smb-open");
                    document.body.appendChild(mask);
                    activeNav = "pmt-open";
                    document.getElementById("loadingGif").style.display = "none";
                    profileTopChamps = true;

                  //<!---------------------------Google Analytics Tracking--------------------------->
                    (function (i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments)
                        }, i[r].l = 1 * new Date(); a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                    ga('create', 'UA-67536066-1', 'auto');
                    ga('send', 'pageview');
                  //<!------------------------------------------------------------------------------->
                }

                var templateSwitch = 0, winAmount = 0, killAmount = 0, deathAmount = 0, assistAmount = 0, recentMinions = 0, recentGold = 0,
                    recentGPM = 0, recentDmgC = 0, recentDmgT = 0, recentDmgTakenT = 0, recentTurretKills = 0, recentBarrKills = 0, recentFB = 0, recentDbKillsT = 0, recentTpKillsT = 0, recentQdKillsT = 0,
                    recentPtKillsT = 0, recentWardsKilled = 0, recentWardsPlaced = 0;
                for (var m = 0; m < 10; m++) {
                    var matchInfoClone = $(".mi_template" + templateSwitch).clone().removeClass('mi_template' + templateSwitch);
                    var champSpellContainerClone = $(".csc_template" + templateSwitch).clone().removeClass('csc_template' + templateSwitch);
                    templateSwitch = 1;
                    matchInfoClone.appendTo(".match_info_holder" + m).show();
                    champSpellContainerClone.appendTo(".champ_spell_container_holder" + m).show();
                    var subType = resp.games[m].subType;
                    if (subType.substring(subType.length - 3, subType.length) == "3x3") {
                        if (pageWidth == 1530)
                            wrapperSave[m] = "215%"; /*215% Width:1920 || 220% Width:1366*/
                        else {
                            wrapperSave[m] = "220%";
                            $("nav.push-menu-top" + (m + 2)).css("transform", "translateY(-4%)")
                        }
                    }
                    else {
                        if (pageWidth == 1530)
                            wrapperSave[m] = "330%"; /*330% Width:1920 || 335% Width:1366*/
                        else {
                            wrapperSave[m] = "335%";
                            $("nav.push-menu-top" + (m + 2)).css("transform", "translateY(-2.5%)")
                        }
                    }

                    matchInfoClone.find(".gameType").text(replaceAll('_', ' ', subType));
                    var date = (new Date(resp.games[m].createDate)).toString();
                    var hours = parseInt(date.substring(16, 18));
                    var amPm = "AM";
                    if (hours > 12) {
                        hours = parseInt(date.substring(16, 18)) - 12;
                        amPm = "PM";
                    }
                    matchInfoClone.find(".createDate").text(date.substring(4, 10) + " - " + hours + date.substring(18, 21) + amPm);
                    if (resp.games[m].stats.win) {
                        document.getElementById("win" + m).innerHTML = "Victory";
                        document.getElementById("win" + m).style.color = "#6C0";
                        if (pageWidth == 1530)
                            matchInfoClone.find(".winLine").html("<div class='filler winLine' style='top:0; position:absolute; width:842px; margin:auto; background: linear-gradient(#666, #666, #6C0,#121217)'></div>");
                        else
                            matchInfoClone.find(".winLine").html("<div class='filler winLine' style='top:0; position:absolute; width:602px; margin:auto; background: linear-gradient(#666, #666, #6C0,#121217)'></div>");
                    }
                    else {
                        document.getElementById("win" + m).innerHTML = "Defeat";
                        document.getElementById("win" + m).style.color = "#D20";
                        if (pageWidth == 1530)
                            matchInfoClone.find(".winLine").html("<div class='filler winLine' style='top:0; position:absolute; width:842px; margin:auto; background: linear-gradient(#666, #666, #D20,#121217)'></div>");
                        else
                            matchInfoClone.find(".winLine").html("<div class='filler winLine' style='top:0; position:absolute; width:602px; margin:auto; background: linear-gradient(#666, #666, #D20,#121217)'></div>");
                    }

                    document.getElementById("champImgHistory").id = "champImgHistory" + m;
                    $("#champImgHistory" + m).attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + ch[resp.games[m].championId] + ".png");
                    document.getElementById("summSpell1").id = "summSpell1" + m;
                    $("#summSpell1" + m).attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/" + sp[resp.games[m].spell1] + ".png");
                    document.getElementById("summSpell2").id = "summSpell2" + m;
                    $("#summSpell2" + m).attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/" + sp[resp.games[m].spell2] + ".png");

                    var championsKilled = resp.games[m].stats.championsKilled;
                    var numDeaths = resp.games[m].stats.numDeaths
                    var assists = resp.games[m].stats.assists;
                    if (championsKilled == undefined)
                        championsKilled = 0;
                    if (numDeaths == undefined)
                        numDeaths = 0;
                    if (assists == undefined)
                        assists = 0;
                    document.getElementById("KDA" + m).innerHTML = championsKilled + " / " + numDeaths + " / " + assists;
                    document.getElementById("level" + m).innerHTML = resp.games[m].stats.level;
                    var goldEarned = resp.games[m].stats.goldEarned;
                    document.getElementById("goldEarned" + m).innerHTML = (goldEarned / 1000).toFixed(1) + "k Gold";
                    var timePlayed = resp.games[m].stats.timePlayed;
                    var minutes = Math.floor(timePlayed / 60);
                    var seconds = timePlayed - minutes * 60;
                    matchInfoClone.find(".timePlayed").text(minutes + "m " + seconds + "s");
                    document.getElementById("goldPerMin" + m).innerHTML = (goldEarned / (timePlayed / 60)).toFixed(0) + " Gold/Min";
                    var neutralMinionsKilled = resp.games[m].stats.neutralMinionsKilled;
                    var minionsKilled = resp.games[m].stats.minionsKilled;
                    if (neutralMinionsKilled != null && minionsKilled != null)
                        document.getElementById("totalMinionsKilled" + m).innerHTML = neutralMinionsKilled + minionsKilled + " CS";
                    else if (neutralMinionsKilled == null && minionsKilled != null)
                        document.getElementById("totalMinionsKilled" + m).innerHTML = minionsKilled + " CS";
                    else if (neutralMinionsKilled != null && minionsKilled == null)
                        document.getElementById("totalMinionsKilled" + m).innerHTML = neutralMinionsKilled + " CS";
                    else
                        document.getElementById("totalMinionsKilled" + m).innerHTML = 0 + " CS";
                    document.getElementById("minionsKilledPerTenMin" + m).innerHTML = (parseInt(document.getElementById("totalMinionsKilled" + m).innerHTML) / (timePlayed / 600)).toFixed(0) + " CS/10 Min";
                    if (!isNaN(resp.games[m].stats.totalDamageDealtToChampions)) {
                        var totalDTC = resp.games[m].stats.totalDamageDealtToChampions;
                        document.getElementById("totalDamageDealtToChampions" + m).innerHTML = (resp.games[m].stats.totalDamageDealtToChampions / 1000).toFixed(0) + "k Dmg(C)";
                    }
                    else {
                        var totalDTC = 0;
                        document.getElementById("totalDamageDealtToChampions" + m).innerHTML = 0 + " Dmg(C)";
                    }
                    document.getElementById("totalDamageDealt" + m).innerHTML = (resp.games[m].stats.totalDamageDealt / 1000).toFixed(0) + "k Dmg(T)";
                    var items = [
                        resp.games[m].stats.item0,
                        resp.games[m].stats.item1,
                        resp.games[m].stats.item2,
                        resp.games[m].stats.item3,
                        resp.games[m].stats.item4,
                        resp.games[m].stats.item5,
                        resp.games[m].stats.item6
                    ];
                    var count = 5;
                    while (count >= 0) {
                        if (items[count] != undefined) {
                            try {
                                document.getElementById("item" + count + m).src = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + items[count] + ".png";
                                new Opentip(document.getElementById("item" + count + m), "<strong>" + itemAPI.data[items[count]].name + "</strong>" + "<br /><br />" + itemAPI.data[items[count]].description);
                            } catch (err) { };
                            count--;
                        }
                        else {
                            document.getElementById("item" + count + m).src = "Images/EmptySlot.gif";
                            count--;
                        }
                    }
                    //if (!noTrinket && items[6] != undefined) {
                    //    document.getElementById("item" + putTrinket + m).src = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + items[6] + ".png";
                    //    document.getElementById("itemN" + putTrinket + m).innerHTML = itemAPI.data[items[6]].name;
                    //    document.getElementById("itemD" + putTrinket + m).innerHTML = itemAPI.data[items[6]].description;
                    //}

                    matches.push(resp.games[m].gameId);
                    if (subType == "NORMAL_3x3")
                        for (var k = 0; k < 5; k++) //Creates Map of all players in non-ranked games. key = game TeamId championId. value = summonerId
                            playerMap.set(m + "" + resp.games[m].fellowPlayers[k].teamId + "" + resp.games[m].fellowPlayers[k].championId, resp.games[m].fellowPlayers[k].summonerId);
                    else if (subType == "BOT")
                        for (var k = 0; k < 4; k++)
                            playerMap.set(m + "" + resp.games[m].fellowPlayers[k].teamId + "" + resp.games[m].fellowPlayers[k].championId, resp.games[m].fellowPlayers[k].summonerId);
                    else if (subType == "BOT_3x3" || subType.substring(subType.length - 3, subType.length) == "BOT")
                        for (var k = 0; k < 2; k++)
                            playerMap.set(m + "" + resp.games[m].fellowPlayers[k].teamId + "" + resp.games[m].fellowPlayers[k].championId, resp.games[m].fellowPlayers[k].summonerId);
                    else if (subType.substring(0, 6) != "RANKED" && subType.substring(0, 6) != "NONE")
                        for (var k = 0; k < 9; k++)
                            playerMap.set(m + "" + resp.games[m].fellowPlayers[k].teamId + "" + resp.games[m].fellowPlayers[k].championId, resp.games[m].fellowPlayers[k].summonerId);
                    if (resp.games[m].stats.win)
                        winAmount++;
                    killAmount = killAmount + championsKilled;
                    deathAmount = deathAmount + numDeaths;
                    assistAmount = assistAmount + assists;
                    recentMinions = recentMinions + parseInt(document.getElementById("totalMinionsKilled" + m).innerHTML);
                    recentGold = recentGold + goldEarned;
                    recentGPM = recentGPM + parseInt(document.getElementById("goldPerMin" + m).innerHTML);
                    if (!isNaN(resp.games[m].stats.turretsKilled))
                        recentTurretKills = recentTurretKills + resp.games[m].stats.turretsKilled;
                    if (!isNaN(resp.games[m].stats.barracksKilled))
                        recentBarrKills = recentBarrKills + resp.games[m].stats.barracksKilled;
                    recentDmgC = recentDmgC + totalDTC;
                    recentDmgT = recentDmgT + resp.games[m].stats.totalDamageDealt;
                    if (resp.games[m].stats.totalDamageTaken != undefined)
                        recentDmgTakenT = recentDmgTakenT + resp.games[m].stats.totalDamageTaken;
                    if (!isNaN(resp.games[m].stats.wardPlaced))
                        recentWardsPlaced = recentWardsPlaced + resp.games[m].stats.wardPlaced;
                    if (!isNaN(resp.games[m].stats.wardKilled))
                        recentWardsKilled = recentWardsKilled + resp.games[m].stats.wardKilled;
                    if (!isNaN(resp.games[m].stats.firstBlood))
                        recentFB = recentFB + resp.games[m].stats.firstBlood;
                    if (resp.games[m].stats.doubleKills != undefined) {
                        recentDbKillsT = recentDbKillsT + resp.games[m].stats.doubleKills;
                        if (resp.games[m].stats.tripleKills != undefined) {
                            recentTpKillsT = recentTpKillsT + resp.games[m].stats.tripleKills;
                            if (resp.games[m].stats.quadraKills != undefined) {
                                recentQdKillsT = recentQdKillsT + resp.games[m].stats.quadraKills;
                                if (resp.games[m].stats.pentaKills != undefined)
                                    recentPtKillsT = recentPtKillsT + resp.games[m].stats.pentaKills;
                            }
                        }
                    }
                }
                var playerAmount = 0,
                first40 = "",
                second40 = "",
                third40 = "",
                pAmount1 = 0,
                pAmount2 = 0,
                pAmount3 = 0;
                playerMap.forEach(function (val, key, map) { //Creates array of all summonerId's in order of Map
                    if (playerAmount < 40) {
                        first40 = first40 + val + ",";
                        idArr.push(val);
                        pAmount1++;
                    }
                    else if (playerAmount < 80) {
                        second40 = second40 + val + ",";
                        idArr.push(val);
                        pAmount2++;
                    }
                    else {
                        third40 = third40 + val + ","
                        idArr.push(val);
                        pAmount3++;
                    }
                    playerAmount++;
                });
                idHolder = [first40, second40, third40],
                pAmount = [pAmount1, pAmount2, pAmount3],
                summAPICalls = playerAmount / 40,
                inc = 0;
                if (matchesExecuted) {
                    getPlayers(idHolder, pAmount, summAPICalls, inc);
                    playersFound = true;
                }
                else
                    matchesExecuted = true;
                // Match Chart
                document.getElementById("mChartW").innerHTML = winAmount;
                document.getElementById("mChartL").innerHTML = 10 - winAmount;
                var data = {
                    series: [10 - winAmount, winAmount]
                };

                var sum = function (a, b) { return a + b };

                new Chartist.Pie('.ct-chart21', data, {
                    labelInterpolationFnc: function (value) {
                        return ((value / 10) * 100).toFixed(0) + '%';
                    }
                });
                // K/D/A Chart
                document.getElementById("mChartK").innerHTML = killAmount;
                document.getElementById("mChartD").innerHTML = deathAmount;
                document.getElementById("mChartA").innerHTML = assistAmount;
                var data = {
                    series: [deathAmount, killAmount, assistAmount]
                };

                var sum = function (a, b) { return a + b };

                new Chartist.Pie('.ct-chart22', data, {
                    labelInterpolationFnc: function (value) {
                        return ((value / (assistAmount + deathAmount + killAmount)) * 100).toFixed(0) + '%';
                    }
                });
                // Recent Statistics (Champions)
                document.getElementById("recentKills").innerHTML = (killAmount / 10).toFixed(1);
                document.getElementById("recentDeaths").innerHTML = (deathAmount / 10).toFixed(1);
                document.getElementById("recentAssists").innerHTML = (assistAmount / 10).toFixed(1);
                document.getElementById("recentKDA").innerHTML = ((killAmount + assistAmount) / deathAmount).toFixed(2);
                document.getElementById("recentKD").innerHTML = (killAmount / deathAmount).toFixed(2);
                document.getElementById("recentMinions").innerHTML = Math.round(recentMinions / 10);
                document.getElementById("recentGold").innerHTML = ((recentGold / 10) / 1000).toFixed(0) + "k";
                document.getElementById("recentGPM").innerHTML = Math.round(recentGPM / 10);
                document.getElementById("recentTurretKills").innerHTML = (recentTurretKills / 10).toFixed(1);
                document.getElementById("recentDmgC").innerHTML = ((recentDmgC / 10) / 1000).toFixed(0) + "k";
                document.getElementById("recentDmgT").innerHTML = ((recentDmgT / 10) / 1000).toFixed(0) + "k";
                document.getElementById("recentDmgTaken").innerHTML = ((recentDmgTakenT / 10) / 1000).toFixed(0) + "k";
                document.getElementById("recentWardsPlaced").innerHTML = (recentWardsPlaced / 10).toFixed(1);
                document.getElementById("recentWardsKilled").innerHTML = (recentWardsKilled / 10).toFixed(1);
                // Recent Statistics (Total)
                document.getElementById("recentMinionsT").innerHTML = recentMinions;
                document.getElementById("recentGoldT").innerHTML = (recentGold / 1000).toFixed(0) + "k";
                document.getElementById("recentWardsPlacedT").innerHTML = recentWardsPlaced;
                document.getElementById("recentWardsKilledT").innerHTML = recentWardsKilled;
                document.getElementById("recentTurretKillsT").innerHTML = recentTurretKills;
                document.getElementById("recentBarrKillsT").innerHTML = recentBarrKills;
                document.getElementById("recentDmgCT").innerHTML = (recentDmgC / 1000).toFixed(0) + "k";
                document.getElementById("recentDmgTT").innerHTML = (recentDmgT / 1000).toFixed(0) + "k";
                document.getElementById("recentDmgTakenT").innerHTML = (recentDmgTakenT / 1000).toFixed(0) + "k";
                document.getElementById("recentFBT").innerHTML = recentFB;
                document.getElementById("recentDbKillsT").innerHTML = recentDbKillsT;
                document.getElementById("recentTpKillsT").innerHTML = recentTpKillsT;
                document.getElementById("recentQdKillsT").innerHTML = recentQdKillsT;
                document.getElementById("recentPtKillsT").innerHTML = recentPtKillsT;

                //<--Loading Gif-->
                if (activeNav == "smb-open2") {
                    document.getElementById("loadingGif").style.display = "none";
                    classie.add(body, "smb-open2");
                }
            },
            error: function (error) {
                alert("js error");
            }
        });
    }
    // Row of player searched needs an easy way to distinguish it. Could make row blue
    function getMatch(match, matchId) { //Games without 10 or 6 players total are not fully supported yet because only 3v3 template and 5v5 template exist. Only supports 3x3 and 5x5
        $.ajax({
            url: '/Server/GetMatch.php',
            type: 'Get',
            data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v2.2/match/' + matchId + '?' },
            dataType: 'json',
            success: function (resp) {
                var queueType = resp.queueType;
                if (queueType.substring(queueType.length - 3, queueType.length) == "3x3") {
                    var playerClone = $(".playerTemplate3x3").clone().removeClass("playerTemplate3x3");
                    playerClone.appendTo(".playerHolder" + match).show();
                    var pNum = 6;
                }
                else {
                    var playerClone = $(".playerTemplate5x5").clone().removeClass("playerTemplate5x5");
                    playerClone.appendTo(".playerHolder" + match).show();
                    var pNum = 10;
                }
                if (resp.teams[0].winner) {
                    playerClone.find(".win0").html("<span style='color:#6C0'>Winner</span>");
                    playerClone.find(".win1").html("<span style='color:#D20'>2nd Place</span>");
                }
                else {
                    playerClone.find(".win0").html("<span style='color:#D20'>2nd Place</span>");
                    playerClone.find(".win1").html("<span style='color:#6C0'>Winner</span>");
                }
                var playerIds = "", teamIdSumm;
                if (playerMapName.get(match + "" + resp.participants[0].teamId + "" + resp.participants[0].championId) != undefined &&
                    playerMapName.get(match + "" + resp.participants[1].teamId + "" + resp.participants[1].championId) != undefined ||
                    playerMapName.get(match + "" + resp.participants[1].teamId + "" + resp.participants[1].championId) != undefined &&
                    playerMapName.get(match + "" + resp.participants[2].teamId + "" + resp.participants[2].championId) != undefined ||
                    playerMapName.get(match + "" + resp.participants[0].teamId + "" + resp.participants[0].championId) != undefined &&
                    playerMapName.get(match + "" + resp.participants[2].teamId + "" + resp.participants[2].championId) != undefined)
                    teamIdSumm = resp.participants[0].teamId;
                else
                    teamIdSumm = resp.participants[pNum - 1].teamId;
                for (var p = 0; p < pNum; p++) {
                    if (queueType.substring(0, 6) == "RANKED") {
                        playerClone.find(".playerName" + p).text(resp.participantIdentities[p].player.summonerName);
                        playerIds = playerIds + resp.participantIdentities[p].player.summonerId + ",";
                    }
                    else {
                        var champIdHolder = resp.participants[p].championId;
                        var teamIdHolder = resp.participants[p].teamId;
                        if (playerMapName.get(match + "" + teamIdHolder + "" + champIdHolder) != undefined) {
                            playerClone.find(".playerName" + p).text(playerMapName.get(match + "" + teamIdHolder + "" + champIdHolder));
                            playerIds = playerIds + playerMap.get(match + "" + teamIdHolder + "" + champIdHolder) + ",";
                        }
                        else if (resp.queueType.substring(0, 3) != "BOT") {
                            playerClone.find(".playerName" + p).text(summonerNameActual);
                            playerIds = playerIds + summonerID + ",";
                        }
                        else
                            if (teamIdHolder == teamIdSumm) {
                                playerClone.find(".playerName" + p).text(summonerNameActual);
                                playerIds = playerIds + summonerID + ",";
                            }
                            else
                                playerClone.find(".playerName" + p).text(ch[champIdHolder] + " BOT");
                    }
                    playerClone.find("#champ" + p + "ImgMatch").attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + ch[resp.participants[p].championId] + ".png");
                    playerClone.find("#" + p + "summ1").attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/" + sp[resp.participants[p].spell1Id] + ".png");
                    playerClone.find("#" + p + "summ2").attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/" + sp[resp.participants[p].spell2Id] + ".png");
                    playerClone.find(".playerLevel" + p).text(resp.participants[p].stats.champLevel);
                    playerClone.find(".playerKDA" + p).text(resp.participants[p].stats.kills + "/" + resp.participants[p].stats.deaths + "/" + resp.participants[p].stats.assists);
                    var neutralMinionsKilled = resp.participants[p].stats.neutralMinionsKilled;
                    var minionsKilled = resp.participants[p].stats.minionsKilled;
                    if (neutralMinionsKilled != null && minionsKilled != null)
                        playerClone.find(".playerTotalMinionsKilled" + p).text(neutralMinionsKilled + minionsKilled);
                    else if (neutralMinionsKilled == null && minionsKilled != null)
                        playerClone.find(".playerTotalMinionsKilled" + p).text(minionsKilled);
                    else if (neutralMinionsKilled != null && minionsKilled == null)
                        playerClone.find(".playerTotalMinionsKilled" + p).text(neutralMinionsKilled);
                    else
                        playerClone.find(".playerTotalMinionsKilled" + p).text('0');
                    var goldEarned = resp.participants[p].stats.goldEarned;
                    playerClone.find(".goldEarned" + p).text((goldEarned / 1000).toFixed(1) + "k");
                    playerClone.find(".playerDamageToChamps" + p).text((resp.participants[p].stats.totalDamageDealtToChampions / 1000).toFixed(0) + "k");
                    playerClone.find(".playerWardsPlaced" + p).text(resp.participants[p].stats.wardsPlaced);
                    playerClone.find(".playerWardsKilled" + p).text(resp.participants[p].stats.wardsKilled);
                    var items = [
                                resp.participants[p].stats.item0, resp.participants[p].stats.item1, resp.participants[p].stats.item2, resp.participants[p].stats.item3,
                                resp.participants[p].stats.item4, resp.participants[p].stats.item5, resp.participants[p].stats.item6
                    ];
                    for (var i = 0; i < 7; i++) {
                        document.getElementById("player" + p + "Item" + i).id = match + "player" + p + "Item" + i;
                        if (items[i] != 0) {
                            $("#" + match + "player" + p + "Item" + i).attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + items[i] + ".png");
                            try { new Opentip(document.getElementById(match + "player" + p + "Item" + i), "<strong>" + itemAPI.data[items[i]].name + "</strong>" + "<br /><br />" + itemAPI.data[items[i]].description); }
                            catch (err) { };
                        }
                        else
                            $("#" + match + "player" + p + "Item" + i).attr("src", "Images/EmptySlot.gif");
                    }
                }
                getPlayersLeague(playerIds, pNum, playerClone);
            },
            error: function () {
                alert("Error getting match data");
            }
        });
    }
    function getPlayers(idHolder, pAmount, summAPICalls, inc) { //Replaces playerMap value with summoner names instead of summoner Ids
        for (var c = 0; c < summAPICalls; c++) {
            $.ajax({
                url: '/Server/GetPlayers.php',
                type: 'GET',
                data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v1.4/summoner/' + idHolder[c] + '/name?' },
                dataType: 'json',
                success: function (resp) {
                    for (var j = 0; j < pAmount[inc]; j++) {
                        idArr[sCount] = resp[idArr[sCount]];
                        sCount++;
                    }
                    inc++;
                    if (inc > summAPICalls) {
                        var sCount2 = 0;
                        playerMap.forEach(function (val, key, map) {
                            playerMapName.set(key, idArr[sCount2]);
                            sCount2++;
                        });
                    }
                }
            });
        }
        //document.getElementById("loadingGif").style.display = "none";
        //classie.add(body, "smb-open2");
        //activeNav = "smb-open2";
    }
    function getPlayersLeague(playerIds, pNum, playerClone) {
        $.ajax({
            url: '/Server/GetPlayersLeague.php',
            type: 'GET',
            data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v2.5/league/by-summoner/' + playerIds + '/entry?' },
            dataType: 'json',
            success: function (resp) {
                var leagueMap = new Map();
                leagueMap.set("BRONZE", "linear-gradient(to bottom, #a27c4e 0%, #5d472d 100%)"), leagueMap.set("SILVER", "linear-gradient(to bottom, #ccd6d1 0%, #93a99e 100%)"),
                leagueMap.set("GOLD", "linear-gradient(to bottom, #e7c244 0%, #af8c16 100%)"), leagueMap.set("PLATINUM", "linear-gradient(to bottom, #4d9e82 0%, #2c594a 100%)"),
                leagueMap.set("DIAMOND", "linear-gradient(to bottom, #57a2dd 0%, #236fab 100%)"), leagueMap.set("MASTER", "linear-gradient(to bottom, #24cbb8 0%, #157469 100%)"),
                leagueMap.set("CHALLENGER", "linear-gradient(to bottom, #70e6e3 0%, #24ccc8 100%)");
                for (var e = 0; e < pNum; e++) {
                    try {
                        playerClone.find(".league" + e).css("background-image", leagueMap.get(resp[playerIds.substring(0, playerIds.indexOf(','))][0].tier));
                        playerClone.find(".league" + e).text(resp[playerIds.substring(0, playerIds.indexOf(','))][0].tier.substring(0, 1) + resp[playerIds.substring(0, playerIds.indexOf(','))][0].tier.substring(1).toLowerCase() + " " + resp[playerIds.substring(0, playerIds.indexOf(','))][0].entries[0].division);
                    }
                    catch (exc) {
                        playerClone.find(".league" + e).css("background-image", "linear-gradient(to bottom, #666666 0%, #333333 100%)");
                        playerClone.find(".league" + e).text("Unranked");
                    }
                    playerIds = playerIds.replace(playerIds.substring(0, playerIds.indexOf(',') + 1), "");
                }
            },
            error: function (error) {
                for (var e = 0; e < pNum; e++) {
                    playerClone.find(".league" + e).css("background-image", "linear-gradient(to bottom, #666666 0%, #333333 100%)");
                    playerClone.find(".league" + e).text("Unranked");
                }
            }
        });
    }
    function getRankedStats(season) {
        $.ajax({
            url: '/Server/GetRankedStats.php',
            type: 'GET',
            data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v1.3/stats/by-summoner/' + summonerID + '/ranked?season=SEASON' + season + '&' },
            dataType: 'json',
            success: function (resp) {
                var gpArray = [];
                var stopper2 = false,
                counter2 = 0;
                while (!stopper2) { //places total games played of each game into array in order of api
                    gpArray.push(resp.champions[counter2].stats.totalSessionsPlayed);
                    try {
                        resp.champions[counter2 + 1].id;
                        counter2++;
                    }
                    catch (err) {
                        stopper2 = true;
                        counter2++;
                    }
                }
                var stopper3 = false, gpIndexArray = [], gpPlace = 0, counter3 = 0;
                while (!stopper3) { //creates new array for index of games played in smallest to greatest order
                    var gpHolder = 99999;
                    for (var i = 0; i < gpArray.length; i++)
                        if (gpArray[i] <= gpHolder) {
                            gpPlace = i;
                            gpHolder = gpArray[i];
                        }
                    gpIndexArray.push(gpPlace);
                    gpArray[gpPlace] = 99999;
                    try {
                        resp.champions[counter3 + 1].id;
                        counter3++;
                    }
                    catch (err) {
                        stopper3 = true;
                        counter3++;
                    }
                }
                // Creates Table of Top 5 most played champs in Ranked. Table placed on profile page
                if (season == "2015") {
                    var topWins = [], topLosses = [], topGames = [], ss = 0;
                    for (var s = gpIndexArray.length - 2; s > gpIndexArray.length - 7; s--) { // put try statements to catch if there are less than 5 champs
                        if (gpIndexArray[s] != undefined) {
                            if (resp.champions[gpIndexArray[s]].id == 0)
                                s++;
                            topWins[ss] = resp.champions[gpIndexArray[s]].stats.totalSessionsWon;
                            topLosses[ss] = resp.champions[gpIndexArray[s]].stats.totalSessionsLost;
                            topGames[ss] = resp.champions[gpIndexArray[s]].stats.totalSessionsPlayed;
                            document.getElementById("strong" + ss).innerHTML = ch[resp.champions[gpIndexArray[s]].id];
                            document.getElementById("spanG" + ss).innerHTML = "Games: " + topGames[ss];
                            document.getElementById("spanW" + ss).innerHTML = "Wins: " + topWins[ss];
                            document.getElementById("spanL" + ss).innerHTML = "Losses: " + topLosses[ss];
                            $("#topChamp" + ss).attr("src", "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + ch[resp.champions[gpIndexArray[s]].id] + ".png");
                            if (!isNaN(topWins[ss]))
                                document.getElementById("topPerc" + ss).innerHTML = Math.round((topWins[ss] / topGames[ss]) * 100) + "%";
                        }
                        ss++;
                        if (s == gpIndexArray.length - 1)
                            s--;
                    }
                    if (pageWidth == 1530) {
                        var yOffset = 70, barDist = 17;
                    }
                    else {
                        var yOffset = 50, barDist = 12;
                    }
                    new Chartist.Bar('.ct-chart', {
                        labels: ['', '', '', '', ''],
                        series: [
                            {
                                name: 'Games',
                                data: [topGames[0], topGames[1], topGames[2], topGames[3], topGames[4]]
                            },
                            {
                                name: 'Wins',
                                data: [topWins[0], topWins[1], topWins[2], topWins[3], topWins[4]]
                            },
                            {
                                name: 'Losses',
                                data: [topLosses[0], topLosses[1], topLosses[2], topLosses[3], topLosses[4]]
                            }

                        ]
                    }, {
                        seriesBarDistance: barDist, /*17 Width:1920 || 12 Width:1366*/
                        reverseData: true,
                        horizontalBars: true,
                        axisY: {
                            offset: yOffset /*70 Width:1920 || 50 Width:1366*/
                        },
                        axisX: {
                            onlyInteger: true,
                        }
                    });
                    classie.add(body, "pmt-open");
                    classie.add(body, "smb-open");
                    document.body.appendChild(mask);
                    activeNav = "pmt-open";
                    document.getElementById("loadingGif").style.display = "none";

                  //<!---------------------------Google Analytics Tracking--------------------------->
                    (function (i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments)
                        }, i[r].l = 1 * new Date(); a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                    ga('create', 'UA-67536066-1', 'auto');
                    ga('send', 'pageview');
                  //<!------------------------------------------------------------------------------->
                }
                // End Table Creation
                if (pageWidth == 1530) {
                    var wh = "40px", mt = "3.5px";
                }
                else {
                    var wh = "28.44px", mt = "2.48px";
                }
                var gp;
                var table = document.getElementById("rankedStats" + season);
                for (var cc = 0; cc < gpIndexArray.length; cc++) {
                    var row = table.insertRow(1);
                    gp = resp.champions[gpIndexArray[cc]].stats.totalSessionsPlayed;
                    var cellHolder = ["http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + ch[resp.champions[gpIndexArray[cc]].id] + ".png", ch[resp.champions[gpIndexArray[cc]].id], parseFloat((resp.champions[gpIndexArray[cc]].stats.totalSessionsWon / gp * 100).toFixed(1)) + "%", resp.champions[gpIndexArray[cc]].stats.totalSessionsWon,
                        resp.champions[gpIndexArray[cc]].stats.totalSessionsLost, parseFloat(((resp.champions[gpIndexArray[cc]].stats.totalChampionKills + resp.champions[gpIndexArray[cc]].stats.totalAssists) / resp.champions[gpIndexArray[cc]].stats.totalDeathsPerSession).toFixed(1)),
                        parseFloat((resp.champions[gpIndexArray[cc]].stats.totalChampionKills / gp).toFixed(1)), parseFloat((resp.champions[gpIndexArray[cc]].stats.totalDeathsPerSession / gp).toFixed(1)), parseFloat((resp.champions[gpIndexArray[cc]].stats.totalAssists / gp).toFixed(1)),
                        parseFloat((resp.champions[gpIndexArray[cc]].stats.totalMinionKills / gp).toFixed(1)), parseFloat((resp.champions[gpIndexArray[cc]].stats.totalGoldEarned / gp).toFixed(0))];
                    if (cellHolder[2] == Infinity)
                        cellHolder[2] = 100 + "%";
                    if (ch[resp.champions[gpIndexArray[cc]].id] == undefined) {
                        cellHolder[0] = "http://cdn.dota2.com/apps/570/icons/econ/testitem_slot_empty.71716dc7a6b7f7303b96ddd15bbe904a772aa151.png";
                        cellHolder[1] = "OVERALL";
                    }
                    for (var c = 1; c < 11; c++) {
                        if (c == 1) {
                            var cell = row.insertCell(0);
                            var img = document.createElement('img');
                            img.src = cellHolder[0];
                            img.style.height = wh; /*40px Width:1920 || 28.44px Width:1366*/
                            img.style.width = wh; /*40px Width:1920 || 28.44px Width:1366*/
                            img.style.marginTop = mt; /*3.5px Width:1920 || 2.48px Width:1366*/
                            cell.appendChild(img);
                        }
                        var cell = row.insertCell(c);
                        cell.innerHTML = cellHolder[c];
                        if (ch[resp.champions[gpIndexArray[cc]].id] == undefined)
                            cell.style.color = "#184f92";
                    }
                }
                sorttable.makeSortable(table);
                if (cc > 18)
                    $(".rankedBox" + season).css("transform", "translateX(5px)");
            },
            error: function (error) {
                if (season == "2015") {
                    getRecentMatches();
                    matchesExecuted = true;
                }
            }
        });
    }
    function getOverallStats(seasonOverall, summonerID) {
        $.ajax({
            url: '/Server/GetOverallStats.php',
            type: 'GET',
            data: { leagueData: 'https://na.api.pvp.net/api/lol/' + region + '/v1.3/stats/by-summoner/' + summonerID + '/summary?season=SEASON' + seasonOverall + '&' },
            dataType: 'json',
            success: function (resp) {
                var inc;
                for (i = 0; i < resp.playerStatSummaries.length; i++) {
                    inc = resp.playerStatSummaries[i].playerStatSummaryType;
                    if ((inc == "RankedSolo5x5" || inc == "RankedTeam5x5" || inc == "RankedTeam3x3" || inc == "Unranked" || inc == "CAP5x5" || inc == "Unranked3x3" || inc == "AramUnranked5x5") && (resp.playerStatSummaries[i].wins > 0 || resp.playerStatSummaries[i].losses)) {
                        document.querySelector(".h" + inc).style.display = "block";
                        var statTable = document.getElementById("stats" + inc);
                        var row = statTable.insertRow(-1);
                        row.insertCell(0).innerHTML = "Wins";
                        row.insertCell(1).innerHTML = resp.playerStatSummaries[i].wins;
                        if (inc.substring(0, 6) == "Ranked") {
                            var row = statTable.insertRow(-1);
                            row.insertCell(0).innerHTML = "Losses";
                            row.insertCell(1).innerHTML = resp.playerStatSummaries[i].losses;
                        }
                        var row = statTable.insertRow(-1); row.insertCell(0).innerHTML = "Champion Kills"; row.insertCell(1).innerHTML = resp.playerStatSummaries[i].aggregatedStats.totalChampionKills;
                        var row = statTable.insertRow(-1); row.insertCell(0).innerHTML = "Assists"; row.insertCell(1).innerHTML = resp.playerStatSummaries[i].aggregatedStats.totalAssists;
                        if (resp.playerStatSummaries[i].aggregatedStats.totalMinionKills != undefined) {
                            var row = statTable.insertRow(-1); row.insertCell(0).innerHTML = "Minion Kills"; row.insertCell(1).innerHTML = resp.playerStatSummaries[i].aggregatedStats.totalMinionKills;
                        }
                        if (resp.playerStatSummaries[i].aggregatedStats.totalNeutralMinionsKilled != undefined) {
                            var row = statTable.insertRow(-1); row.insertCell(0).innerHTML = "Neutral Minion Kills"; row.insertCell(1).innerHTML = resp.playerStatSummaries[i].aggregatedStats.totalNeutralMinionsKilled;
                        }
                        var row = statTable.insertRow(-1); row.insertCell(0).innerHTML = "Turrets Destroyed"; row.insertCell(1).innerHTML = resp.playerStatSummaries[i].aggregatedStats.totalTurretsKilled;
                    }
                }

                getRankedStats(2015);
            },
            error: function (error) {
                alert("Unable to retrieve overall statistics");
            }
        });
    }
    function getRunes() {

    }

    /* hide active menu if mask is clicked */
    mask.addEventListener("click", function () {
        classie.remove(body, activeNav);
        activeNav = "";
        document.body.removeChild(mask);
    });

    /* hide active menu if close menu button is clicked */
    [].slice.call(document.querySelectorAll(".close-menu")).forEach(function (el, i) {
        el.addEventListener("click", function () {
            classie.remove(body, activeNav);
            activeNav = "";
            document.body.removeChild(mask);
        });
    });

    document.addEventListener("keyup", function (e) {
        if (parseInt(e.keyCode) === 27 && classie.has(body, activeNav)) {
            classie.remove(body, activeNav);
            document.body.removeChild(mask);
        }
    });
    function hashChanging() {
        if (buttonNotClicked)
            window.location.reload();
        buttonNotClicked = true;
    }

})(window);
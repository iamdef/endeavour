// waves

VANTA.WAVES({
    el: "header",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x70706
})

window.addEventListener('load', getJSONCalendar, false);
window.addEventListener('load', getJSONResults, false);

let today = new Date();
let Logo = {
    "Endeavor": "rkpllogos/Endeavourlogo.png",
    "FlintsCrew": "rkpllogos/flintscrew.png",
    "Dynamo": "rkpllogos/dynamo.png",
    "Galactic": "rkpllogos/galactic.png",
    "Hornets": "rkpllogos/hornets.png",
    "Jaguars": "rkpllogos/jaguars.png",
    "JellyBears": "rkpllogos/jellybears.png",
    "LosVecinos": "rkpllogos/losvecinos.png",
    "LuckyStrike": "rkpllogos/luckystrike.png",
    "Phenomenons": "rkpllogos/phenomenons.png",
    "SwineHeards": "rkpllogos/swineheards.png",
    "RussoTuristo": "rkpllogos/russoturisto.png",
    "Dobro": "rkpllogos/dobro.png",
    "LevelPro": "rkpllogos/levelpro.png",
    "FLPro": "rkpllogos/flpro.png",
    "UnitedCity": "rkpllogos/unitedcity.png",
    "RedStar": "rkpllogos/redstar.png",
    "Element": "rkpllogos/element.png",
    "Savage": "rkpllogos/savage.png",
    "NecroRaisers": "rkpllogos/necroraisers.png",
    "Continental": "rkpllogos/continental.png",
    "GazMyaz": "rkpllogos/swineheards.png",
    "Echelon": "rkpllogos/echelon.png",
    "Karbysh": "rkpllogos/karbysh.png",
    "CrookedPunch": "rkpllogos/levelpro.png",
    "Ragnarok": "rkpllogos/ragnarok.png",
    "TheRed": "rkpllogos/thered.png",
    "DralGaming": "rkpllogos/dralgaming.png"
  };
let sheduleTab = document.getElementById('shedule-tab');
let sheduleList = document.getElementById('shedule-list')
let resultsTab = document.getElementById('results-tab');
let resultsList = document.getElementById('results-list');
let backShedule = document.getElementsByClassName('back-shedule');
let frontShedule = document.getElementsByClassName('shedule-logo-wrapper');
let resultsCard = document.getElementsByClassName('results-card');
var flipCard = document.getElementsByClassName('shedule-card-home');
var flipCards = [];
var $width = $(window).width();



function createTabShedule(tab, arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let el = document.createElement('li');
        el.className = 'shedule-card-home';
        el.innerHTML = '<div class="shedule-logo-wrapper"></div><div class="back-shedule"></div>';
        tab.append(el);
    }
}

function createListShedule(list, arr) {
    let oppo;
    let turnir;
    
    for (let i = 0; i < arr.length; i++) {
        
        (arr[i]["tournament"] == "Российская Киберфутбольная Профи-Лига") ? turnir = 'РКПЛ'
        : (arr[i]["tournament"] == "Кубок РКПЛ") ? turnir = "Кубок РКПЛ"
        : (arr[i]["tournament"] == "Кубок Первого дивизиона") ? turnir = "Кубок Первого дивизиона"
        : turnir = "Кубок Второго дивизиона";


        if (arr[i]["place"] == "Дома") {
            oppo = `<span class="down-list">Endeavour - ${arr[i]["opponent"]}</span>`
        } else {
            oppo = `<span class="down-list">${arr[i]["opponent"]} - Endeavour</span>`
        }

        let el = document.createElement('li');
        el.className = 'list-item';

        if (arr[i]["tournament"] != 'Российская Киберфутбольная Профи-Лига') {
            el.innerHTML = `<div><span>${arr[i]["date"]} |</span><span> ${arr[i]["time"]} |</span><span>${arr[i]["tour"]}</span></div><span>${turnir}</span>` + oppo;
        } else {
            el.innerHTML = `<div><span>${arr[i]["date"]} |</span><span> ${arr[i]["time"]} |</span><span> Тур ${arr[i]["tour"]}</span></div><span>${turnir} | ${arr[i]["division"]}</span>` + oppo;
        }

        list.append(el);
    }
}

function createTabResults(tab, arr) {

    for (let i = 0; i < arr.length; i++) {
        let el = document.createElement('li');
        el.className = 'results-card';
        tab.append(el);
    }
}

function createListResults(list, arr) {
    let oppo, turnir, scoreColor;
    
    for (let i = 0; i < arr.length; i++) {
        
        (arr[i]["tournament"] == "Российская Киберфутбольная Профи-Лига") ? turnir = 'РКПЛ'
        : (arr[i]["tournament"] == "Кубок РКПЛ") ? turnir = "Кубок РКПЛ"
        : (arr[i]["tournament"] == "Кубок Первого дивизиона") ? turnir = "Кубок Первого дивизиона"
        : turnir = "Кубок Второго дивизиона";
        
        if (arr[i]["place"] == "Дома") {
            oppo = '<span class="down-list"><span>Endeavour</span>' + ` <span class="score-list">${arr[i]["score"]}</span> ` + `<span>${arr[i]["opponent"]}</span></span>`
        } else {
            oppo = `<span class="down-list"><span>${arr[i]["opponent"]}</span>` + ` <span class="score-list">${arr[i]["score"]}</span> ` + '<span>Endeavour</span></span>';
        }

        let el = document.createElement('li');
        el.className = 'list-item';

        if (arr[i]["tournament"] != 'Российская Киберфутбольная Профи-Лига') {
            el.innerHTML = `<div><span>${arr[i]["date"]} |</span><span> ${arr[i]["time"]} |</span><span> ${arr[i]["tour"]}</span></div><span>${turnir}</span>` + oppo;
        } else {
            el.innerHTML = `<div><span>${arr[i]["date"]} |</span><span> ${arr[i]["time"]} |</span><span> Тур ${arr[i]["tour"]}</span></div><span>${turnir} | ${arr[i]["division"]}</span>` + oppo;
        }

        list.append(el);

    }
}

  // menu

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
});

// tabs

(function($) {
    $(function() {
      $("ul.tabs_caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("section.tabs")
          .find("div.tabs_content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);

  (function($) {
    $(function() {
      $("div.view-icons").on("click", "i:not(.icon-active)", function() {
        $(this)
          .addClass("icon-active")
          .siblings()
          .removeClass("icon-active")
          .closest("div.tabs_content")
          .find("div.tabs_inner")
          .removeClass("icon-active")
          .eq($(this).index())
          .addClass("icon-active");
      });
    });
  })(jQuery);
  

function getJSONCalendar() {
    var requestURL = "https://iamdef.ru/json/calendar/data2.json"
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var dirtyMatchDay = this.response; // сейчас это массив с массивами, внутри которых объект дня матча, через один пустой массив
        var sheduleMatches = deleteNull(dirtyMatchDay); // удаляем пустые массивы, получаем массив массивов с объектами дня матча

        var sheduleMatchesSort = sortByDateByTime(sheduleMatches);

        var nextMatches = deletePastMatch(sheduleMatchesSort);
        var pastMatches = deleteNextMatch(sheduleMatchesSort);

        pastMatches.reverse();
        

        createTabShedule(sheduleTab, nextMatches);
        createListShedule(sheduleList, nextMatches);
        // createTabResults(resultsTab, pastMatches);
        // createListResults(resultsList, pastMatches);

        //динамическое присваивание id для вращающихся карточек

        for (let k = 0; k < (flipCard.length); k++) {
            flipCard[k].id = k + 'card';
            flipCards.push('#' + flipCard[k].id);
        }

        // переопределение классов для вращения

        for (let i = 0; i < flipCards.length; i++) {

        let elementFront = flipCards[i] + ' .shedule-logo-wrapper';
        let elementBack = flipCards[i] + ' .back-shedule';

        if ($width < 992) {
            $(flipCards[i]).on('click', function() {
                $(elementFront).toggleClass('shedule-logo-wrapper_active');
                $(elementBack).toggleClass('back-shedule_active');
            });
        } else {
            $(flipCards[i]).hover(function() {
                $(elementFront).toggleClass('shedule-logo-wrapper_active');
                $(elementBack).toggleClass('back-shedule_active');
            });
            }  
        }

        fillBackShedule(nextMatches);
        fillFrontShedule(nextMatches);
        // fillResultTab(pastMatches);
    }
}




function getJSONResults() {
    var requestURL = "https://iamdef.ru/json/results/results.json"
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function test() {
        var dirtyResults = this.response; // сейчас это массив с массивами, внутри которых объект с результатами, через один пустой массив
        var ResultMatches = deleteNull(dirtyResults); // удаляем пустые массивы, получаем массив массивов с объектами дня матча
        ResultMatchesSort = sortByDateByTime(ResultMatches);

        ResultMatchesSort.reverse();

        createTabResults(resultsTab, ResultMatchesSort);
        fillResultTab(ResultMatchesSort);

        createListResults(resultsList, ResultMatchesSort);

        let scoreList = document.querySelectorAll('.list-item .down-list span:not(:last-child):not(:first-child)');

        for (i = 0; i < scoreList.length; i++) {
            (ResultMatchesSort[i]["resultat"]) == "Победа" ? scoreColor = "rgba(58, 197, 27, 0.5)"
            : (ResultMatchesSort[i]["resultat"]) == "Ничья" ? scoreColor = "rgba(128, 128, 128, 0.5)"
            : scoreColor = "rgba(200, 9, 9, 0.5)";
    
            scoreList[i].style.backgroundColor = scoreColor;
        }
    }

}


function deleteNull(arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i+=2) {
        newArr.push(arr[i]);
    }

    return newArr;
} 

function deletePastMatch(arr) {
    let next = [];
    for (let i = 0; i < arr.length; i++) {
        let matchDate = new Date(arr[i]["date"]); // Если матч уже прошел, его не должно быть в календаре
        if (today < matchDate) {
            next.push(arr[i])
        }   
    } 

    return next;
}

function deleteNextMatch(arr) {
    let past = [];
    for (let i = 0; i < arr.length; i++) {
        let matchDate = new Date(arr[i]["date"]); // формируем список прошедших матчей
        if (today > matchDate) {
            past.push(arr[i])
        }   
    } 

    return past;
}

function sortByDateByTime(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i][0]);
    }

    array.sort(function(a,b) {
        let date1 = new Date(a["date"] + "T" + a["time"]);
        let date2 = new Date(b["date"] + "T" + b["time"]);

        if (date1 > date2) {
            return 1;
        } else if (date1 < date2) {
            return -1;
        }
        return 0;
    })

    return array;
}

function deleteSheduleCard(fillerArr, filledArr) {
    let j = 0;
    while (filledArr.length - 1 > fillerArr.length) {
        filledArr[fillerArr.length].remove()
        j++
    }

    if (filledArr.length == 1) {
        filledArr[filledArr.length - 1].remove();
        document.getElementById('countdown-title').innerText = 'Победить поможет только чудо';
        document.getElementById('countdown').remove();
        calendar.innerHTML = '<div id="noshedule">Пока нет матчей<br><br><span>¯\\_(ツ)_/¯</span></div>'

    }
}

function fillBackShedule(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["tournament"] != 'Российская Киберфутбольная Профи-Лига') {
            backShedule[i].innerHTML = `<span>${arr[i]["tournament"]}</span><span>${arr[i]["tour"]}</span><span>${arr[i]["date"]} | ${arr[i]["time"]} МСК</span>`;
        } else {
            backShedule[i].innerHTML = `<span>${arr[i]["tournament"]}</span><span>${arr[i]["division"]}</span><span>Тур ${arr[i]["tour"]}</span><span>${arr[i]["date"]} | ${arr[i]["time"]} МСК</span>`;
        }
        }
}

function fillFrontShedule(arr) {
    for (let i = 0; i < arr.length; i++) {
            if (arr[i]["place"] === "Дома") {
                frontShedule[i].innerHTML = '<img src="rkpllogos/Endeavourlogo.png" alt="Home team logo" class="shedule-logo homeTeamLogo">' + '<span>VS</span>' + `<img src=${Logo[arr[i]["opponent"]]} alt="Guest team logo" class="shedule-logo guestTeamLogo">`;
            } else {
                frontShedule[i].innerHTML = `<img src=${Logo[arr[i]["opponent"]]} alt="Home team logo" class="shedule-logo homeTeamLogo">` + '<span>VS</span>' + '<img src="rkpllogos/Endeavourlogo.png" alt="Guest team logo" class="shedule-logo guestTeamLogo">';
            }
    }
}


function fillResultTab(arr) {
    let turnir;

    for (let i = 0; i < arr.length; i++) {

        (arr[i]["tournament"] == "Российская Киберфутбольная Профи-Лига") ? turnir = 'РКПЛ'
        : (arr[i]["tournament"] == "Кубок РКПЛ") ? turnir = "Кубок РКПЛ"
        : (arr[i]["tournament"] == "Кубок Первого дивизиона") ? turnir = "Кубок Первого дивизиона"
        : turnir = "Кубок Второго дивизиона";

        if (arr[i]["tournament"] != 'Российская Киберфутбольная Профи-Лига') {
            if (arr[i]["place"] === "Дома") {
                resultsCard[i].innerHTML = `<div class="res-logo"><img src="rkpllogos/Endeavourlogo.png" alt="Home team logo"></div><div class="results-data-wrapper"><div class="up-data-wrapper"><span>${turnir}</span><span>${arr[i]["tour"]}</span><span>${arr[i]["date"]}</span></div><span class="score">${arr[i]["score"]}</span><a href=${arr[i]["youtube"]} target="_blank"><i class="fa-brands fa-youtube fa-2xl"></i></a></div><div class="res-logo"><img src=${Logo[arr[i]["opponent"]]} alt="Guest team logo"></div>`;
            } else {
                resultsCard[i].innerHTML = `<div class="res-logo"><img src=${Logo[arr[i]["opponent"]]} alt="Home team logo"></div><div class="results-data-wrapper"><div class="up-data-wrapper"><span>${turnir}</span><span>${arr[i]["tour"]}</span><span>${arr[i]["date"]}</span></div><span class="score">${arr[i]["score"]}</span><a href=${arr[i]["youtube"]} target="_blank"><i class="fa-brands fa-youtube fa-2xl"></i></a></div><div class="res-logo"><img src="rkpllogos/Endeavourlogo.png" alt="Guest team logo"></div>`;
            }    
        } else {
            if (arr[i]["place"] === "Дома") {
                resultsCard[i].innerHTML = `<div class="res-logo"><img src="rkpllogos/Endeavourlogo.png" alt="Home team logo"></div><div class="results-data-wrapper"><div class="up-data-wrapper"><span>${turnir}</span><span>${arr[i]["division"]}</span><span>Тур ${arr[i]["tour"]}</span><span>${arr[i]["date"]}</span></div><span class="score">${arr[i]["score"]}</span><a href=${arr[i]["youtube"]} target="_blank"><i class="fa-brands fa-youtube fa-2xl"></i></a></div><div class="res-logo"><img src=${Logo[arr[i]["opponent"]]} alt="Guest team logo"></div>`;
            } else {
                resultsCard[i].innerHTML = `<div class="res-logo"><img src=${Logo[arr[i]["opponent"]]} alt="Home team logo"></div><div class="results-data-wrapper"><div class="up-data-wrapper"><span>${turnir}</span><span>${arr[i]["division"]}</span><span>Тур ${arr[i]["tour"]}</span><span>${arr[i]["date"]}</span></div><span class="score">${arr[i]["score"]}</span><a href=${arr[i]["youtube"]} target="_blank"><i class="fa-brands fa-youtube fa-2xl"></i></a></div><div class="res-logo"><img src="rkpllogos/Endeavourlogo.png" alt="Guest team logo"></div>`;
            }
        }
    }
}
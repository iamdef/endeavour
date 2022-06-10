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

// menu

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
});

// rotate cards

//динамическое присваивание id для вращающихся карточек

var flipCard = document.getElementsByClassName('shedule-card-home');
var flipCards = [];

for (let k = 0; k < (flipCard.length - 1); k++) {
    flipCard[k].id = k + 'card';
    flipCards.push('#' + flipCard[k].id);
}

// переопределение классов для вращения

var $width = $(window).width()

for (let i = 0; i < flipCards.length; i++) {

    let elementFront = flipCards[i] + ' .shedule-logo-wrapper';
    let elementBack = flipCards[i] + ' .back-shedule';

    console.log(elementFront);

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

//drag-scrool by mouse

var players = document.getElementById('gallery');
var calendar = document.getElementById('shedule');

if ($width > 480) {
    $(players).toggleClass('dragscroll');
    $(calendar).toggleClass('dragscroll');
}


function deleteNull(arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i+=2) {
        newArr.push(arr[i]);
    }

    return newArr;
} 

// request to the server

let backShedule = document.getElementsByClassName('back-shedule');
let frontShedule = document.getElementsByClassName('shedule-logo-wrapper');
let today = new Date();

window.addEventListener('load', getJSONCalendarHome, false);

function getJSONCalendarHome() {
    var requestURL = "https://iamdef.ru/json/data.json"
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var dirtyMatchDay = this.response; // сейчас это массив с массивами, внутри которых объект дня матча, через один пустой массив
        var sheduleMatches = deleteNull(dirtyMatchDay); // удаляем пустые массивы, получаем массив массивов с объектами дня матча

        deletePastMatch(sheduleMatches);

        var tournamentList = takeObjProp(sheduleMatches, "tournament");
        var divisionList = takeObjProp(sheduleMatches, "division");
        var tourList = takeObjProp(sheduleMatches, "tour");
        var timeList = takeObjProp(sheduleMatches, "time");
        var dateList = takeObjProp(sheduleMatches, "date");
        var opponentList = takeObjProp(sheduleMatches, "opponent");
        var placeList = takeObjProp(sheduleMatches, "place");
        var nextMatch = dateList[0] + "T" + timeList[0] + ":00"; //2022-01-01T22:30:00 формат даты для таймера

        var deadline = new Date(nextMatch);
        initializeClock('countdown', deadline);

        fillBackShedule(tournamentList, divisionList, tourList, timeList, dateList);
        fillFrontShedule(opponentList, placeList);
    }

}

function deletePastMatch(arr) {
    let pasts = [];
    for (let i = 0; i < arr.length; i++) {
        let matchDate = new Date(arr[i][0]["date"]); // Если матч уже прошел, его не должно быть в календаре
        if (today > matchDate) {
            pasts
            let past = arr.indexOf(arr[i]);
            arr.splice(past, 1);
        }   
    } 

    return arr;
}

//extracts the properties of objects from an array containing an array with these objects - json comes from the server in this format

function takeObjProp(arr, prop) {
    let propArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            propArray.push(arr[i][j][prop]);
        }
    }
    return propArray;
}

function fillBackShedule(tournamentList, divisionList, tourList, timeList, dateList) {
    for (let i = 0; i < backShedule.length; i++) {
            backShedule[i].innerHTML = `<span>${tournamentList[i]}</span><span>${divisionList[i]}</span><span>Тур ${tourList[i]}</span><span>${dateList[i]} | ${timeList[i]} МСК</span>`;
        }
}



function fillFrontShedule(opponentList, placeList) {
    for (let i = 0; i < frontShedule.length; i++) {
            if (placeList[i] === "Дома") {
                frontShedule[i].innerHTML = '<img src="rkpllogos/Endeavourlogo.png" alt="Home team logo" class="shedule-logo homeTeamLogo">' + '<span>VS</span>' + `<img src=${Logo[opponentList[i]]} alt="Guest team logo" class="shedule-logo guestTeamLogo">`;
            } else {
                frontShedule[i].innerHTML = `<img src=${Logo[opponentList[i]]} alt="Home team logo" class="shedule-logo homeTeamLogo">` + '<span>VS</span>' + '<img src="rkpllogos/Endeavourlogo.png" alt="Guest team logo" class="shedule-logo guestTeamLogo">';
            }
    }
}

//countdown

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

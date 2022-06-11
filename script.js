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

        var sheduleMatchesSort = sortByDateByTime(sheduleMatches);

        var nextMatches = deletePastMatch(sheduleMatchesSort);

        deleteSheduleCard(nextMatches, flipCard)

        console.log(nextMatches.length);
        console.log(flipCard.length);

        var nextMatchTime = nextMatches[0]["date"] + "T" + nextMatches[0]["time"] + ":00"; //2022-01-01T22:30:00 формат даты для таймера

        var deadline = new Date(nextMatchTime);
        initializeClock('countdown', deadline);

        fillBackShedule(nextMatches);
        fillFrontShedule(nextMatches);
    }

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
            backShedule[i].innerHTML = `<span>${arr[i]["tournament"]}</span><span>${arr[i]["division"]}</span><span>Тур ${arr[i]["tour"]}</span><span>${arr[i]["date"]} | ${arr[i]["time"]} МСК</span>`;
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

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

var $width = $(window).width();
var gallery = document.getElementById('gallery-mobile');

if ($width > 480) {
    $(gallery).toggleClass('dragscroll');
}

// menu

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
});

$(document).ready(function(){
    $('.slick-slider').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      autoplay: true,
      prevArrow: '<img src="up-arrow.svg">',
      nextArrow: '<img src="down-arrow.svg">',
    });
  });

  (function($) {
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);

/* <canvas id="myChart" width="400" height="400"></canvas> */
const matches = document.getElementById('matches');
const strikes = document.getElementById('strikers');
const assists = document.getElementById('assists');
const otbor = document.getElementById('otbor');
const perexvat = document.getElementById('perexvat');
const passes = document.getElementById('passes');
let aspectRatio;

if ($width > 768) {
    aspectRatio = 2
} else {
    aspectRatio = 1;
}

const MATCHES = new Chart(matches, {
    type: 'bar',
    data: {
        labels: ['xolodetzzz', 'THE_Doctor_Art', 'HarutAdyan', 'R_Kanj228', 'DavSum', 'ND102030', 'MasterJediko', 'Adzel', 'Rabchevsky', 'Selya', 'just_alyosha', 'DDDDENNYYYY'],
        datasets: [{
            label: 'Матчей за клуб',
            data: [2, 4, 3, 5, 2, 3, 6, 3, 12, 5, 7, 8],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: aspectRatio,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

const STRIKES = new Chart(strikes, {
    type: 'bar',
    data: {
        labels: ['xolodetzzz', 'THE_Doctor_Art', 'HarutAdyan', 'R_Kanj228', 'DavSum', 'ND102030', 'MasterJediko', 'Adzel', 'Rabchevsky', 'Selya', 'just_alyosha', 'DDDDENNYYYY'],
        datasets: [{
            label: 'Бомбардиры',
            data: [2, 4, 3, 5, 2, 3, 6, 3, 12, 5, 7, 8],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: aspectRatio,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

const ASSISTS = new Chart(assists, {
    type: 'bar',
    data: {
        labels: ['xolodetzzz', 'THE_Doctor_Art', 'HarutAdyan', 'R_Kanj228', 'DavSum', 'ND102030', 'MasterJediko', 'Adzel', 'Rabchevsky', 'Selya', 'just_alyosha', 'DDDDENNYYYY'],
        datasets: [{
            label: 'Ассистенты',
            data: [2, 4, 3, 5, 2, 3, 6, 3, 12, 5, 7, 8],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: aspectRatio,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

const OTBOR = new Chart(otbor, {
    type: 'bar',
    data: {
        labels: ['xolodetzzz', 'THE_Doctor_Art', 'HarutAdyan', 'R_Kanj228', 'DavSum', 'ND102030', 'MasterJediko', 'Adzel', 'Rabchevsky', 'Selya', 'just_alyosha', 'DDDDENNYYYY'],
        datasets: [{
            label: 'Отборы',
            data: [2, 4, 3, 5, 2, 3, 6, 3, 12, 5, 7, 8],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: aspectRatio,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

const PEREXVAT = new Chart(perexvat, {
    type: 'bar',
    data: {
        labels: ['xolodetzzz', 'THE_Doctor_Art', 'HarutAdyan', 'R_Kanj228', 'DavSum', 'ND102030', 'MasterJediko', 'Adzel', 'Rabchevsky', 'Selya', 'just_alyosha', 'DDDDENNYYYY'],
        datasets: [{
            label: 'Перехваты',
            data: [2, 4, 3, 5, 2, 3, 6, 3, 12, 5, 7, 8],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: aspectRatio,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

const PASSES = new Chart(passes, {
    type: 'bar',
    data: {
        labels: ['xolodetzzz', 'THE_Doctor_Art', 'HarutAdyan', 'R_Kanj228', 'DavSum', 'ND102030', 'MasterJediko', 'Adzel', 'Rabchevsky', 'Selya', 'just_alyosha', 'DDDDENNYYYY'],
        datasets: [{
            label: 'Точность передач',
            data: [2, 4, 3, 5, 2, 3, 6, 3, 12, 5, 7, 8],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: aspectRatio,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

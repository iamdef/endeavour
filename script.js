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

// menu

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
});

// rotate cards

var $width = $(window).width()

var flipCards = ['#firstCard', '#secondCard', '#thirdCard', '#fourthCard'];


for (let i = 0; i < flipCards.length; i++) {

    let elementFront = flipCards[i] + ' .shedule-logo-wrapper';
    let elementBack = flipCards[i] + ' .back-shedule';

    if ($width < 480) {
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





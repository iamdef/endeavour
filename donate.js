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

function copyToClipboard(el) {
    var $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}

$("#btc-btn").on("click", function() {
  copyToClipboard("#btc");
});

$("#usdt-btn").on("click", function() {
  copyToClipboard("#usdt");
});
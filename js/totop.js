$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    /*
     * 在这里我给obj添加一个自定义属性。className可能会影响原有的class
     * 三元运算使代码更简洁
     */
    if(!$('#toc-widget')[0]){return}
    var $prevSibling = $($('#toc-widget').prev())
    var ot = $prevSibling[0].offsetTop + $prevSibling[0].offsetHeight+180
    $('#toc-widget')[0].setAttribute("data-fixed",st >= ot?"fixed":"");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

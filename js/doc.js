$(document).ready(
    function b() {
        $(".hasSub").click(function () {
                $(this).siblings(".subMenu").slideToggle().css("display", "block")
            }
        )
    }
    );
$(document).ready(function (){
    $("a[href^='#']").click(function (){
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
    });
});
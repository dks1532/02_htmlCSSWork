$(function() {
     // 각각 내려오기
    $(".nav>li").mouseover(function() {
    // mouseover는 내부안에 들어오면 mouseenter와 비슷
        $(this).children(".submenu").stop().slideDown(); // .stop(): 다른 이벤트가 발생되면 스택에 쌓여진 것을 지우고 처음상태로 돌아감
    });
    $(".nav>li").mouseout(function() {
        // mouseover는 내부안에 들어오면 mouseenter와 비슷
            $(this).children(".submenu").stop().slideUp();
    });

    // 전체 내려오기
    /* $("nav").mouseover(function() {
        $(".submenu").stop().slideDown();
    });
    $("nav").mouseout(function() {
        $(".submenu").stop().slideUp();
    }) */

    const x = $("#imgslide>div");
    setInterval(function() {    //setInterval() 몇초간격으로 계속 실행되도록 할때 사용
        if(x.position().left == -2000) {
        x.animate({left:"-=1000px"}, function() {
            x.css("left", 0);
            })
        } else {
            x.animate({left:"-=1000px"});
        }
    }, 2000)
})
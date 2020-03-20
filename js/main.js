$(document).ready(function() {
    let heightWindow = $(window).height();
    $("header").height(heightWindow);

    $(".item").hover(function() {
        $(this).addClass("shadow");
    }, function() {
        $(this).removeClass("shadow");
    })
    $(".test-cofid ").hide();
    $(".welcom-test").show();
    $("#start-sign").click(function() {
        $(".test-cofid").hide();
        $("#sign-test").show();

    })
    $("#start-quesion").click(function() {
        $(".test-cofid").hide();
        $("#start-quesion-one").show();

    })
    $("#yes-q1").click(function() {
        $(".test-cofid").hide();
        $("#gotohospital").show();

    })
    $(".reset").click(function() {
        $(".test-cofid").hide();
        $("#sign-test").show();

    })
    $("#no-q1").click(function() {
        $(".test-cofid").hide();
        $("#start-quesion-two").show();
    })
    $("#no-q2").click(function() {
        $(".test-cofid").hide();
        $("#start-quesion-three").show();
    })
    $("#no-q3").click(function() {
        $(".test-cofid").hide();
        $("#start-quesion-four").show();
    })
    $("#no-q4").click(function() {
        $(".test-cofid").hide();
        $("#resultGood").show();
    })
    $("#yes-q2").click(function() {
        $(".test-cofid").hide();
        $("#calltohospital").show();
    })
    $("#yes-q3").click(function() {
        $(".test-cofid").hide();
        $("#start-quesion-infection").show();
    })

    $("#yes-q4").click(function() {
        $(".test-cofid").hide();
        $("#calltohospital").show();
    })
    $("#yes-infection").click(function() {
        $(".test-cofid").hide();
        $("#calltohospital").show();
    })

    $("#no-infection").click(function() {
        $(".test-cofid").hide();
        $("#calltohospital").show();
    })
    $('.js-example-basic-single1 , .js-example-basic-single2').select2({
        placeholder: "Select a state"

    });


    $(window).scroll(function() {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > 10) {
            $("nav").addClass("shadow")

        } else {
            $("nav").removeClass("shadow");
        }
    })
    let dirPage = $("html").attr("dir");
    if (dirPage == "rtl") {
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 50,
            nav: true,
            touchDrag: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    } else {
        $('.owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 50,
            nav: true,
            touchDrag: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }
    $(".owl-prev").empty();
    $(".owl-prev").append("<i class='fas fa-arrow-left '></i>")
    $(".owl-next").empty();
    $(".owl-next").append("<i class='fas fa-arrow-right'></i>")
    $(".owl-next").addClass("shadow");
    $(".owl-prev").addClass("shadow");

})
$(function(){
    //모달 제이쿼리
    $('.search').click(function(){
        $('#modal_wrap').fadeIn('slow');
        $('#modal').addClass('modal_ani');
    });
    $('.modal_close').click(function(){
        $('#modal_wrap').fadeOut(function(){
            $('input[type=checkbox]').prop("checked", false);
        });
    });

    //메뉴 제이쿼리
    $('#bot_right>li').mouseenter(function(){
        $('#bot_right>li>a').removeClass('bot_on');
        $(this).find('a').addClass('bot_on');
        $('.sub_bg').stop().slideDown('linear');

        var i = $(this).index();

        $('.bot_sub').stop().fadeOut('fast');
        $('.bot_sub').eq(i).stop().fadeIn();
    });

    $('#bot_head').mouseleave(function(){
        $('#bot_right>li>a').removeClass('bot_on');
        $('.bot_sub').stop().fadeOut('fast');
        $('.sub_bg').stop().slideUp('linear');
    });

    //배너 제이쿼리

    var num = 0;
    function ban_slide(){
        
    }
    $('#ban_dot li').first().addClass('dot_on');

    $('#ban_dot li').click(function(){
        $('#ban_dot li').removeClass('dot_on');
        $(this).addClass('dot_on');

        var pageNumber = $(this).index();
        var m = -(pageNumber * 2000);

        $('#ban_imgs li').stop().animate({
            left: m
        });
        num = pageNumber;
    });

    $('#prev').click(function(){
        num = num - 1;
        var m = -(num * 2000);
        $('#ban_imgs li').stop().animate({
            left : m
        });

        if(num < 0){
            num = 5;
        }

        $('#ban_dot li').eq(num).trigger('click');
    });

    $('#next').click(function(){
        num = num + 1;
        var m = -(num * 2000);
        $('#ban_imgs li').stop().animate({
            left : m
        });

        if(num > 5){
            num = 0;
        }

        $('#ban_dot li').eq(num).trigger('click');
    });

    // event 닷 버튼 슬라이드
    $('#ev_dot li').first().addClass('ev_on');

    $('#ev_dot li').click(function(){
        $('#ev_dot li').removeClass('ev_on');
        $(this).addClass('ev_on');

        var pageNumber = $(this).index();
        var m = -(pageNumber * 268);

        $('.ev_item').stop().animate({
            left : m
        });
    });
});

let midText1 = document.getElementsByClassName("midText1");
let midText2 = document.getElementsByClassName("midText2");
let midImg = document.getElementsByClassName("mid_img");

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY", value);
    // mid_banner1 슬라이드 효과
    if(value < 1000){
        midText1[0].style.animation = 'disappear 2s ease-out';
    }else{
        midText1[0].style.animation = 'slide 2s ease-out';
    };

    if(value < 1000){
        midText2[0].style.animation = 'disappear2 2s ease-out';
    }else{
        midText2[0].style.animation = 'slide2 2s ease-out';
    };
    // mid_banner2 로테이트 효과

    if(value < 2011){
        midImg[0].style.animation = 'mid_rotBack 1s forwards';
    }else{
        midImg[0].style.animation = 'mid_rot 1s forwards'
    };

    if(value < 2011){
        midImg[1].style.animation = 'mid_rotBack 1s forwards';
    }else{
        midImg[1].style.animation = 'mid_rot 1s forwards'
    };
});

// 마지막 던킨이미지 무한루프 슬라이드

var slides = document.querySelector('.imgSlide'),
    slide = document.querySelectorAll('.imgSlide li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 260,
    slideMargin= 0;

makeClone();

// 이미지 앞 뒤로 복사
function makeClone(){
    for(var i = 0; i<slideCount; i++){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    };
    for(var i = slideCount -1; i>=0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('imgani');
    },100);
};

function updateWidth(){
    var currentSlides = document.querySelectorAll('.imgSlide li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount + 'px';
    slides.style.width = newWidth;
};

function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
};

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    if(currentIdx == slideCount || currentIdx == -slideCount){
        setTimeout(function(){
            slides.classList.remove('imgani');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('imgani');
        }, 600);
    }
};

var timer = undefined;

function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        }, 1000);
    }
}
autoSlide();
/*function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}
slides.addEventListener('mouseenter',function(){
    autoSlide();
});
slides.addEventListener('mouseleave',function(){
    stopSlide();
});*/


// 패밀리 사이트 화살표

$('#footer_site').click(function(){
    if($(this).hasClass('sel_on')){
        $('#footer_site').removeClass('sel_on')
    }else{
        $('#footer_site').removeClass('sel_on');
        $(this).addClass('sel_on');
    }
});
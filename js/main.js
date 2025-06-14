$(document).ready(function(){//start
  AOS.init();

  //.depth2 숨기기
  $(".depth2, .dep-bg").hide();
  $("header nav .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
    $(".dep-bg").stop().fadeIn();
  });
   $("header nav .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
    $(".dep-bg").stop().fadeOut();
  });
  
  //.ham을 누르면 .mgnb-wrap 나오기
  $(".mgnb-wrap ").hide();
  $(".ham").click(function(){
    $(this).toggleClass("active");
    $(".mgnb-wrap ").fadeToggle();
    $("body").toggleClass("active");
  });
 //.mdepth2를 숨기기
  $("header .mdepth2").hide();
  //.mgnb > li 를 마우스오버하면 각각의 자식 .mdepth2가 나올것
  $("header .mgnb > li").hover(function(){
    $(this).children(".mdepth2").stop().slideToggle();
  });


  
  //event-list2, event-list3, .com-btn숨기기
  $(".event-list2, .event-list3, .com-btn-more2, .more").hide();
  //.com-btn-more를 누르면 event-list2, 나오기
  $(".com-btn-more1").click(function(){
    $(".event-list2").stop().slideDown();
    $(".com-btn-more2").show();
    $(".com-btn-more1").hide();
  });
  //.com-btn-more를 누르면 event-list3, .com-btn 나오기
   $(".com-btn-more2").click(function(){
    $(".event-list3").stop().slideDown();
    $(".more").show();
    $(".com-btn-more2").hide();
  });




  //스와이퍼 돌리기
const photo_collection = new Swiper(".photo-collection", {
    autoplay: {
      // 자동슬라이드
      delay: 0, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 6000,
    loop: true,
    breakpoints: { // 반응형 슬라이드
    574: {
      // 1400px 이상
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      // 1400px 이상
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1400: {
      // 1400px 이상
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
 });


 const video_collection = new Swiper(".video-collection", {
    autoplay: {
      // 자동슬라이드
      delay: 0, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 6000,
    loop: true,
    breakpoints: { // 반응형 슬라이드
    574: {
      // 1400px 이상
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      // 1400px 이상
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1400: {
      // 1400px 이상
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
 });


 //아코디언 배너

  $("#program ul li").eq(0).addClass("active");
  $("#program ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });

  
  

  //sub -event
    //#brand tab 메뉴
  //.brand-img 의 첫번째 빼고 숨김
  $(".event .event-content .event-tab > li").not(":first").hide();
  //".event .event-name ul li" 를 클릭하면 다음과 같은 일이 일어남
  // 1. 선택한 li만 active가 붙고 나머지는 active가 없어져야함
  // 2. 선택한 li의 순번을 담을 변수를 하난 생성
  // 3. .event .event-img ul li 중에 순번과 동일한 요소만 보여주고 나머지는 숨김
  $(".event .event-name ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $(".event .event-content .event-tab > li").eq(aa).fadeIn().siblings().hide();
  });
});//end
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

  
  
});//end
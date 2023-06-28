window.addEventListener("load",function(){
  new Swiper('.swiper1 .swiper', {
      // Optional parameters
      slidesPerView:5 ,   //슬라이드 개수
      spaceBetween: 30,    //슬라이드 간격 px
      loop:true,            //반복
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
})


window.addEventListener("load",function(){
  new Swiper('.swiper2 .swiper', {
      // Optional parameters
      slidesPerView:3 ,   //슬라이드 개수
      spaceBetween: 30,    //슬라이드 간격 px
      loop:true,            //반복
      autoplay: {            //2초 간격으로 자동재생
        delay: 2000
      },
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
})

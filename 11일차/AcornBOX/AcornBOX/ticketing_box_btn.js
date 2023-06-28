let cnt = 0;
function slideTicketBox(){
    cnt ++ 
    let ticketingBox = document.querySelector(".ticketing_box");
    let btn = document.querySelector(".ticketing_box_btn__icon")

    if(cnt % 2 == 0){
    ticketingBox.animate(
        {
          transform: [
            'translateX(-120%)',
            'translateX(0px)'
            
          ]
        },
        {
          duration: 500, // 밀리초 지정
          fill: 'forwards', // 종료 시 속성을 지님
          easing: 'ease' // 가속도 종류
        }
      )
        btn.style.backgroundImage = "url('http://cdn.onlinewebfonts.com/svg/img_403008.png')";
        btn.style.backgroundPosition = "center";
        btn.style.backgroundSize = "cover";
        btn.style.transform= "scaleX(1)";
     
    }else{
        ticketingBox.animate(
            {
              transform: [
                'translateX(0px)',
                'translateX(-120%)'
              ]
            },
            {
              duration: 500, // 밀리초 지정
              fill: 'forwards', // 종료 시 속성을 지님
              easing: 'ease' // 가속도 종류
            }
          )   
          btn.style.backgroundImage = "url('http://cdn.onlinewebfonts.com/svg/img_403008.png')";
          btn.style.backgroundPosition = "center";
          btn.style.backgroundSize = "cover";
          btn.style.transform= "scaleX(-1)";
    }

}
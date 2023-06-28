    //  <!-- 예매상자 영화포스터 -->
    let images = [
        "./images/movie_chart1.jpg", 
        "./images/movie_chart2.jpg", 
        "./images/movie_chart3.jpg", 
        "./images/movie_chart4.jpg", 
        "./images/movie_chart5.jpg"
        
    ]
    function init(){
        let leftImg = document.querySelector("#left_img")
        let middleImg = document.querySelector("#middle_img")
        let rightImg = document.querySelector("#right_img")

        leftImg.style.backgroundImage = `url(${images[images.length-1]})`
        middleImg.style.backgroundImage = `url(${images[0]})`
        rightImg.style.backgroundImage = `url(${images[1]})`
    }

    let cnt_2=0;
    let left_cnt = cnt_2-1;
    let right_cnt = cnt_2+1;
    function movie_right_btn(){

        cnt_2++;
        cnt_2 = cnt_2 % images.length
        left_cnt++;
        left_cnt = left_cnt % images.length
        right_cnt++;
        right_cnt = right_cnt % images.length

        let leftImg = document.querySelector("#left_img")
        let middleImg = document.querySelector("#middle_img")
        let rightImg = document.querySelector("#right_img")

        leftImg.style.backgroundImage = `url(${images[left_cnt]})`
        middleImg.style.backgroundImage = `url(${images[cnt_2]})`
        rightImg.style.backgroundImage = `url(${images[right_cnt]})`
    }
    function movie_left_btn(){
        cnt_2--;
        cnt_2 = cnt_2 + images.length
        cnt_2 = cnt_2 % images.length
        left_cnt--;
        left_cnt = left_cnt + images.length
        left_cnt = left_cnt % images.length
        right_cnt--;
        right_cnt = right_cnt + images.length
        right_cnt = right_cnt % images.length

        let leftImg = document.querySelector("#left_img")
        let middleImg = document.querySelector("#middle_img")
        let rightImg = document.querySelector("#right_img")

        leftImg.style.backgroundImage = `url(${images[left_cnt]})`
        middleImg.style.backgroundImage = `url(${images[cnt_2]})`
        rightImg.style.backgroundImage = `url(${images[right_cnt]})`
    }
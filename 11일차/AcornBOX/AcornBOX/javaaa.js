/*
1.로그인/비회원예매.비회원예매 확인 > 페이지 이동
ㄴ 위에 버튼 색바뀌기
2. 로그인/비회원예매 > 유효성검사 if와 else if
3.휴대폰으로 인증 => popup 창으로 연결

번외. 4번 레이어팝업 => 회원가입 축하드립니다
      5번 레이어 팝업 => 예매가 조회되지 않습니다.

*/

function loginCheck() {
    let loginId = document.querySelector(".login-input__id input[type='text']");
    // alert(loginId.value);
    let loginPw =document.querySelector(".login-input__pw input[type='password']");
    // alert(loginPw.value);
    let msg =document.querySelector("#msg");

    msg.innerHTML ="";
    if( loginId.value == ""){
        msg.innerHTML="아이디입력하세요"
        loginId.focus();
   }else if( loginPw.value ==""){
       msg.innerHTML="비번입력하세요"
       loginPw.focus();
   }else{
       alert("로그인 성공");
        location.href="AcornBOX/index.html";
   }


}
/*
페이지 넘어가면서 버튼의 색깔을 바꾸려고 햇는디.안대네요
절대 울지 않아요... 


*/

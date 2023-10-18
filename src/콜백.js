// 콜백(callback) : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행 될 때 호출되는 함수
// 콜백 함수는 비동기적이 작업을 처리할 때 많이 사용
function cry() {
    console.log("cry");
}
function sing() {
    console.log("sing");
}
function dance() {
    console.log("dance");
}

// 일반 함수로 호출하기
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
 checkMood("sad");

// 콜백 함수
function checkMoodCallback(mood, goodCall, badCall) {
    if(mood === "good") goodCall();
    else badCall();
}
checkMoodCallback("good", dance, cry);

// 타이머 설정과 Callback 
function buyTobe(item, price, quantity, callback) {
    console.log(item + "상품을" + quantity + "개 골라서 점원에게 주었습니다.");
    console.log("계산이 필요 합니다.");
    setTimeout(function() {
        let total = price * quantity;
        callback(total);
    }, 2000);
}
function pay(n) {
    console.log("지불할 금액은 :  " + n + "입니다.");
}
buyTobe("맥북에어(스타라이트)", 1300000,2,pay); 
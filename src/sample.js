let isRed = false;
const head = document.querySelector("#head-line");
head.onclick = function() {
    if(!isRed) {
        head.style.color = "red";
        console.log("현재 컬러는 레드 입니다.")
    } else {
        head.style.color = "blue";
        console.log("현재 컬러는 블루 입니다.")
    }
    isRed = !isRed;
    }


let jumin;
while(true) {
    jumin = prompt("주민등록번호 : ","");
    if(jumin.length != 14) alert("입력 오류 : 다시 입력 하세요.");
    else {
        if(jumin.indexOf("-") === -1) alert("하이픈이 누락되었습니다.");
        else break;
    }
}
let gender = jumin.charAt(7);
let genderStr;
if(gender == "1" || gender =="3") genderStr = "남성";
else genderStr = "여성";

let birthYear = jumin.subString(0,2);
if(gender == "1" || gender == "2") {
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear;
birthYear = Number(birthYear);

const date = new Date();
const currYear = date.getFullYear();
let age = currYear - birthYear;

document.write("<p class='box'>성별 : " + genderStr + "<br>" + "나이 : " + age + "</p>");

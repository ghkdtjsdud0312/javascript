let isIdValid = false;
let isPwValid = false;
let isEmailValid = false;
let isPhoneValid = false;

const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexEmail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

let idBtn = document.querySelector("#id_confirm");
let pwBtn = document.querySelector("#pw_confirm");
let emailBtn = document.querySelector("#email_confirm");
let telBtn = document.querySelector("#phone_confirm");

let idCheck = document.querySelector(".id_input_check");
let pwCheck = document.querySelector(".pw_input_check");
let emailCheck = document.querySelector(".email_input_check");
let telCheck = document.querySelector(".phone_input_check");

idBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const val = document.getElementById("id_txt").value;
    checkInput(val,"id");
});
pwBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const val = document.getElementById("pw_txt").value;
    checkInput(val,"pw");
});
mailBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const val = document.getElementById("email_txt").value;
    checkInput(val,"email");
});
telBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const val = document.getElementById("tel_txt").value;
    checkInput(val,"tel");
});

function displayPhrase(type, isvalid) {
    (isvalid) ? type.textContent = "사용 가능 합니다." : type.textContent = "입력 조건이 맞지 않습니다.";
    (isvalid) ? type.style.color = "blue" : type.style.color = "red";
}
function checkInput(val, type) {
    switch(type) {
        case "id" :
            if (regexId.test(val)) {
                isIdValid = true;
                displayPhrase(idcheck, true);
            }else {
                isIdValid = false;
                displayPhrase(idCheck, false);
            }
            break;

        case "pw" :
            if(regexPw.test(val)) {
                isPwValid = true;
                displayPhrase(pwCheck, true);
            }else {
                isPwValid = false;
                displayPhrase(pwCheck, false);
            }
            break;

        case "email" :
            if(regexEmail.test(val)) {
                isEmailValid = true;
                displayPhrase(emailCheck, true);
            }else {
                isEmailValid = false;
                displayPhrase(emailCheck, false);
            }
            break;

            case "tel" :
                if(regextel.test(val)) {
                    istelValid = true;
                    displayPhrase(telCheck, true);
                }else {
                    istelValid = false;
                    displayPhrase(telCheck, false);
                }
                break;
    }
    if (isIdValid && isPwValid && isEmailValid && isPhoneValid) {
        let regRegBtn = document.querySelector(".reg_req_btn");
        regRegBtn .style.background = "blue";
    }
}
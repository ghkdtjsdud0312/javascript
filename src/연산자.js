// 비교 연산자
// 동등 연산자 (숫자와 문자를 같은 값으로 인식)
console.log(1 == '1');
console.log(1 == true);
console.log(0 == false);

// 부등연산자 (숫자와 문자를 같은 값으로 인식)
console.log(1 != '1');
console.log(1 != true);
console.log(0 != false);

// 일치 연산자 (===) : 두 값이 같은지를 비교하는데 데이터 타입도 함께 확인(숫자와 문자를 같은 값으로 인식 안 함/ 데이터 타입도 확인하기 때문)
console.log(1 === '1');
console.log(1 === true);
console.log(0 === false);
// 부동일치 연산자 (!==)
console.log(1 !== '1');
console.log(1 !== true);
console.log(0 !== false);

// 형변환 : 묵시적 형변환(컴퓨터가 유리한 방향으로 바꿔줌)과 명시적 형변환(개발자가 의도있어 바꿈)이 있음
let num1 = 10 + Number("10");
console.log(num1);



// 반복문 : 자바스크립트에서 반복문은 while, do-while, for, for-in, for-of
let brands = ["애플", "구글", "페이스북","아마존","삼성전자"];
for(let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}

// 고객이 구입 가능한 음료 리스트 구하기
let productlist = [
    {name : "래쓰비",
     price : 700},
    {name : "티오피",
    price : 1000},
    {name : "비타500",
    price : 800},
    {name : "포카리스웨트",
    price : 1000},
    {name : "파워에이드",
    price : 1200}
]; // 키와 값을 넣을 수 있다.
let inputCoin = 800;
let outputList = []; // 빈 배열 생성
for(let i = 0; i < productlist.length; i++) {
    if(productlist[i].price <= inputCoin) {
        outputList.push(productlist[i]); // 배열의 마지막에서 새로운 요소 추가
    }
}
console.log(outputList);

// for-in : 객체의 프로퍼티를 열거하는데 사용
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};
for(let key in person) {
    console.log(person[key]); // key값을 이용해 해당하는 값 출력
}

// for-of : 향상된 for문과 유사
let brand = ["애플", "구글", "페이스북","아마존","삼성전자"];
for(let e of brand) {
    console.log(e);
}

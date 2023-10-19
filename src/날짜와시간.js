// 날짜와 시간을 다루는 Date 객체
const date = new Date();
console.log(date); // 영국 시간에 맞춰 나와서 시간이 9시간 늦게 나옴

// 이렇게 사용하면 헷갈림
 const date1 = new Date(2022,11,27); // 달은 1부터 시작해서 날짜가 하나 밀림
 console.log(date1);

const date2 = new Date("2022-12-25");
console.log(date2);

const date3 = new Date("2022/12/25/18:00:00");
console.log(date3);

const myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth()+1); // 현재 월 출력
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력


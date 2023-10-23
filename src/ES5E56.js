// forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메소드
// map() : 배열의 모든 요소를 순회면서 새로운 배열을 만듦
// filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 만듦
// reduce() : 배열의 모든 요소를 순회하며, 순회 과정에서 누적 값을 사용하여 하나의 결과 값을 만듦

const numbers = [1,2,3,4,5,6,7];
numbers.forEach(e => console.log(e));

const squares = numbers.map(e => e * e);
console.log(squares);

const even = numbers.filter(e => e % 2 == 0);
console.log(even);

// 입력 받은 값을 하나씩 소모하면서 더해 나가는 것 
const sum = numbers.reduce((total, e) => total + e, 0);
console.log(sum);
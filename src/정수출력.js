// n개의 정수를 입력 받아 n * n 출력
// css 적용해서 출력
// 3
// 1 2 3
// 4 5 6
// 7 8 9

let n = prompt("정수를 입력하세요 : ","");

n = Number(n);

for(let i = 1; i <= n * n; i++) {
    document.write("<span class='number'>"+ i + " " + "</span>");
    if(i % n == 0) document.write("<br>");
}


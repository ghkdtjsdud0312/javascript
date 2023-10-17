// 3개의 수에서 제일 큰 수, 제일 작은 수 찾기
// 입력은 propmt()
// propmt()로 입력 받은 값은 문자열로 반환 되므로 Number()로 형변환 필요
// 화면 출력은 document.write()를 사용하면 되고, 출력문 내부에 html 사용 가능
let a,b,c,tmp;
let min, max;

tmp=prompt("첫번째 수 입력 : ","");
a = Number(tmp)
tmp=prompt("두번째 수 입력 : ","");
b= Number(tmp)
tmp=prompt("세번째 수 입력 : ","");
c=Number(tmp);

// let a = Number(prompt("첫 번째 수 입력 : ",""));
// let b = Number(prompt("두 번째 수 입력 : ",""));
// let c = Number(prompt("세 번째 수 입력 : ",""));

if(a>b) {
   if(a > c) max = a;
   else max = c;
} else {
    if(b>c) max= b;
    else max = c;
}
if(a>b) {
    if(b > c) min = c;
   else max = b;
} else{
    if(a > c) min = c;
   else min = a;
}

document.write("<h3>제일 큰 값 : " + max + "<h3>");
document.write("<h3>제일 작은 값 : " + min + "<h3>");

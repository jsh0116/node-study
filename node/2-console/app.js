console.log('logging...');
console.clear(); // 이전 로그 삭제

// log level
console.log('log'); // 개발용
console.log('info'); // 정보 남기고 싶을때
console.log('warn'); // 경보
console.log('error'); // fatal error (user, system error)

// assert
// 1번째 param이 false일때만 로그출력
console.assert(2 === 3, 'not same');
console.assert(2 === 2, 'same');

const student = {name:'John', age:26, company: {name: 'A'}}
console.log(student)
console.table(student)
// 출력은 log와 동일, 옵션을 전달해서 추가적으로 컨트롤 가능
// 중첩된 오브젝트를 어디선까지 보여줄껀지 설정가능
console.dir(student, {showHidden: true, colors: false, depth: 1});

// measuring time
console.time('for loop');
for(let i=0; i<10; i++)
{
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
// console.countReset('a function'); // count reset
a();

//trace : Debugging에 유용
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();
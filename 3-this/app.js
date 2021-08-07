// 브라우저의 this와 node에서 this는 살짝 다르다
function hello() {
    console.log(this); // this가 global인것을 확인
    console.log(this === global)
}
hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunc() {
        console.log('---- class ----')
        console.log(this);
        console.log(this === global); // 클래스에서 this란 자기 자신을 가리킨다
    }
}

const a = new A(1);
a.memberFunc();

console.log(' ---- global scope ----');
console.log(this); // 적어도 global object는 아니다
console.log(this === module.exports) // node에서 this는 모듈.export를 가리키고 있다
// this는 어디에서 선언되었느냐에 따라 다르게 사용된다
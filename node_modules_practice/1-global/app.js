// node용인지 브라우저용인지 VS가 잘모르기때문에 알려주도록 한다
const fs = require('fs'); // node 모듈이다
console.log(global)
global.hello = () => {
    console.log('hello'); // global 변수 생략 가능
}

global.hello();
hello(); // global 변수 생략 가능
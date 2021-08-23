// 출력 결과 task Queue에 어떤 콜백 함수가 순차적으로 들어오는지 알 수 있다.
// setTimeout과 setImmediate는 사실 큰 차이는 없다
console.log('code1');
console.time('Timeout 0'); // timeout이 0일 때 얼마나 시간이 수행되는지 확인
setTimeout(() => {
    console.timeEnd('Timeout 0');
    console.log('setTimeout 0');
}, 0);

// for(let i=0; i<100; i++) {} // test용 for loop

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
}, 0);

console.log('code3');
process.nextTick(() => {
    console.log('nextTick');
}, 0);
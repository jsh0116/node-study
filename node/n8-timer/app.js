// call stack과 task Queue를 넘나들 수 있는 timer
let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval);
}, 6000);
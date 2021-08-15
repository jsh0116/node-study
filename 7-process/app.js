const process = require('process');

// 현재 동작하고 있는 node process 정보 얻어오기
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// nodeJS안에 콜백 함수 전달
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// task queue에 다른 콜백 함수가 있어도 이 함수를 큐에 제일 먼저 넣는다 
process.nextTick(() => {
    console.log('nextTick');
})

for(let i=0; i<100; i++) {
    console.log('for loop');
}

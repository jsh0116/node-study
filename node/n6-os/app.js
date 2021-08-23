// 내 서버가 동작하고 있는 환경의 정보를 얻어올때 os 모듈을 사용한다
const os = require('os');

// os마다 새로 줄바꿈할때마다 달라지는 문자열들이 있다
// End Of the Line
console.log(os.EOL === '\n'); // MAC
console.log(os.EOL === '\r\n'); // Window

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
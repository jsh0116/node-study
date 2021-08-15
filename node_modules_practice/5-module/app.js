import { increase, getCount } from './counter.js';
// counter.js에서 export 된 모든 함수들을 전부다 가져오는 것을 counter라고 칭하여 가져온다
// import * as counter from './counter.js';

increase();
increase();
increase();
console.log(getCount());
//console.log(counter.getCount());

// 이럴 필요없음
// const counter = require('./counter')
// counter.increase();
// console.log(counter.getCount());
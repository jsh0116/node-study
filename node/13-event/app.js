const eventEmitter = require('events');
// nodejs 자체로 사용 가능 or 직접 만들어서 사용 가능
const emitter = new eventEmitter();
const cb1 = (args) => {
    console.log('first callback - ', args);
};
emitter.on('seunghoon', cb1);

emitter.on('seunghoon', (args) => {
    console.log('second callback - ', args);
});

// 이벤트가 발생할 때마다 등록된 2가지 콜백 함수를 순차적으로 호출
emitter.emit('seunghoon', { message: 1 });
emitter.emit('seunghoon', { message: 2 });
emitter.removeListener('seunghoon', cb1); // 등록된 콜백 함수를 중지하는 것이 가능;
// emitter.removeAllListener(); // 모든 이벤트에 대해서 등록된 콜백 함수를 호출하지 않음
emitter.emit('seunghoon', { message: 3 });


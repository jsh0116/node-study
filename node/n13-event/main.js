const logger = require('./logger.js');

// const eventEmitter = require('events');
// const emitter = new eventEmitter();
// log라는 event를 듣고 있지만 누가 이벤트를 emit하는 emitter가 없는 상황
// 듣고 있던 emitter와 다른 파일에서 emit하고 있는 emitter는 서로 다른 객체다
// event가 발생하고 해당 event를 듣기 위해서는 동일한 event emitter 객체를 사용해야 한다.

const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log(event);
})

emitter.log(() => {
    console.log('doing something!');
});
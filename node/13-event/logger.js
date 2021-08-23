const EventEmitter = require('events');

// event emitter는 한번 객체를 만들면 그 객체 내에서 발생하는 event에 한해서 들을 수 있다
// 여러가지 event emitter 객체를 만들면 다른 emitter에서 발생하는 event는 다른 emitter에서 들을 수 없다.
class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started...');
        callback();
        this.emit('log', 'ended!');
    }
}

module.exports.Logger = Logger;

// main.js의 주석 참고
// const emitter = new eventEmitter();

// function log(callback) {
//     emitter.emit('log', 'started...');
//     callback();
//     emitter.emit('log', 'ended!');
// }

// module.exports.log = log;

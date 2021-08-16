const fs = require('fs');

// 모든 API는 3가지 형태로 제공되어진다
// rename(..., callback(error, data))
// try { renameSync(....) } catch(e) { } // 사용하지 않는 것을 추천
// promises.rename().then().catch(0)

// synchronous
try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch(error) {
    console.error(error);
}

// asynchronous
fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
});
console.log('Hello');

// promises (async)
fs.promises
    .rename('./text2.txt', './text-new.txt') //
    .then(() => console.log('Done'))
    .catch()
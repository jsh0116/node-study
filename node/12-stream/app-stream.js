const fs = require('fs');

// event base
const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 한번에 얼마만큼의 데이터를 읽어오는지 정할 수 있다 (default : 64kbytes)
    // encoding: 'utf-8',
});

const data = [];
readStream.on('data', (chunk) => {
    //console.log(chunk);
    data.push(chunk); // chunk 내용을 배열에 저장
    console.count('data');
});

readStream.on('end', () => {
    console.log(data.join('')); // 배열에 있는 문자열들을 다 합침
});
readStream.on('error', (error) => {
    console.log(error);
});
const fs = require('fs');

const data = [];
// event base
fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 한번에 얼마만큼의 데이터를 읽어오는지 정할 수 있다 (default : 64kbytes)
    // encoding: 'utf-8',
}) // 더 간편한 chaining 기법
    .on('data', (chunk) => {
        //console.log(chunk);
        data.push(chunk); // chunk 내용을 배열에 저장
        console.count('data');
    })
    // 처음에 받은 데이터 덩어리만 출력하는 경우
    // .once('data', (chunk) => {
    //     //console.log(chunk);
    //     data.push(chunk); // chunk 내용을 배열에 저장
    //     console.count('data');
    // })
    .on('end', () => {
        console.log(data.join('')); // 배열에 있는 문자열들을 다 합침
    })
    .on('error', (error) => {
        console.log(error);
    });
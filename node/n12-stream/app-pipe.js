const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip(); // 압축하는 스트림
const writeStream1 = fs.createWriteStream('./file4.txt');
const writeStream2 = fs.createWriteStream('./file4.zip');
const pipe1 = readStream.pipe(writeStream1); // 읽어온 데이터를 그대로 연결
const pipe2 = readStream.pipe(zlibStream).pipe(writeStream2); // readStream을 압축하여 write
pipe1.on('finish', () => {
    console.log('done!');
});
pipe2.on('finish', () => {
    console.log('done!');
});

const http = require('http');
const server = http.createServer((req, res) => {
    // 파일을 다 읽은 후 메모리에 들어온 데이터를 반응해서 송신한다 (bad)
    // fs.readFile('./file.txt', (error, data) => {
    //     res.end(data);
    // })

    // stream 자체를 response에 piping하여 연결 (better)
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
})
server.listen(3000); // localhost:3000 접속하여 확인
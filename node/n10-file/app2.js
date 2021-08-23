const fs = require('fs').promises;

// promises.d.ts 파일에서 매개변수와 return 값 확인할 것

// read a file
// utf8로 encoding하면 문자열 그대로 출력
// encoding 옵션없으면 Buffer에 있는 data 형식으로 출력
fs.readFile('./text.txt', 'utf8') // 
    .then(data => console.log(data))
    .catch(console.error); // promise는 catch로 error handling 필수

// write a file
fs.writeFile('./file.txt', 'Hello, Seung Hoon~ ') //
    .catch(console.error);

// append 
fs.appendFile('./file.txt', 'AYo, Seung Hoon~') //
    // promise 수행한 후 특정한 일 수행
    .then(() => {
        // copy (append하고 아무런 문제가 없다면)
        fs.copyFile('./file.txt', './file2.txt') //
            .catch(console.error);
    })
    .catch(console.error);

// 비동기적 프로그래밍은 순차적으로 수행할 수 있을지 모르기 때문에 주의

// folder
fs.mkdir('sub-folder')
    .catch(console.error);

fs.readdir('./')
    .then(console.log)
    .catch(console.error);
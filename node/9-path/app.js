// node는 파일 시스템에 접근하기가 좋다
const path = require('path');

// OS별로 경로 표기법이 다를 수 있다
// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자
console.log(path.delimiter) // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

// object를 이용해서 string 형태로 변환
const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/..
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로

// normalize : 경로가 잘못되어 있는 경우 자동으로 수정해줌
console.log(path.normalize('./folder///////sub'));

// join
// console.log(__dirname + '/' + 'image'); // 이렇게 작성하면 윈도우에서는 이상한 경로로 작성
// OS별로 다르게 구분자 생성
console.log(__dirname + path.sep + 'image');
// join을 이용하여 더 간편하게 작성
console.log(path.join(__dirname, 'image'));
// fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from('Hi'); // buffer 생성
console.log(buf); // 유니 코드 형태 출력
console.log(buf.length);
console.log(buf[0], buf[1]); // 아스키 코드 형태 출력
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 크기가 2인 buffer 생성 + 초기화
const buf3 = Buffer.allocUnsafe(2); // 초기화 안함 (fast)
console.log(buf2);
console.log(buf3); // 메모리가 많이 사용되고 있는 경우 다른 값 출력될 가능성 있음

// ASCII 값 할당
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());

buf2.copy(buf3); // buf2 내용을 buf3으로 복사
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
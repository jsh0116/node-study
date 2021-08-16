let count = 0;

// export 키워드 입력
export function increase() {
    count++;
}

export function getCount() {
    return count;
}
// 이제 이런 문법 사용 x
// module.exports.getCount = getCount;
// module.exports.increase = increase;
// console.log(module);

// console.log(module.exports === exports) // true
// exports = {}; // 다른 오브젝트 할당해버리면 
// console.log(module.exports === exports) // false

let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module);

console.log(module.exports === exports) // true
exports = {}; // 다른 오브젝트 할당해버리면 
console.log(module.exports === exports) // false

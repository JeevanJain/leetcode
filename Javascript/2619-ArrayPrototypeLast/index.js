Array.prototype.last = function () {
    return this[this.length - 1] ?? -1
    // if(this.length > 0) {
    //   return this[this.length -1]
    // } else {
    //   return -1;
    // }
};


const arr = [];
console.log(arr.last()); // 3

module.exports = arr;

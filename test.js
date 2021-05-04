// Array 的判断
console.log("Array 的判断.........................................");
// es6: Array.isArray()
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({
    a: 1
}));
// 其他方法:
var a = [];
// 1.基于instanceof
console.log(a instanceof Array);
// 2.基于constructor
console.log(a.constructor === Array);
// 3.基于Object.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(a));
// 4.基于getPrototypeOf
console.log(Object.getPrototypeOf(a) === Array.prototype);
// 5.基于Object.prototype.toString
console.log(Object.prototype.toString.apply(a) === '[object Array]');

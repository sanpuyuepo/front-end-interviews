/* 
typeof 检测数据类型， 返回字符串
instanceof 检测引用类型是否是某对象的实例，返回布尔值

instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；
而 typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断。
*/
// console.log(typeof '123');
// console.log(typeof 123);
// console.log(typeof false);
// console.log(typeof NaN); /* 'number' */
// console.log(typeof null); /* typeof null 返回 Object */
// console.log(typeof function(){});
// console.log('typeof Array: ' + typeof [1, 2]);


// console.log([] instanceof Object);
// console.log([1,3] instanceof Array);
// console.log({} instanceof Array);

// 实现一个 instanceof
function myInstanceof(value, type) {
    // 首先判断value是否是基础数据类型 
    if (typeof value !== "object" || value === null) {
        return false;
    }
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(value);
    //循环往下寻找，直到找到相同的原型对象
    while (true) {
        if (proto === null) {
            return false;
        }
        // 找到相同原型对象，返回true
        if (proto === type.prototype) {
            return true;
        }
        // 没找到，找原型的原型
        proto = Object.getPrototypeOf(proto);
    }
}

// console.log("myInstanceof");
// console.log(myInstanceof(new Number(123), Number));    
// console.log(myInstanceof(123, Number));

/* 
第三种方法： Object.prototype.toString
toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，
其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 toString() 就能返回 [object Object]；
而对于其他对象，则需要通过 call 来调用，才能返回正确的类型信息。
*/
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
// Object.prototype.toString.call(document)  //"[object HTMLDocument]"
// Object.prototype.toString.call(window)   //"[object Window]"

// judge data type
function getDataType(obj) {
    let type = typeof obj;
    if (type !== 'object') {
        return type;
    }
    return Object.prototype.toString.call(obj).replaceo(/^\[bject (\S+)\]$/, '$1');
}
/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getDataType([])     // "Array" typeof []是object，因此toString返回
getDataType('123')  // "string" typeof 直接返回
// getDataType(window) // "Window" toString返回
getDataType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getDataType(undefined)   // "undefined" typeof 直接返回
getDataType()            // "undefined" typeof 直接返回
getDataType(function(){}) // "function" typeof能判断，因此首字母小写
getDataType(/123/g)      //"RegExp" toString返回

console.log(getDataType([]));
console.log(getDataType('123'));
console.log(getDataType(null));
console.log(getDataType(undefined));
console.log(getDataType(function(){}));
console.log(getDataType(/123/g));

/* 
深拷贝与浅拷贝
*/

// 浅拷贝: 简单理解为:自己创建一个新的对象，来接受你要重新复制或引用的对象值
// 如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；
// 但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，肯定会影响到另一个对象

/* 浅拷贝常用方法: 
1. Object.assign 语法: Object.assign(target, ...sources) */
console.log("Object.assign-----------------------------------------------");
// let target = {};
// let source = { a: { b: 1 } };
// Object.assign(target, source);
// console.log(target);

let target = {};
let source = {
    a: {
        b: 2
    }
};
Object.assign(target, source);
console.log(target);
source.a.b = 10;
console.log(source);
console.log(target);
/* 
使用 object.assign 方法有几点需要注意：
-a.它不会拷贝对象的继承属性；
-b.它不会拷贝对象的不可枚举的属性；
-c.可以拷贝 Symbol 类型的属性
*/
let obj1 = {
    a: {
        b: 1
    },
    sym: Symbol(1)
};
// 在obj1上定义一个名为"innumerable"不可枚举属性
Object.defineProperty(obj1, 'innumerable', {
    value: '不可枚举属性',
    enumerable: false
});
let obj2 = {};
Object.assign(obj2, obj1)
obj1.a.b = 2;
console.log('obj1', obj1);
console.log('obj2', obj2);

/* 浅拷贝常用方法: 
2. 扩展运算符方式 语法: let cloneObj = { ...obj } */
console.log("扩展运算符方式-----------------------------------------------");
/* 对象的拷贝 */
let objsrc = {
    a: 1,
    b: {
        c: 1
    }
}
let cloneObj = {
    ...objsrc
}
objsrc.a = 2
console.log(objsrc)
objsrc.b.c = 2
console.log(objsrc)
/* 数组的拷贝 */
let arr = [1, 2, 3];
let newArr = [...arr];
console.log(newArr);

/* 浅拷贝常用方法: 
3. concat 拷贝数组, concat 只能用于数组的浅拷贝 */
console.log("concat 拷贝数组-----------------------------------------------");
let arr2 = [1, 2, 3];
let newArr2 = arr.concat();
newArr[1] = 100;
console.log(arr2);
console.log(newArr2);

/* 浅拷贝常用方法: 
4. slice  拷贝数组, 只能用于数组的浅拷贝 slice()方法会返回一个新的数组对象 
grammer: arr.slice(begin, end); 
*/
console.log("slice 拷贝数组-----------------------------------------------");
let arr3 = [1, 2, {
    val: 4
}];
let newArr3 = arr3.slice();
newArr3[2].val = 1000;
console.log(arr3);
console.log(newArr3);

// 浅拷贝只能拷贝一层对象。如果存在对象的嵌套，那么浅拷贝将无能为力 
// 手工实现一个浅拷贝
const shallowCopy = function (target) {
    // 判断target数据类型, 为基本数据类型或null则直接返回
    if (typeof target === 'object' || target !== null) {
        const targetCopy = Array.isArray(target) ? [] : {};
        // 遍历target,讲属性和值复制给targetCopy
        for (let prop in target) {
            if (Object.hasOwnProperty.call(target, prop)) {
                targetCopy[prop] = target[prop];
            }
        }
        return targetCopy;
    }
    return target;
}

console.log("**************************深拷贝**********************************");
// 深拷贝: 将一个对象从内存中完整地拷贝出来一份给目标对象，
// 并从堆内存中开辟一个全新的空间存放新对象，
// 且新对象的修改并不会改变原对象，二者实现真正的分离。

/* 深拷贝常用方法: 
方法一：乞丐版（JSON.stringfy&JSON.parse） 
*/
console.log("方法一：乞丐版 JSON.stringfy-----------------------------------------------");
let obj5 = {
    a: 1,
    b: [1, 2, 3]
}
let str = JSON.stringify(obj5);
let obj6 = JSON.parse(str);
console.log(obj6);
obj5.a = 2;
obj5.b.push(4);
console.log(obj5);
console.log(obj6);
/* 
使用 JSON.stringfy 实现深拷贝还是有一些地方值得注意，我总结下来主要有这几点：

1.拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
2.拷贝 Date 引用类型会变成字符串；
3.无法拷贝不可枚举的属性；
4.无法拷贝对象的原型链；
5.拷贝 RegExp 引用类型会变成空对象；
6.对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
7.无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)。
*/

/* 深拷贝常用方法: 
方法二：基础版（手写递归实现） 
*/
console.log("方法二：基础版（手写递归实现）-----------------------------------------------");

function deepCopy(obj) {
    let objCopy = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            objCopy[key] = deepCopy(obj[key]); //是对象就再次调用该函数递归
        } else {
            objCopy[key] = obj[key]; //基本类型的话直接复制值
        }
    }
    return objCopy;
}
/* 
基础版（手写递归实现）存在的问题: 
1 这个深拷贝函数并不能复制不可枚举的属性以及 Symbol 类型；
2 这种方法只是针对普通的引用类型的值做递归复制，而对于 Array、Date、RegExp、Error、Function 这样的引用类型并不能正确地拷贝；
3 对象的属性里面成环，即循环引用没有解决。
*/

let objSrc = {
    a: {
        b: 1
    }
}
let objClone = deepCopy(objSrc);
objSrc.a.b = 2;
console.log(objClone);

/* 深拷贝常用方法: 
方法三：改进版（改进后递归实现）, 
改进方法:
1 针对能够遍历对象的不可枚举属性以及 Symbol 类型，我们可以使用 Reflect.ownKeys 方法；
2 当参数为 Date、RegExp 类型，则直接生成一个新的实例返回；
3 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性，以及对应的特性，
  顺便结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链；
4 利用 WeakMap 类型作为 Hash 表，
  因为 WeakMap 是弱引用类型，可以有效防止内存泄漏（你可以关注一下 Map 和 weakMap 的关键区别，这里要用 weakMap），
  作为检测循环引用很有帮助，如果存在循环，则引用直接返回 WeakMap 存储的值。
*/
console.log("方法三：改进版（改进后递归实现）-----------------------------------------------");

const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = function (obj, hash = new WeakMap()) {

    if (obj.constructor === Date)
        return new Date(obj) // 日期对象直接返回一个新的日期对象
    if (obj.constructor === RegExp)
        return new RegExp(obj) //正则对象直接返回一个新的正则对象
    //如果循环引用了就用 weakMap 来解决
    if (hash.has(obj)) return hash.get(obj)
    let allDesc = Object.getOwnPropertyDescriptors(obj)
    //遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
    //继承原型链
    hash.set(obj, cloneObj)

    for (let key of Reflect.ownKeys(obj)) {
        cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
            deepClone(obj[key], hash) :
            obj[key]
    }
    return cloneObj
}

// 下面是验证代码
let obj = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {
        name: '我是一个对象',
        id: 1
    },
    arr: [0, 1, 2],
    func: function () {
        console.log('我是一个函数')
    },
    date: new Date(0),
    reg: new RegExp('/我是一个正则/ig'),
    [Symbol('1')]: 1,
};

Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
    value: '不可枚举属性'
});
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj // 设置loop成循环引用的属性
let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)
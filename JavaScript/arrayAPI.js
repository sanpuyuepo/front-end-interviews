// 1 create array 
// Array constructor
let colors = new Array(20); // 创建一个长度为20的数组
// array literal
// let colours = ['red', 'blue', 'pink'];
// Array.of 将一组参数转换为数组实例并返回该数组实例
console.log(Array.of(1, 3, 4, 5));
console.log(Array.of(undefined));
/* 
Array.from 将类数组结构转换为数组实例并返回该数组实例 可接受3个参数, 第一个必须, 另外两个可选
first: 类数组对象
second: 加工函数(or 映射函数)
third: this作用域，表示加工函数执行时 this 的值。
*/
console.log(Array.from('Matt'));
// 将集合和映射转换为数组:
const m = new Map().set(1, 2).set(3, 4);
const s = new Set().add(1).add(2).add(3).add(4);
console.log(Array.from(m));
console.log(Array.from(s));

// 对数组进行浅拷贝
let a1 = [1, 2, 3, 4];
let a2 = Array.from(a1);
console.log("Array.from 对数组进行浅拷贝");
a1[1] = 10;
console.log(a1);
console.log(a2);

// 将函数的arguments转换为数组
console.log("Array.from 将函数的arguments转换为数组");

function getArgsArray() {
    return Array.from(arguments);
}
console.log(getArgsArray(1, 2, [3, 4], {
    a: 10
}));

// 含有第二三个参数时
console.log("含有第二三个参数时:");
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
let r = Array.from(obj, function (value, index) {
    console.log(value, index, this, arguments.length);
    return value.repeat(3); //必须指定返回值，否则返回 undefined
}, obj);
console.log(r);

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

// 数组length属性: 不是只读的,可以通过修改length属性从数组末尾删除或添加元素
console.log("数组length属性: 不是只读的,可以通过修改length属性从数组末尾删除或添加元素");
let colours = ['red', 'blue', 'pink'];
// colours.length = 2;
// colors.length = 4;
// console.log(colours.length);
colours[colours.length] = "black";
colours[colours.length] = "brown";
console.log(colours);


/* 
es6检索数组内容的方法: 
keys() 返回数组索引的迭代器
values() 返回数组元素的迭代器
entries() 返回 索引/值 对的迭代器
可以通过Array.from() 将迭代器转换为数组实例
*/
console.log("es6检索数组内容的方法: ...................................");
const arr = ['foo', 'bar', 'baz', 'qux'];
const keys = Array.from(arr.keys());
const values = Array.from(arr.values());
const entries = Array.from(arr.entries());

console.log(keys);
console.log(values);
console.log(entries);

// 使用ES6的解构可以非常容易的在循环中拆分键值对
console.log("使用ES6的解构可以非常容易的在循环中拆分键值对:");
for (const [idx, element] of arr.entries()) {
    console.log(idx);
    console.log(element);
}

console.log("fill()*********************************************");
/* 
fill(value, startIndex(包含,可选), endIndex(不包含,可选)) 批量复制 想已有数组插入全部或部分相同的value

*/
const zeroes = [0, 0, 0, 0, 0];
zeroes.fill(5)
console.log(zeroes);

zeroes.fill(6, 3);
console.log(zeroes);

zeroes.fill(7, 1, 3);
console.log(zeroes);

console.log("copyWith()*********************************************");
/* 
copyWithin(targetIndex, startIndex(包含,可选), endIndex(不包含,可选)) 填充数组
浅拷贝数组中 startIndex 到 endIndex 的内容, 然后插入到指定索引targetIndex的位置
*/
let ints;
let reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
ints.copyWithin(5);
console.log(ints);

reset();
ints.copyWithin(0, 5);
console.log(ints);

reset();
ints.copyWithin(4, 0, 3)
console.log(ints);

/* 
数组转换方法: 
toLocaleString()
toString() 返回由数组中每个值的等效字符串拼接而成的逗号分隔的字符串
valueOf() 返回数组本身
*/
console.log("数组转换方法: **********************************");
let color = ['red', 'blue', 'pink'];
console.log(color.toString());
console.log(color.valueOf());
console.log(color);

/* 
栈方法：push pop
*/
console.log("栈方法：push() & pop(): ********************************* ");
/* 
push : 接受任意数量参数,添加到数组末尾,返回数组长度
pop: 删除数组最后一项, 返回被删除项
*/
let stack = new Array();
let count = stack.push("red", "green");
console.log(count);

count = stack.push("pink");
console.log(count);

let removed = stack.pop();
console.log(removed);
console.log(stack.length);

/* 
队列方法：shift & unshift
*/
console.log("队列方法: shift() & unshift(): ********************************* ");
/* 
shift(): 删除数组第一项并返回该项
unshift(): 在数组开头添加任意多值, 返回数组长度

shift + push 模拟队列
unshift + pop　相反方向模拟队列
*/
let item = stack.shift();
console.log(item);
console.log(stack.length);


/* 
排序方法：reverse() & sort()
*/
console.log("排序方法：reverse() & sort(): ********************************* ");
let aaa = [0, 1, 5, 10, 15];
console.log(aaa);
console.log("reversed:");
console.log(aaa.reverse());

// sort 默认升序排列, sort 会在每一项上调用String()转型函数,然后比较字符串
console.log("default sort: ");
console.log(aaa.sort());
// 为此 sort() 可以接受一个比较函数来辅助排序
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
console.log("sort添加比较函数:");
console.log(aaa.sort(compare));
// 可以使用箭头函数
console.log(aaa.sort((a, b) => a < b ? -1 : a > b ? 1 : 0));

/* 
concat: 创建当前数组的副本,再将参数添加的副本末尾,并返回该数组副本
*/
console.log("concat: 创建当前数组的副本,再将参数添加的副本末尾,并返回该数组副本********************************* ");
let bbb = ['red', 'blue', 'pink'];
let ccc = bbb.concat('yellow', ['green', 'purple']);
console.log(bbb);
console.log(ccc);


/* 
slice(start, end(不包含)): 创建一个包含原有数组中一个或多个元素的新数组 
参数为负值时,以该值加数组长度的结果确定位置
*/
console.log("slice(start, end): 创建一个包含原有数组中一个或多个元素的新数组 ********************************* ");
let ddd = ['red', 'blue', 'pink', 'yellow', 'purple'];
let ddd2 = ddd.slice(1);
let ddd3 = ddd.slice(1, 4);
console.log(ddd2);
console.log(ddd3);

/* 
splice(start, deleteCount, insertEle) 返回包含被删除项的数组, 会改变原始数组
*/
console.log("splice, 删除,插入,替换数组元素 ********************************* ");

let eee = ['red', 'green', 'blue'];
console.log("original array: ");
console.log(eee);
// 删除
console.log("splice 删除:");
let removedItem = eee.splice(0, 1);
console.log(eee);
console.log(removedItem);

// 插入
console.log("splice 插入: ");
removedItem = eee.splice(1, 0, 'yellow', 'orange');
console.log(eee);
console.log(removedItem);

// 替换
console.log("splice 替换: ");
removedItem = eee.splice(1, 1, 'red', 'purple');
console.log(eee);
console.log(removedItem);

/* 
搜索和位置方法: 
*/
/* 
严格相等搜索: 比较时使用 ===
indexOf  返回查找项的索引,没找到返回 -1
lastIndexOf 返回查找项的索引,没找到返回 -1
includes(es7新增): 返回布尔值,是否至少找到一个匹配项
上述三个方法的参数:  element: 要查找的元素    start: 起始位置,可选
*/
console.log("严格相等搜索方法: indexOf lastIndexOf includes(es7新增) ********************************* ");
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));
console.log(numbers.includes(4));

console.log(numbers.indexOf(4, 4));
console.log(numbers.lastIndexOf(4, 4));
console.log(numbers.includes(4, 7));

/* 
断言函数搜索: 断言函数接受3个参数: 元素, 索引, 数组本身, 返回真值,表示是否匹配
find findIndex 
两个方法使用了断言函数, 都从最小索引开始, 返回第一个匹配元素和第一个匹配元素的索引, 找到后不再继续搜索
也都可以接受第二个可选参数, 指定断言函数内部this的值
*/
console.log("断言函数搜索方法: ********************************* ");
const people = [{
    name: 'Matt',
    age: 27,
}, {
    name: 'Nicholas',
    age: 29
}];

console.log(people.find((element, index, array) => element.age < 28));
console.log(people.findIndex((element, index, array) => element.age < 28));


console.log("数组迭代方法: ******************************************** ");
/* 
每个方法接受两个参数： param1: func(item, index, array): 处理数组元素 param2: 可选的作为函数运行上下文的作用域对象
数组的每一项都经过func处理后, 
1. every(): 每一项返回true，则返回true
2. some(): 有一项返回true， 则返回true
3，filter(): 返回true的项组成数组后返回该数组
4，map(): 返回每次调用func的结果构成的数组
5，forEach(): 无返回值
*/
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult);

let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult);

let filterRes = numbers.filter((item, index, array) => item > 2);
console.log(filterRes);

let mapRes = numbers.map((item, index, array) => item * 2);
console.log(mapRes);

console.log("数组归并方法 reduce()/reduceRight(): ******************************************** ");
/* 
reduce() / reduceRigth(): 
param1： 归并函数callback, 
该函数接受4个参数：func(prev, cur, index, array)
prev（上一次调用回调函数时的返回值，或者初始值）
cur（当前正在处理的数组元素）
index（当前正在处理的数组元素下标）
array（调用 reduce() 方法的数组）
param2: 可选的初始值，作为第一次调用回调函数时传给 prev 的值
*/
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((prev, cur) => prev + cur);
console.log(sum);

let objArr =  [ {name: 'one'}, {name: 'two'}, {name: 'three'} ];
let res = objArr.reduce(function(prev, cur, index, array){
  if (index === 0){
    return cur.name;
  } else if (index === array.length - 1){
    return prev + ' & ' + cur.name;
  } else {
    return prev + ', ' + cur.name;
  }
}, '');
console.log(res);


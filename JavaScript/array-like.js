/* 
JavaScript 中有哪些情况下的对象是类数组呢？主要有以下几种：

1.函数里面的参数对象 arguments；
2.用 getElementsByTagName/ClassName/Name 获得的 HTMLCollection；
3.用 querySelector 获得的 NodeList。
*/

/* 
arguments 对象：类数组对象，包含调用函数时传入的所有参数， 
该对象只有在 以function关键字定义函数时才有，即箭头函数没有
arguments.callee 属性：是一个指针，指向arguments对象所在函数
*/
console.log("arguments 对象*************************************************");
function foo(name, age, sex) {
    console.log(arguments);
    console.log(typeof arguments);
    console.log(Object.prototype.toString.call(arguments));

    console.log(arguments.callee)
}
foo('jack', '18', 'male');

/* 
HTMLCollection 简单来说是 HTML DOM 对象的一个接口，这个接口包含了获取到的 DOM 元素集合，返回的类型是类数组对象
HTMLCollection 是即时更新的，当其所包含的文档结构发生改变时，它会自动更新
*/

/* 
NodeList 对象是节点的集合，通常是由 querySlector 返回的。NodeList 不是一个数组，也是一种类数组。虽然 NodeList 不是一个数组，但是可以使用 for...of 来迭代。在一些情况下，NodeList 是一个实时集合，也就是说，如果文档中的节点树发生变化，NodeList 也会随之变化。
*/
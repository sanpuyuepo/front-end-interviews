function add(a, b) {
    return a + b;
}

/* 
数值 + 数值/boolean/数组/
*/
// let r = add(1, 2)
// let r = add(1, NaN); /* NaN */
// let r = add(Infinity, Infinity); /* Infinity */
// let r = add(Infinity, -Infinity); /* NaN */
// let r = add(-Infinity, -Infinity); /* -Infinity */

// let r1 = add(+0, +0);
// let r2 = add(+0, -0);
// let r3 = add(-0, -0); /* 0: -0 + -0 结果为 -0， 其余为+0（0）*/
// console.log(r1);
// console.log(r2);
// console.log(r3);

// let r = add(1, true);
// let r = add(2, false);

// 数值 + 数组  返回字符串结果
// let r = add(2, [])
// let r = add(22, [123]);
// console.log(r);
// console.log(typeof r);




/* 
字符串 + 数值/NaN/Infinity/undefined/null/boolean : 返回字符串（会把其他类型转换为字符串再返回拼接的字符串结果）
*/
// console.log('10' + 10);
// console.log('1' + 2 + 3);
// console.log(1 + 2 + 3 + '5');
// console.log(typeof (1 + 2 + 3 + '5'));
// console.log('1' + false);

/* 
字符串 + 空数组/非空数组/函数
*/
// let r = add('1', []);
// let r = add('1' + [123]);
// let r = add('1', [,,,])
// let r = add('1', [213, 786, 'aa'])
// let r = add('1', function() {
//     let a = 1;
// })
// let r = add('1', {});
// let r = add('1', {a: 2});
// console.log(r);



/* 
面试题
*/
// let r = [] + {};
let r = {} + []; /* 浏览器中不使用console.log时显示字符串0， 使用console.log()时为 'object Object' */
// let r = ({}) + [];

// let r = (function a() {var a = 0;}) + {};

// let r = [1,2] + function a() {var a = 0};

console.log(r);
console.log(typeof r);




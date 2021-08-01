/*
 * @Author: your name
 * @Date: 2021-07-16 00:21:53
 * @LastEditTime: 2021-07-16 00:24:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \front-end-interviews\JavaScript\fibonacci.js
 */
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let r = fibonacci(10);
console.log(r);
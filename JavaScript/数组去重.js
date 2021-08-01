/*
 * @Author: your name
 * @Date: 2021-07-15 23:56:42
 * @LastEditTime: 2021-07-16 00:18:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \front-end-interviews\JavaScript\数组去重.js
 */

/* 数组去重 */
let test = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
function removeDuplicates(arr) {
    // 空数组，数组长度为1
    // if (arr.length === 0 || arr.length === 1) {
    //     return arr;
    // } 
    // let result = [];
    // arr.forEach(item => {
    //     if (!result.includes(item)) {
    //         result.push(item);
    //     }
    // });
    // return result;

    // 方法2
    return [...new Set(arr)];
}

let r = removeDuplicates(test);
console.log(r);
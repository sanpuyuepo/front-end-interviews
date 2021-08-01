/*
 * @Author: your name
 * @Date: 2021-07-18 23:32:59
 * @LastEditTime: 2021-07-19 00:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \front-end-interviews\JavaScript\字符串字符统计.js
 */
/* 
统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
1. 不限制 key 的顺序
2. 输入的字符串参数不会为空
3. 忽略空白字符

'hello world'
[h, e, l, l, w, o, r, l, d]
{h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

*/
function count(str) {
    let keys = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (ch != " ") {
            keys.push(ch);
        }
    }
    let res = {};
    for (let i = 0; i < keys.length; i++) {
        const prev = keys[i];
        for (let j = i++; j < keys.length; j++) {
            const next = keys[j];
            if (prev === next) {
                res.prev = counter++;
            }
        }
        counter = 0;
    }
    return res;
}

let r = count("hello world");
console.log(r);
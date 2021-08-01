/*
 * @Author: your name
 * @Date: 2021-04-26 20:36:51
 * @LastEditTime: 2021-07-15 12:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \front-end-interviews\JavaScript\this.js
 */
/* 
题目 1
*/
// function a() {
//     function b() { 
//         console.log(this); // window
//         function c() {
//             'use strict';
//             console.log(this); // 严格模式下 undefined ； 非严格模式时window
//         }
//         c();
//     }
//     b();
// }

// a();

/* 
题目 2 
*/
// var name = 'Andy';

// function foo() {
//     console.log(this.name);
// }

// var girl = {
//     name: 'Tina',
//     detail: function() {
//         console.log(this.name);
//     },
//     woman: {
//         name: 'Jane',
//         detail: function() {
//             console.log(this.name);
//         }
//     },
//     foo: foo,
// }

// girl.detail(); 
// girl.woman.detail(); 
// girl.foo(); 

/* 
题目 3
*/
var name = "xiao hong";
function a() {
    var name = 'xiao bai';
    console.log(this.name);
}
function d(i) {
    return i();
}
var b = {
    name: 'xiao huang',
    detail: function() {
        console.log(this.name);
    },
    bibi: function() {
        return function() {
            console.log(this.name);
        }
    }
}
var c = b.detail;
b.a = a;
var e = b.bibi();
a(); // xiao hong
c(); // xiao hong
b.a(); // xiao huang
d(b.detail); // xiao hong
e(); // xiao hong

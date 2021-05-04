for(var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 4000);
}
console.log(i);

/* 
ES6之前可以使用IIFE来实现
*/
for(var i = 0; i < 5; i++) {
    (function(x){
        setTimeout(() => console.log(x), 4000);
    })(i);
}
console.log(i);

/* 
ES6：使用 let 声明迭代变量
*/
// for(let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 4000);
// }
// console.log(i);




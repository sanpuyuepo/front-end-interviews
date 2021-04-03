/* 
数组扁平化： 数组的扁平化其实就是将一个嵌套多层的数组 array（嵌套可以是任何层数）转换为只有一层的数组。
*/
let arr = [1, [2, [3, 4, 5]]];


function flatten(arr) {
    // 方法一：普通的递归实
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         result = result.concat(flatten(arr[i]));
    //     } else {
    //         result.push(arr[i]);
    //     }
    // }
    // return result;

    // 方法二：利用 reduce 函数迭代
    // return arr.reduce(function(prev, cur){
    //     return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    // }, [])

    // 方法三：扩展运算符和 some 的实现
    // while (arr.some(item => Array.isArray(item))) {
    //     arr = [].concat(...arr);
    // }
    // return arr;

    // 方法四：split 和 toString 共同处理
    // return arr.toString().split(',')

    // 方法五：调用 ES6 中的 flat 
    /* 
    arr.flat([depth])
    其中 depth 是 flat 的参数，depth 是可以传递数组的展开深度（默认不填、数值是 1），即展开一层数组。
    那么如果多层的该怎么处理呢？参数也可以传进 Infinity，代表不论多少层都要展开
    */
    return arr.flat(Infinity);


}
console.log(flatten(arr));



/* 
洗牌算法：数组随机排列
简单来说 Fisher–Yates shuffle 算法是一个用来将一个有限集合生成一个随机排列的算法（数组随机排序）。
这个算法生成的随机排列是等概率的。同时这个算法非常高效。
*/

function shuffle(arr) {
    if (Array.isArray(arr) && arr.length != 0) {
        let temp;
        for(let i = arr.length - 1; i >= 0; i--) {
            let random = Math.floor(Math.random() * i);
            temp = arr[random];
            arr[random] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
}

let arr = [1, 2, 3, 4, 5];
let r = shuffle(arr);
console.log(r);

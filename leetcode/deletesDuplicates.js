/* 
给定一个排序数组，需要在原地删除重复出现的元素，返回移除后数组的新长度；
要求：
不要使用额外数组空间，必须在原地修改，复杂度 O(1)
*/
let removeDuplicates = function(arr) {
    // arr是数组且不为空数组
    if (Array.isArray(arr) && arr.length != 0) {
        // 1、遍历移除 
       /*  for(let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 1); 
                // 数组的splice方法会改变原始数组
                i--;
            }
        }
        return arr.length; */

        // 2 双指针
        for(var i = 0, j= 0; i < arr.length; i++) {
            if (arr[j] !== arr[i]) {
                j++;
                arr[j] = arr[i]; 
            }
        }
        return j + 1;
        
    }
}

let arr = [2, 2, 4, 4, 4, 6];
let len = removeDuplicates(arr);
console.log(len);



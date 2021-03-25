/* 
二分查找
*/
let arr = [3, 48, 66, 71, 99, 101, 120, 151, 188, 209];
let target = 99;
let r = binarySearch(target, arr);
console.log(r);

function binarySearch(target, arr) {
    let start = 0, end = arr.length - 1, middle, element;
    while(start <= end) {
        middle = Math.floor((start + end) / 2);
        element = arr[middle];
        if (target === element) {
            return middle;
        } else if (target < element) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}
/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 1、最蠢的办法就是遍历
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    // 2、利用对象, 数组每一项的值作为对象的属性，索引作为对应的属性值
    // let obj = {};
    // for (let i = 0; i < nums.length; i++) {   
    //     if (obj[target - nums[i]] >= 0) {
    //         return [obj[target - nums[i]], i]
    //     }  
    //     obj[nums[i]] = i;      
    // }

    // 3、与对象同理，使用map
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (map[target - nums[i]] >= 0) {
    //         return [map[target - nums[i]], i]
    //     }  
    //     map[nums[i]] = i;   
    // }

};

let nums = [3, 2, 4];
console.log(twoSum(nums, 6));
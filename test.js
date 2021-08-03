/*
 * @Author: your name
 * @Date: 2021-04-28 22:19:43
 * @LastEditTime: 2021-08-02 14:43:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \front-end-interviews\test.js
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const n = s.length;

    if (n <= 1) {
        return n;
    }

    // 滑动窗口
    let left = 0, right = 0;
    let window = new Set();
    let maxLen = 0;
    while (right < n) {
        if (!window.has(s[right])) {
            window.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        } else {
            window.delete(s[left]);
            left++;
        }
    }
    return maxLen;
};

let r = lengthOfLongestSubstring('au'); // dvdf
console.log(r);

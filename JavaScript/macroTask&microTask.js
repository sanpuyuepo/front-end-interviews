// event loop 机制？？？ 和DOM渲染的关系？ 微任务和宏任务在event loop 中的执行顺序？

// 第一题：打印结果是什么
// Promise.resolve().then(() => {
//     console.log(1);
// }).catch(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })

// 第二题：打印结果是什么
// Promise.resolve()
//     .then(() => {
//         console.log(1);
//         throw new Error('error1');
//     })
//     .catch(() => {
//         console.log(2);
//     })
//     .then(() => {
//         console.log(3);
//     });

// 第三题: 打印结果是什么
// Promise.resolve()
//     .then(() => {
//         console.log(1);
//         throw new Error('error1');
//     })
//     .catch(() => {
//         console.log(2);
//     })
//     .catch(() => {
//         console.log(3);
//     });

// 第四题 a 和 b 输出结果是什么？
// async function fn() {
//     return 100;
// }

// (async function() {
//     const a = fn();
//     const b = await fn();
//     console.log(a);
//     console.log(b);
// })();

// 第五题：打印结果是什么？
// (async function() {
//     console.log('start');
//     const a = await 100;
//     console.log('a', a);

//     const b = await Promise.resolve(200);
//     console.log('b', b);

//     const c = await Promise.reject(300);
//     console.log('c', c);
//     console.log('end');
// })();

// 第六题: 输出顺序是什么？
// console.log(1);

// setTimeout(() => {
//     console.log(2);
// });

// Promise.resolve().then(() => {
//     console.log(3);
// });

// console.log(4);

// 第七题
async function async1() {
    console.log('async1 start');
    await async2();

    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout');
});

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');

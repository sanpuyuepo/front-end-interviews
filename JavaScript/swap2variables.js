function swap2variable(a, b) {
    // 1、临时变量法，简单，但需要新的内存来存储临时变量
    /* let temp = a;
    a = b;
    b = temp; */

    // 2、加减法
    /* a = a + b;
    b = a - b;
    a = a - b; */

    // 3、数组法
   /*  a = [a, b];
    b = a[0];
    a = a[1]; */

    // 4、对象法
   /*  a = {a: b, b: a};
    b = a.b;
    a = a.a; */

    // 5、按位异或，接近底层，快
   /*  a = a ^ b;
    b = b ^ a;
    a = a ^ b; */

    // 6、ES6解构赋值法
    [a, b] = [b, a];

    console.log(`交换后：a = ${a}, b = ${b}`);
}

let a = 3;
let b = 5;
console.log(`交换前：a = ${a}, b = ${b}`);
swap2variable(a, b);

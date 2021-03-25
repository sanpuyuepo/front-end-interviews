/* var a = 'hhh'
if (true) {
    // if 语句块中用var声明a时，输出 if hhh, 用let或者const则输出hhh
    var a = 'if hhh';
    // let a = 'bbb';
}
console.log(a); 

var b = 'window b';
function foo() {
    const b = 'foo b';
}
console.log(b); */

var b = 'boy';
console.log(b); // boy

function foo() {
    console.log(a); // undefined
    console.log(c); // undefinde

    if (a === 'apple') {
        a = 'alice';
    } else {
        a = 'ada'
    }
    console.log(a); // ada
    var a = 'andy';

    middle();
    function middle() {
        console.log(c++); // NaN
        var c = 100;
        console.log(++c); // 101

        small();
        function small() {
            console.log(a); // andy
        }
    }
    var c = a = 88;
    function bottom() {
        console.log(this.b); // undefined
        b = 'baby';
        console.log(b); // baby
    }
    bottom();
}
foo();
console.log(b);  // baby


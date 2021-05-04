# JavaScript数据类型有几种？

基本数据类型：7 种，Undefined / Null / Boolean / String / Number / Symbol(ES6) / BigInt(ES?)

引用数据类型：Object，又分为：Array / RegExp / Date / Math / Function

<img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210429001633669.png" alt="image-20210429001633669" style="zoom:50%;" />

---

# 判断数据类型的方法（typeof & instanceof ）？

## typeof 

*检测数据类型*，返回一个小写字母的类型字符串。

原始数据类型：Undefined， Null，Boolean，Number，String，Symbol

复杂数据类型：Array，Function，Object



![image-20210428190601113](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210428190601113.png)





## instanceof

*检测引用类型是否是某对象的实例，返回布尔值*

*可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型*

---

## 实现一个 instanceof

思路：

1. 判断一个数据是否是某个引用类型的实例，所以需要两个参数
2. 如果是原始数据类型，返回false：这里使用typeof判断，注意两个特殊点：typeof function、typeof null
3. 如果是引用类型，获取该值得原型，如果与类型的原型对象相等，则说明该值是该类型的实例，返回true，如果不是，则去找该值原型的原型，依次类推，直到null，返回false。获取原型用方法：`Object.getPrototypeOf()`:

```JavaScript
function newInstanceof(value, type) {
    // function
    if (typeof value == 'function') {
        return true;
    }
    // 基本数据类型
    if (typeof value !== 'object' || value == null) {
        return false;
    }

    // 获取value的原型对象
    let proto = Object.getPrototypeOf(value);
    while (true) {
        if (proto === null) {
            return false;
        }
        if (proto === type.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
}
```

除了 `typeof` 以及 `instanceof` 可以判断数据类型外，还可以使用 `Object.prototype.toString()` 方法

`toString()` 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，

其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 `toString()` 就能返回 [object Object]；

而对于其他对象，则需要通过 call 来调用，才能返回正确的类型信息。

```javascript
bject.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
```

---

# 数据类型转换

## 强制类型转换

包括：Number() / parseInt() / parseFloat() / toString() / Boolean()

1. Number():

   ```javascript
   console.log(Number(true)); // 1
   console.log(Number(false)); // 0
   console.log(Number(null)); // 0
   console.log(Number(undefined)); // NaN
   console.log(Number('123abc')); // NaN
   console.log(Number('123')); // 123
   console.log(Number('0X11')); //17
   console.log(Number('')); // 0
   ```

2. Boolean(): 

   除了 undefined、 null、 false、 空字符串、 0（包括 +0，-0）、 NaN 转换出来是 false，其他都是 true。

---



# 0.1 + 0.2 == 0.3？

 

不等于。  JavaScript 采用IEEE 754  标准规定数字，采用64位双精度存储浮点值，计算机计算的时候会先转化为二级制数再进行计算  ，0.1 和 0.2 转换为二进制数时是无限循环的。采用IEEE 754  标准的语言，如C，Java，Python等，都有这个问题

<img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210428183400533.png" alt="image-20210428183400533" style="zoom:50%;" />

## <img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210428184921815.png" alt="image-20210428184921815" style="zoom:50%;" />

可以使用 toFixed() 截取得到字符串结果，再用 parseInt / parseFloat 进行转换：

<img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210428185439336.png" alt="image-20210428185439336" style="zoom:50%;" />

---



# 深拷贝与浅拷贝

## 浅拷贝

简单理解为:自己创建一个新的对象，来接受你要重新复制或引用的对象值

如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；

但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，肯定会影响到另一个对象

### 常用浅拷贝方法

- `Object.assign()`: 

  <img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210429005747549.png" alt="image-20210429005747549" style="zoom:80%;" />

- `...` 扩展运算符方式:

  ```javascript
  /* 对象的拷贝 */
  let obj = {a:1,b:{c:1}}
  let obj2 = {...obj}
  
  obj.a = 2
  console.log(obj)  //{a:2,b:{c:1}} console.log(obj2); //{a:1,b:{c:1}}
  obj.b.c = 2
  console.log(obj)  //{a:2,b:{c:2}} console.log(obj2); //{a:1,b:{c:2}}
  
  /* 数组的拷贝 */
  let arr = [1, 2, 3];
  let newArr = [...arr]; //跟arr.slice()是一样的效果
  ```

- `concat() ` 拷贝数组,  只能用于数组的浅拷贝:

  ```javascript
  let arr = [1, 2, 3];
  let newArr = arr.concat();
  
  newArr[1] = 100;
  console.log(arr); // [ 1, 2, 3 ]
  console.log(newArr); // [ 1, 100, 3 ]
  ```

- `slice()` 拷贝数组, 只能用于数组的浅拷贝 该方法返回一个新的数组对象

  ```javascript
  // 语法：arr.slice(begin, end)
  let arr = [1, 2, {val: 4}];
  let newArr = arr.slice();
  
  newArr[2].val = 1000;
  
  console.log(arr);  //[ 1, 2, { val: 1000 } ]
  ```

### 手写一个浅拷贝

思路：

1. 基本数据类型拷贝
2. 对引用类型开辟新存储，并拷贝一层对象属性

```javascript
const shallowClone = target => {
    // 注意 target 为 null 的情况
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {};

        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop];
            }
        }

        return cloneTarget;
    } else {
        return target;
    }
};
```

浅拷贝只是创建了一个新的对象，复制了原有对象的基本类型的值，而引用数据类型只拷贝了一层属性，再深层的还是无法进行拷贝。

## 深拷贝

深拷贝: 将一个对象从内存中完整地拷贝出来一份给目标对象，

并从堆内存中开辟一个全新的空间，存放新对象，

且新对象的修改并不会改变原对象，二者实现真正的分离。

### 深拷贝的实现

- 乞丐版

  `JSON.stringify()` 是最简单的深拷贝方法：

  1. 将对象序列化为JSON字符串
  2. 用 `JSON.parse()` 将JSON字符串生成新对象

  ```javascript
  let obj1 = { a:1, b:[1,2,3] }
  let str = JSON.stringify(obj1)；
  let obj2 = JSON.parse(str)；
  
  console.log(obj2);   //{a:1,b:[1,2,3]} 
  
  obj1.a = 2；
  obj1.b.push(4);
  
  console.log(obj1);   //{a:2,b:[1,2,3,4]}
  console.log(obj2);   //{a:1,b:[1,2,3]}
  
  /* 
  使用 JSON.stringfy 实现深拷贝还是有一些地方值得注意，总结下来主要有这几点：
  
  1.拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
  2.拷贝 Date 引用类型会变成字符串；
  3.无法拷贝不可枚举的属性；
  4.无法拷贝对象的原型链；
  5.拷贝 RegExp 引用类型会变成空对象；
  6.对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
  7.无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)。
  */
  ```

- 基础版：手写递归实现

  ```javascript
  function deepClone(obj) {
      let cloneObj = {};
      for (let key in obj) {
          //遍历
          if (typeof obj[key] === 'object') {
              cloneObj[key] = deepClone(obj[key]); //是对象就再次调用该函数递归，这里可以使用arguments.callee属性，实现代码逻辑与函数名解耦
              /* cloneObj[key] = arguments.callee(obj[key]) */
          } else {
              cloneObj[key] = obj[key]; //基本类型的话直接复制值
          }
      }
      return cloneObj;
  }
  
  /* 
  基础版（手写递归实现）存在的问题: 
  1 这个深拷贝函数并不能复制不可枚举的属性以及 Symbol 类型；
  2 这种方法只是针对普通的引用类型的值做递归复制，而对于 Array、Date、RegExp、Error、Function 这样的引用类型并不能正确地拷贝；
  3 对象的属性里面成环，即循环引用没有解决。
  */
  ```

- 改进版：

  ```javascript
  const isComplexDataType = obj =>
      (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
  
  const deepClone = function (obj, hash = new WeakMap()) {
      if (obj.constructor === Date) return new Date(obj); // 日期对象直接返回一个新的日期对象
  
      if (obj.constructor === RegExp) return new RegExp(obj); //正则对象直接返回一个新的正则对象
  
      //如果循环引用了就用 weakMap 来解决
      if (hash.has(obj)) return hash.get(obj);
  
      let allDesc = Object.getOwnPropertyDescriptors(obj); 
      //遍历传入参数所有键的特性
      let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
      //继承原型链
      hash.set(obj, cloneObj);
  
      for (let key of Reflect.ownKeys(obj)) {
          cloneObj[key] =
              isComplexDataType(obj[key]) && typeof obj[key] !== 'function'
                  ? deepClone(obj[key], hash)
                  : obj[key];
      }
      return cloneObj;
  };
  
  /* 
  改进方法:
  1 针对能够遍历对象的不可枚举属性以及 Symbol 类型，我们可以使用 Reflect.ownKeys 方法；
  2 当参数为 Date、RegExp 类型，则直接生成一个新的实例返回；
  3 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性，以及对应的特性，
    顺便结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链；
  4 利用 WeakMap 类型作为 Hash 表，
    因为 WeakMap 是弱引用类型，可以有效防止内存泄漏（你可以关注一下 Map 和 weakMap 的关键区别，这里要用 weakMap），
    作为检测循环引用很有帮助，如果存在循环，则引用直接返回 WeakMap 存储的值。
  */
  ```

  

---



# 解释一下原型与原型链

对象的创建，要么通过对象字面量，要么通过构造函数

对象的属性的特征使用 `[[ ]]`表示

---

# JS的继承方式有哪些？

## 原型链继承

每一个构造函数都有一个原型对象，原型对象包含一个指回该构造函数的指针，实例则包含一个原型对象的指针。

## 盗用构造函数

在子类构造函数中使用`call()/apply()`调用父类构造函数

## 组合继承

综合了原型链和盗用构造函数

- 使用原型链继承原型上的方法和属性
- 通过盗用构造函数继承实例属性

是使用最多的继承模式

## 原型式继承

适用于：在已有对象的基础上再创建一个新对象

使用 ES5 里面的 Object.create 方法，这个方法接收两个参数：一是用作新对象原型的对象、二是为新对象定义额外属性的对象（可选参数）。

## 寄生式继承

## 寄生式组合继承

## ES6 的 extends 关键字实现逻辑

<img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210429022346388.png" alt="image-20210429022346388" style="zoom:80%;" />

---

# 如何实现 new、apply、call、bind 的底层逻辑？

## new

new 关键词的主要作用就是执行一个构造函数、返回一个实例对象。

```javascript
function Person() {
    this.name = 'Jack';
}

var p = new Person();

console.log(p.name); // Jack
```

### **new 的执行步骤**：

1. 创建一个新对象；
2.  新对象内部的 [[prototype]] 指针赋值为构造函数的 prototype 属性
3. 构造函数内部的 this 赋值为该新对象，即 this 指向新对象
4. 执行构造函数中的代码，给新对象添加属性
5. 如果构造函数返回非空对象，则返回该对象；否则返回创建的新对象

当构造函数中有 return 一个对象（即第5点的构造函数返回非空对象）的操作：

```javascript
function Person() {
    this.name = 'Jack';

    return { age: 18 };
}

var p = new Person();

console.log(p); // {age: 18}
console.log(p.name); // undefined
console.log(p.age); // 18

/* 通过这段代码又可以看出，当构造函数最后 return 出来的是一个和 this 无关的对象时，new 命令会直接返回这个新对象，
而不是通过 new 执行步骤生成的 this 对象 */
```

**总结**：<u>*new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象*</u>

### new 的实现

```JavaScript
function _new(ctor, ...args) {
    if (typeof ctor !== 'function') {
        throw 'ctor must be a function'
    }

    // 1. 创建一个新对象
    let obj = new Object();
    // 2. 新对象内部的 [[prototype]] 指针赋值为构造函数的 prototype 属性
    // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    obj.__proto__ = Object.create(ctor.prototype);
    // 3. 构造函数内部的 this 指向该新对象，4. 给新对象添加属性
    let res = ctor.apply(obj, args);

    // 如果构造函数返回非空对象，则返回该对象；否则返回创建的新对象
    let isObject = typeof res === 'object' && res !== null;
    let isFunction = typeof res === 'function';

    return isObject || isFunction ? res : obj;
}
```



## apply & call & bind

ECMAScript 中的函数是对象，因此有属性和方法。

函数的属性：

- prototype：保存引用类型所有实例方法
- length：保存函数定义的命名参数的个数

函数的方法：

- apply
- call
- bind

### **apply，call， bind 基本语法**

```javascript
func.call(thisArg, param1, param2, ...)

func.apply(thisArg, [param1,param2,...])

func.bind(thisArg, param1, param2, ...)
```

作用：<u>都以指定的this 值调用函数，即改变函数 func 的 this 指向。可以将任意对象设置为任意函数的作用域</u>

区别：

- call & apply 传参方式不同：call 需要将参数一个一个列出，apply 传入的则是一个参数数组，可以数组实例或者 arguments 对象
- bind：call 和 apply 则是马上执行的，bind 虽然改变了func 的 this 指向，但不是马上执行，而是返回改变this指向后的新方法

例子：

```javascript
let a = {
    name: 'jack',
    getName: function (msg) {
        return msg + this.name;
    },
};

let b = {
    name: 'lily',
};

console.log(a.getName('hello~')); // hello~jack
console.log(a.getName.call(b, 'hi~')); // hi~lily
console.log(a.getName.apply(b, ['hi~'])); // hi~lily

// bind 改变了func 的 this 指向，但不是马上执行
let name = a.getName.bind(b, 'hello~');
console.log(name()); // hello~lily
```

### 应用场景

- 判断数据类型

  用 `Object.prototype.toString()` 来判断类型是最合适的，借用它我们几乎可以判断所有类型的数据

- 类数组借用数组方法

- apply 来实现数组中判断最大 / 最小值

  ```JavaScript
  let arr = [13, 6, 10, 11, 16];
  
  // Math.max() Math.min() 参数不支持数组
  const max = Math.max.apply(Math, arr);
  const min = Math.min.apply(Math, arr);
  
  console.log(max); // 16
  console.log(min); // 6
  ```

  

### 手写apply & call & bind

- apply & call：实现一样，仅传参不同

  ```javascript
  Function.prototype.call = function (context, ...args) {
      let context = context || window;
  
      context.fn = this;
      // 这里的eval可以不用，直接使用 context.fn(...args), 问题不大
      let result = eval('context.fn(...args)');
  
      delete context.fn;
  
      return result;
  };
  
  Function.prototype.apply = function (context, args) {
      let context = context || window;
  
      context.fn = this;
  
      let result = eval('context.fn(...args)');
  
      delete context.fn;
  
      return result;
  };
  ```

  

- bind：

  ```javascript
  Function.prototype.bind = function (context, ...args) {
      if (typeof this !== 'function') {
          throw new Error('this must be a function');
      }
  
      var self = this;
  
      var fbound = function () {
          self.apply(
              this instanceof self ? this : context,
              args.concat(Array.prototype.slice.call(arguments))
          );
      };
  
      if (this.prototype) {
          fbound.prototype = Object.create(this.prototype);
      }
  
      return fbound;
  };
  ```


---

# 闭包



## 作用域

简单理解：作用域就是变量能够被访问到的范围。分为全局作用域、函数作用域、块级作用域

### 全局作用域

变量一般分为全局变量和局部变量。定义在函数外部，位于代码最前面的一般是全局变量。在JavaScript中，全局变量挂载在window对象下，所以在网页任何位置都可以使用并访问到全局变量。

```javascript
var globalName = 'global'; // 全局变量

function getName() {
    console.log(globalName); // global
    var name = 'inner';
    console.log(name); // inner
}

getName();

console.log(name); // ReferenceError: name is not defined
console.log(globalName); //global

function setName() {
    // JavaScript 中所有没有经过定义，而直接被赋值的变量默认就是一个全局变量
    vName = 'setName';
}

setName();

console.log(vName); // setName
console.log(window.vName); // setName
```

全局变量的缺点：容易引起变量命名冲突

### 函数作用域

函数中定义的变量叫作函数变量，只能在函数内部才能访问。

```JavaScript
function getName () {
  var name = 'inner';
  console.log(name); //inner
}

getName();

console.log(name); // ReferenceError: name is not defined
```

### 块级作用域

ES6 新增，使用 let 、const 关键字声明变量。使用 let 关键字定义的变量只能在块级作用域中被访问，有 <u>暂时性死区</u> 的特点：变量在定义之前不能被使用。

块级作用域指最近的的一对包含花括号 `{}` 界定。其实就是：if块、while块、for 块、function块等。

```javascript
console.log(a) //a is not defined

if(true){
  let a = '123'；
  console.log(a)； // 123
}

console.log(a) //a is not defined
```

## 闭包

### 定义

红宝书：闭包指的是<u>引用了另一个函数作用域中变量</u>的**函数**，通常是在嵌套函数中实现的。

即一个定义在函数内部的函数，或者直接说闭包是个内嵌函数也可以

我们已经知道，函数内部的局部变量时无法在函数外访问的，使用闭包可以在外部访问某个函数内部的变量，让这些变量值始终可以保存在内存中。

```javascript
function fun1() {
	var a = 1;
	return function(){
		console.log(a);
	};
}

fun1();

var result = fun1();
result();  // 1
```

### 产生的原因

作用域链：当访问一个变量时，代码解释器会首先在当前的作用域查找，如果没找到，就去父级作用域去查找，直到找到该变量或者不存在父级作用域中，这样的链路就是作用域链。

需要注意的是，每一个子函数都会拷贝上级的作用域，形成一个作用域的链条，

```JavaScript
var a = 1;

function fun1() {
  var a = 2
  function fun2() {
    var a = 3;
    console.log(a);//3
  }
}
```

fun1 函数的作用域指向全局作用域（window）和它自己本身；fun2 函数的作用域指向全局作用域 （window）、fun1 和它本身；而作用域是从最底层向上找，直到找到全局作用域 window 为止，如果全局还没有的话就会报错。

当前函数一般都会存在上层函数的作用域的引用，那么他们就形成了一条作用域链

闭包产生的本质就是：**当前环境中存在指向父级作用域的引用**

### 使用场景

1. 高阶函数：返回一个函数或者函数作为参数

   ```Javascript
   var a = 1;
   
   function foo() {
       var a = 2;
   
       function baz() {
           console.log(a);
       }
       bar(baz);
   }
   
   function bar(fn) {
       // 这就是闭包
       fn();
   }
   
   foo(); // 输出2，而不是1
   ```

   

2. 定时器、事件监听、Ajax请求、Web Workers 或其他异步中，只要使用回调函数，实际上就是使用闭包

3. IIEF 立即执行函数，创建了闭包，保存了全局作用域（window）和当前函数的作用域，因此可以输出全局的变量

   ```javascript
   var a = 2;
   
   (function IIFE(){
   
     console.log(a);  // 输出2
   
   })();
   ```

### 常见面试题

![image-20210503160229950](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210503160229950.png)

**为什么会输出5个6而不是输出1,2,3,4,5？**

首先setTimeout是宏任务，每一次for循环时setTimeout都执行一次，将回调函数放到任务队列等待，因为 JS 的单线程事件轮询机制，在主线程的同步任务执行完后才会去执行宏任务，因此在for循环结束后才会依次执行setTimeout中的回调

而setTimeout函数也是一种闭包，其上一级作用域为 window ，而通过 var 关键字声明的变量存在变量提升，成为全局变量，for 循环结束后此时 i = 6，所以最后输出的是5个6.

**如何按顺序依次输出 1、2、3、4、5 呢？**

有两种方法，

第一种是使用立即执行函数，当每次 for 循环时，把此时的变量 i 传递到定时器中，然后立即执行

```javascript
for(var i = 1; i <= 5; i++) {
    // setTimeout(() => console.log(i), 0);
    (function(x){
        setTimeout(() => console.log(x), 0);
    })(i);
}
```

第二种是最简单的，使用块级作用域，

```JavaScript
/*
使用let声明变量，JS引擎在后台为每一个迭代循环声明一个新的迭代变量。每个setTimeout引用的都是不同的变量实例

*/
for(let i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), 0);
}
```

---

# 实现 JSON.stringify()

## JOSN.parse

作用：用于解析JSON字符串，构造由字符串描述的 JavaScript 值或对象。

参数：JSON.parse(text[, reviver])

- 需要解析的 JSON 字符串，
- 可选的 reviver 函数用于在返回之前对得到的对象执行变黄操作

```JavaScript
const json = '{"result":true, "count":2}';

const obj = JSON.parse(json);

console.log(obj.count); // 2

console.log(obj.result); // true

/* 带第二个参数的情况 */

let r = JSON.parse('{"p": 5}', function (k, v) {
    if (k === '') return v; // 如果k不是空，

    return v * 2; // 就将属性值变为原来的2倍返回
}); 

console.log(r); // { p: 10 }
```

## JSON.stringify()

作用：将一个 JavaScript 对象或值转换为 JSON 字符串

参数：JSON.stringify(value[, replacer [, space]])

- 要转换的对象，必须
- 可选的 replacer 函数
- 控制结果字符串里的间距

<img src="C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210505003134648.png" alt="image-20210505003134648" style="zoom:80%;" />

```javascript
function jsonStringify(data) {
    let type = typeof data;

    if (type !== 'object') {
        let res = data; 

        if (Number.isNaN(data) || data === Infinity) {
            res = 'null';
        } else if (type === ('function' || 'undefined' || 'symbol')) {
            return undefined;
        } else if (type === 'string') {
            res = '"' + data + '"';
        }
        return String(res);
    } else if (type == 'object') {
        if (data === null) {
            return 'null';
        } else if (data.toJSON && typeof data.toJSON === 'function') {
            return jsonStringify(data.toJSON());
        } else if (data instanceof Array) {
            let res = [];
            data.forEach((item, index) => {
                if (typeof item === ('undefined' || 'function' || 'symbol')) {
                    res[index] = 'null';
                } else {
                    res[index] = jsonStringify(item);
                }
            });
            res = '[' + res + ']';
            return res.replace(/'/g, '"');
        } else {
            // 普通对象
            let res = [];
            Object.keys(data).forEach((item, index) => {
                if (typeof item !== 'symbol') {
                    if (
                        data[item] !== undefined &&
                        typeof data[item] !== 'function' &&
                        typeof data[item] !== 'symbol'
                    ) {
                        res.push('"' + item + '":' + jsonStringify(data[item]));
                    }
                }
            });
            return ('{' + res + '}').replace(/'/g, '"');
        }
    }
}
```



---

# 数组

数组的创建方法1是通过构造函数2是通过字面量

ES6 新增的创建数组的方法：Array.of() & Array.from()

## Array.of()

作用：将一组参数转换为数组实例，并返回

```javascript
let r = Array.of(1, 2, 3, 4);
console.log(r); // [1, 2, 3, 4]
```

## Array.from()

作用：把类数组结构转换为数组实例，并返回

参数：

- 类数组对象，即任何可迭代对象
- 可选的加工函数，新生成的数组经过该函数加工后返回
- 可选的this 作用域，指定加工函数执行时的 this 的值，箭头函数中不可用

```javascript
// String
console.log(Array.from('Matt')); // [ 'M', 'a', 't', 't' ]

// 
const map = new Map().set(1, 2).set(3, 4);
const set = new Set().add(1).add(2).add(3).add(4);

console.log(Array.from(map)); // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(set)); // [ 1, 2, 3, 4 ]

// 数组浅复制
const arr1 = [1, 3, 4, 5];
const arr2 = Array.from(arr1);

console.log(arr2);  // [1, 3, 4, 5]
console.log(arr1 == arr2); // false

// 
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
let r = Array.from(obj, function(value, index) {
    return value.repeat(3);
}, obj)

console.log(r); // [ 'aaa', 'bbb', 'ccc' ]
```

---

## 数组索引

length 属性不是只读的，通过修改length属性，可以从数组末尾删除、添加元素

---

## 检测数组

判断一个对象是不是数组有很多方法。

一般使用 Array.isArray()

```javascript
// Array.isArray()
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({
    a: 1
}));
// 其他方法:
var a = [];
// 1.基于instanceof
console.log(a instanceof Array);
// 2.基于constructor
console.log(a.constructor === Array);
// 3.基于Object.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(a));
// 4.基于getPrototypeOf
console.log(Object.getPrototypeOf(a) === Array.prototype);
// 5.基于Object.prototype.toString
console.log(Object.prototype.toString.apply(a) === '[object Array]');
```


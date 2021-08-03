# AngularJS 1.x

谷歌开源前端框架，https://angularjs.org

## 特性与优点

1. 双向数据绑定
2. 声明式依赖注入
3. 解耦应用逻辑、数据模型、视图
4. 完善的页面指令
5. 定制表单验证
6. Ajax 封装

## 可以干什么?

1. SPA 单页面应用
   - 将所有活动局限在一个页面
   - 页面中有部分数据发生变化时不会刷新整个页面，而是局部刷新
2. Web App

## Hello world

* 导入angular.js, 并在页面中引入
* 在<html><body>中ng-app指令
* 定义ng-model='xxx'/{{xxx}}

## 四个重要概念

1. **双向数据绑定**
   * View（视图）： 页面（标签、指令，表达式）
   * Model(模型) ：作用域对象（属性、方法）
   * 数据绑定： 数据从一个位置自动流向另一个位置
     * View-->Model
     * Model-->View
   * 单向数据绑定： 只支持一个方向
     * View-->Model  ： ng-init
     * Model-->View  : {{name}}
   * 双向数据绑定
     * Model<-->View  : ng-model
   * angular是支持双向数据绑定的
2. **依赖注入**
   * 依赖的对象被别人(调用者)自动注入进入
   * 注入的方式;
     * 内部自建：不动态 
     * 全局变量：污染全局环境
     * 形参：这种最好
   * angualr就是通过声明式依赖注入， 来得到作用域对象 
   * 形参名不能随便定义（只是针对当前这种写法）
3. ** MVC模式**

  * **M: Model, 即模型**, 在angular中: 
    * 为scope
    * 储存数据的容器
    * 提供操作数据的方法
  * **V: View, 即视图**, 在angular中:
    * 为页面
    * 包括: html/css/directive/expression
    * 显示Model的数据
    * 将数据同步到Model
    * 与用户交互
  * **C: Controller, 即控制器**, 在angular中:
    * 为angular的Controller
    * 初始化Model数据
    * 为Model添加行为方法

4. **MVVM模式**

  * M: Model, 即数据模型, 在angular中:
    * 为scope中的各个数据对象
  * V: View, 即视图, 在angular中:
    * 为页面
  * VM: ViewModel, 即视图模型, 在angular中:
    * 为scope对象
  * 在angular中controller不再是架构的核心，在MVVM中只是起辅助作用，用来辅助$scope对象，即VM层

---

## 三个重要对象

1. **作用域**
   * 是一个js实例对象
   * 这个对象的属性、方法， 页面都可以直接引用、操作
   * ng-app指令： 内部创建一个根作用域（$rootScope）, 是所有其它作用域的父对象
2. **控制器**
   * 也是一个对象，是我们View与Model之间的桥梁
   * 当我们使用了ng-controller指令， 内部就会创建控制器对象
   * 但我们同时得提供控制器的构造函数（必须定义一个$scope的形参）
   * 每定义一个ng-controller指令， 内部就会创建一个新的作用域对象（$scope）, 并自动注入构造函数中,在函数内部可以直接使用$scope对象。
3. **模块**
   * 也是一个对象，一个模块包含两个部分：
     1. 模块可以定义自己的控制器、服务、工厂类、指令
     2. 模块可以依赖其他模块
     3. 可以通过将模块名称传给ng-app指令，作为应用的入口
   * 创建模块对象： angular.module('模块名', [依赖的模块])
     1. 没有第二个参数时，表示查找模块
   * 通过模块添加控制器：
     * module.controller('MyController', function($scope){//操作$scope的语句})
   * angular的整体设计也是多模块的
     * 核心模块： angular.js
     * 扩展模块： angular-router.js, angular-message.js, angular-animate.js

---

## 三个页面语法

1. **表达式**
   * {{js表达式}}
   * 从作用域对象中读取对应的属性数据来显示数据
   * 不支持if/for/while
   * 支持三目表达式
2. **指令**
   * 什么指令 ： 自定义标签属性/标签
   * 常用的指令：
     * ng-app: 指定模块名，angular管理的区域
     * ng-model： 双向绑定，输入相关标签
     * ng-init： 初始化数据
     * ng-click： 调用作用域对象的方法（点击时）
       可以传$event
     * ng-controller: 指定控制器构造函数名，内部会自动创建一个新的子作用域（外部的）
     * ng-bind： 解决使用{{}}显示数据闪屏（在很短时间内显示{{}}）
     * ng-repeat： 遍历数组显示数据， 数组有几个元素就会产生几个新的作用域
       * $index, $first, $last, $middle, $odd, $even
     * ng-show: 布尔类型， 如果为true才显示
     * ng-hide: 布尔类型， 如果为true就隐藏
     * ng-class: 动态引用定义的样式  {aClass:true, bClass:false}
    * ng-style: 动态引用通过js指定的样式对象   {color:'red', background:'blue'}
    * ng-mouseenter: 鼠标移入监听, 值为函数调用, 可以传$event
    * ng-mouseleave: 鼠标移出监听, 值为函数调用, 可以传$event
3. **过滤器**
   * 作用: 在显示数据时可以对数据进行格式化或过滤
     * 单个--->格式化（将别的类型的数据转换为特定格式的字符串）
     * 多个----》格式化/过滤
     * 不会真正改变被操作数据
   * {{express | 过滤器名：补充说明}}
   * 常用过滤器：
     * currency 货币格式化(文本)
     * number数值格式化(文本)
     * date 将日期对象格式化(文本)
     * json: 将js对象格式化为json(文本)
     * lowercase : 将字符串格式化为全小写(文本)
     * uppercase : 将字符串格式化全大写(文本)

     * limitTo 从一个数组或字符串中过滤出一个新的数组或字符串
       * limitTo : 3  limitTo : -3
     * orderBy : 根据指定作用域属性对数组进行排序
       * {{[2,1,4,3] | orderBy}}  升序
       * {{[2,1,4,3] | orderBy：‘-’}}  降序
       * {{[{id:2,price:3}, {id:1, price:4}] | orderBy:'id'}  id升序
       * {{[{id:2,price:3}, {id:1, price:4}] | orderBy:'-price'} price降序
     * filter : 从数组中过滤返回一个新数组
       * {{[{id:22,price:35}, {id:23, price:45}] | filter:{id:'3'}} //根据id过滤
       * {{[{id:22,price:35}, {id:23, price:45}] | filter:{$:'3'}} //根据所有字段过滤

---

# 指令及控制器

## 指令

ng-bind：

- ng-bind 与花括号表达式：ng-bind 更快，AngularJS 启动时会将花括号转化为 ng-bind，这会花点时间，这也是为什么会在页面中看到一闪而过的花括号。不过只在初次加载时会有。可以使用 ng-cloak 指令解决。

ng-cloak：在应用启动到加载完毕之间的时间段隐藏页面。

ng-repeat:

ng-show：

ng-hide：

ng-class:





## 控制器

ng-controller

该指令将创建的控制关联到DOM上

```javascript
       // 控制器业务代码
        function ctrl() {
            // 定义一个self变量指向控制器实例，而不要直接使用this：保证this指向正确
            let self = this;
            self.msg = 'Hello';
            self.changeMsg = function () {
                if (self.msg === 'Hello') {
                    self.msg = 'Goodbye~'
                } else {
                    self.msg = 'Hello'
                }
                
            }
        }

        // 注册控制器
        angular.module('notesApp', []).controller('MainCtrl', [ctrl]);
```

<u>数据驱动，模型为王</u>，只需关注JS代码，更新UI自动完成

---

# AngularJS 启动过程

1. 当页面加载完毕之后，AngularJS 开始查找 ng-app 命令
2. 找到ng-app指令后加载其指定的模块
3. 在ng-app对应根节点及其子节点中查找指令及数据绑定语句
4. 每当找到ng-controller和ng-repeat指令时都创建一个作用域作为相应元素的上下文，作用域决定了DOM元素可以访问的函数和变量
5. 为变量添加监视器和侦听器并追踪它们的变化，当发生变化时立即更新视图



<img src="AngularJS.assets/code.png" style="zoom:50%;" />














































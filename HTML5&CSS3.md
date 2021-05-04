

# HTML5

## 语义化

使用特定英文字母或单词表示标签

好处：

1. 代码结构清晰，含义清楚，具有可读性，利于阅读理解
2. 利于SEO，即搜索引擎优化：搜索引擎的爬虫依赖标签确定上下文和各个关键字的权重， 有助于爬虫抓取更多有效信息

### H5新增标签与属性（部分）：

1. **结构标签**：

   - `<header>`:  页面或区域的头部
   - `<nav>`: 定义导航链接，一般和ul、li配合做导航栏
   - `<main>`：
   - `<section>`：定义一个区域
   - `<aside>`：定义页面内容部分的侧边栏
   - `<article>`：定义一篇文章
   - `<hgroup>`：定义文件中一个区块的相关信息
   - `<figure>`：定义一组媒体内容以及它们的标题
   - `<figcaption>`：定义 figure 元素的标题
   - `<dialog>`：定义一个对话框(会话框)
   - `<footer>`：定义一个页面或一个区域的底部

2. **多媒体标签**：

   - `<video>` 视频

     ```html
     <video src="..."
            autoplay="autoplay"
            controls="controls"
            loop="loop"
            width="500"
            height="500"
            poster="..."
            muted>
     
     //其中loop设置循环 poster设置封面 muted静音
     ```

     

   - `<audio> ` 音频

     ```html
     <audio src="..."
            autoplay="autoplay"
            controls="controls"
            loop="loop"
            width="500"
            height="500">
     ```

     

   - `<source>` 媒介元素，即音视频

     ```html
     <video autoplay="autoplay"
            controls="controls"
            loop="loop"
            width="500"
            height="500">
         <source src="..." type="video/mp4"
     </video>
     ```

     

   - `<embed>` 嵌入插件

     ```HTML
     <embed src="..."
            type="audio/mp3"
            width="300" 
            height="300" />
     ```

     

3. **重定义标签:**

   - `<b>` 粗体
   - `<i>` 斜体
   - `<dd>` 
   - `<dt>`
   - `<small>` 表示小字体，例如打印注释或者法律条款
   - `<strong>` 表示重要性

4. **其他标签**：

   - `<ruby>`
   - `<rp>`
   - `<rt>`
   - `<mark>`

5. **input 新增 type**：

   - email

   - url

   - range

   - Date picker:

     Date

     Month

     Week

     Time

     Datetime

     Datetime-local

   - search

   - color

   - tel

6. **表单属性**

   - autocomplete：自动完成，适用于 <form> 标签，以及以下类型的 <input> 标签：
     text, search, url, telephone, email, password, datepickers, range, color。
     用法：<form autocomplete="on“></form>或者单独在input中用off
   - autofocus：自动地获得焦点，适用于所有 <input> 标签的类型
     用法：<input autofocus="autofocus" />
   - multiple：可选择多个值，适用于<input>中type为email和file
     用法：<input type="file" multiple="multiple" />
   - placeholder：适用于<input>中type为：text, search, url, telephone, email, password
   - required：规定不能为空，适用于以下类型的 <input> 标签：
     text, search, url, telephone, email, password, date pickers, number, checkbox, radio, file
     用法：<input type="text" required="required" />

7. **链接属性**

   - size
     <link rel=“icon” href=“icon.gif” type=“image/gif” size=“16x16”>
   - target
     
     <base href=“http://localhost/” target=“_blank”>
   - 超链接
     a：media=""（表示对设备进行优化，handhelp对“手持“设备进行支持，tv对”电视）；
     a：hreflang="zh"（设置语言，这里设置语言是中文）；
     a：ref=“external”（设置超链接的引用，这里超链接为外部链接）

8. **其他属性:**

   - defer:加载完脚本后并不执行，而是等整个页面加载完之后再执行
     
     <script defer src=“URL”></script>
   - async:加载完脚本后立刻执行，不用等整个页面都加载完，属于异步执行。
     
     <script async src=“URL”></script>
   - Start —— 起始值
   - Reversed —— 倒叙排列
     <ol start=“10” reversed>
     <li>Html</li>
     <li>Css</li>
     <li>JavaScript</li>
     </ol>
   - manifest=“cache.manifest”（定义页面离线应用文件）
     <html manifest="cache.manifest">

## 元素分类

### 块级元素

div p table ul lo li h1-h6 dl dt 

### 行内元素

a img span b strong input select section 

区别：

1、块级元素会独占一行 默认的宽度占满父级元素，行内元素不会换行

2、行内元素的width height 无效

3、块级元素可以设置margin和padding属性，行内元素可以设置左右padding和margin，上下不生效

---

# CSS

## 盒模型

对比纸箱

盒模型分为**IE盒模型**、**标准盒模型**

IE盒模型：属性width、height，设置的是 content + padding + border

标准盒模型： 属性width、height设置的是 content

可以通过 CSS 的 <u>box-sizing</u> 属性来控制，默认值为 `content-box`

```css
box-sizing: content-box;  /* 标准盒模型 */
```

```css
box-sizing: border-box; /* IE盒模型 */
```

---

## 外边距重叠

块的[上外边距(margin-top)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)和[下外边距(margin-bottom)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)有时合并(折叠)为单个边距，其大小为单个边距的最大值(或如果它们相等，则仅为其中一个)，

由上可见，外边距重叠发生在垂直方向上

**形成外边距重叠的3种情况**

1. 同级元素
2. 父子元素：一个元素包含在一个元素中时(假设没有padding或border把外边距分隔开)，他们的上、下外边距也会发生合并
3. 空元素：没有子元素或没有文字内容的元素，如`<br/>,<hr/>`等，当空元素有外边距但是没有padding和border时，margin-top和margin-bottom会重叠

**防止外边距重叠**：开启BFC即可

- 元素绝对定位，一般用在内层元素
- 内层元素加float:left或者display:inline-block
- 外层元素用padding加边距
- 外层元素设置overflow:hidden
- 内层元素透明边框 border: 1px solid transparent

---

## BFC

BFC, Block Formatting Context，块级格式化上下文，是一个独立的渲染区域，BFC内部的元素与外部的元素相互隔离，内外元素的定位不会相互影响

**触发条件**：

1. 根元素
2. position: absolute / fixed
3. display: inline-block / table-cell / table-caption / flex / inline-flex
4. float 不为none
5. overflow !== visible

**规则**

1. BFC 中的两个相邻 box 垂直排列
2. BFC 中的两个相邻 Box 的 垂直方向上的 margin 会发生重叠
3. BFC 内部，每个box的margin-left 会紧贴着包含box的容器的border-left
4. BFC 的区域不会与float 的元素区域重叠
5. 计算BFC的高度时，浮动子元素也参与计算
6. 文字层不会被浮动层覆盖

**应用**

- 防止外边距重叠
- 清楚元素内部浮动：overflow: hidden; 
- 自适应两栏布局
- 阻止元素被浮动元素覆盖

---

## 居中布局

![image-20210427013648778](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427013648778.png)

### 水平居中

块级元素：如 <div id="inner"></div>

- 设置margin

  ![image-20210427014529050](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427014529050.png)

- 定位 + transform：translate 

  ![image-20210427014348076](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427014348076.png)

  

- flex 弹性布局：最简单，给父元素设置

  ![image-20210427014805852](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427014805852.png)

  

- grid 布局：

  ![image-20210427015251121](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427015251121.png)

- 

行内元素：给父元素设置

```css
#outer {
            width: 400px;
            height: 400px;
            border: 1px solid red;
            text-align: center;
        }
```



### 垂直居中

块级元素：

- grid:

  ![image-20210427015730033](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427015730033.png)

- flex：给父元素设置

  ![image-20210427022822646](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427022822646.png)

  

- 定位 + transform：

- ![image-20210427023005578](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023005578.png)

行内元素：使用 line-height，值为父元素的 height

![image-20210427022513902](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427022513902.png)

### 水平垂直居中

- 方法1：

  ![image-20210427023242427](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023242427.png)

- 方法2：

  ![image-20210427023427263](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023427263.png)

- 方法3：flex

  ![image-20210427023553793](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023553793.png)

- 方法 4：flex

  ![image-20210427023709151](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023709151.png)

- 方法5：grid

  ![](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023812542.png)

- 方法6：grid

  ![image-20210427023940264](C:\Users\ajiai\AppData\Roaming\Typora\typora-user-images\image-20210427023940264.png)

( flex：设置父元素，grid：设置自身，所以grid的属性都是 *-self )

---

## 选择器

### 分类

### 优先级

`!important` > 行内样式 > `#id` > `.class` > `tag` > * > 继承 > 默认

---

## link 和 @import 的区别

共同点：都可以引入css文件

区别：

1. 原理不同：
   - link 是HTML标签，不仅可以加载css，还可以定义ref、rss 等
   - @import 是 css 中的语法规则，只能用于加载css
2. 加载顺序不同：
   - link 引入的 css 文件会被同步加载
   - @import 引用的 css 文件，要等整个页面加载成功之后才加载
3. 兼容性不同：
   - link 是HTML标签，不存在兼容性问题
   - @import IE5+ 以上浏览器才能识别，
4. DOM操作区别：
   - link 是一个标签，可以通过DOM操作，即可以使用JavaScript动态引入
   - @import 是css中的，无法进入DOM操作

---

## href 和 src 的区别

href: hypertext reference 超文本引用即超链接, 常见于以下标签：link , a, 引用资源但不会下载

src: source 资源/来源，常见于以下标签：img, style, script, input, iframe，下载资源并嵌入文档成为当前文档的一部分

**总结：href是元素或文档与指定资源联通，是引用；src是下载后嵌入构成文档直接内容**

---

## CSS预处理器

### Less 

https://less.bootcss.com/

### Sass

### Stylus

https://stylus.bootcss.com/

---

## CSS动画

`transition`: 过渡动画

- `transition-property`: 属性
- `transition-duration`: 间隔
- `transition-timing-function`: 曲线
- `transition-delay`: 延迟
- 常用钩子: `transitionend`

```
animation / keyframes
```

- `animation-name`: 动画名称，对应`@keyframes`

- `animation-duration`: 间隔

- `animation-timing-function`: 曲线

- `animation-delay`: 延迟

- ```
  animation-iteration-count
  ```

  : 次数

  - `infinite`: 循环动画

- ```
  animation-direction
  ```

  : 方向

  - `alternate`: 反向播放

- ```
  animation-fill-mode
  ```

  : 静止模式

  - `forwards`: 停止时，保留最后一帧
  - `backwards`: 停止时，回到第一帧
  - `both`: 同时运用 `forwards / backwards`

- 常用钩子: `animationend`

动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现

- `translate`
- `scale`
- `rotate`
- `skew`
- `opacity`
- `color`


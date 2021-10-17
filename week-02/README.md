## 第二周任务



使用 `v-for` 处理 `input` 标签的 `checkbox` 属性时遇到了问题

![](https://raw.githubusercontent.com/liuyunhaozz/image/main/img/1%7E%7D2M%244CJ%7EP8NO7L%7E%25RV%40%25A.png)

问题在于点选了 4 后下面的 5 也会打勾

估计是 `checkbox` 的值对 `v-for` 有影响

最后不得已，选用 `img` 标签代替 `input` 标签



---



```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue的方法_侠课岛(9xkd.com)</title>
<script src="./src/vue.min.js"></script>
</head>
<body>
    <h1>点击按钮修改名字</h1>
    <div id="app">
        <p>{{message}}</p>
        <button @click="change">点我改名</button>
    </div>
    <script>
        var app = new Vue({
            el:"#app",
            data: {
                message: "hello",
            },
            methods:{
                change : function(){
                    this.message = "水星仔"  // 改变data中属性的值
                }
            }
        })
    </script>
</body>
</html>
```

这里的问题是在 `change` 方法中 是否能够通过 `this` 访问直接访问 `data` 属性，而不是 `this.message`


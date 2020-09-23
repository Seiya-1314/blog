(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{466:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("br"),t._v(" "),a("author",{attrs:{time:"2019年08月26日"}}),t._v(" "),a("br"),t._v(" "),t._m(1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("vue 指令本质上就是一种语法糖，更直白的可以称为标志位。vue 在编译阶段，从 template 编译成 render 函数的时候，会把指令编译成 JavaScript 代码。这也是 render 函数和 JSX 不支持 指令的原因。")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(2),t._v(" "),a("br"),t._v(" "),t._m(3),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(4),t._v(" "),a("br"),t._v(" "),a("p",[t._v("vue 的自定义指定并不是一个必需的功能，所有自定义指令完成的需求，都可以通过其他的方式去完成。")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("一个自定义指令大概像下面这样：")]),t._v(" "),t._m(5),a("p",[t._v("如果你想注册局部指令，组件中也接受一个 directives 的选项：")]),t._v(" "),t._m(6),a("p",[t._v("然后你可以在模板中任何元素上使用新的 v-focus 属性。")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(7),t._v(" "),a("br"),t._v(" "),a("p",[t._v("一个指令定义对象可以提供如下几个钩子函数 (均为可选)：")]),t._v(" "),t._m(8),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(9),t._v(" "),a("br"),t._v(" "),a("p",[t._v("如果只需要关注 bind 和 update 时触发相同的行为，也可以这样写：")]),t._v(" "),t._m(10),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(11),t._v(" "),a("br"),t._v(" "),t._m(12),t._v(" "),t._m(13)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-指令的本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-指令的本质","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 指令的本质")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-指令","aria-hidden":"true"}},[this._v("#")]),this._v(" vue 指令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内置指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 内置指令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("v-text")])]),t._v("：更新元素的 textContent；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-html")])]),t._v("：更新元素的 innerHTML；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-show")])]),t._v("：根据表达式之真假值，切换元素的 display CSS 属性；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-if")])]),t._v("：根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-else")])]),t._v("：前一兄弟元素必须有 v-if 或 v-else-if；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-else-if")])]),t._v("：前一兄弟元素必须有 v-if 或 v-else-if；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-for")])]),t._v("：基于源数据多次渲染元素或模板块；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-on")])]),t._v("：绑定事件监听器。事件类型由参数指定；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-bind")])]),t._v("：动态地绑定一个或多个特性，或一个组件 prop 到表达式；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-model")])]),t._v("：在表单控件或者组件上创建双向绑定；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-slot")])]),t._v("：提供具名插槽或需要接收 prop 的插槽；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-pre")])]),t._v("：跳过这个元素和它的子元素的编译过程；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-cloak")])]),t._v("：这个指令保持在元素上直到关联实例结束编译；")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("v-once")])]),t._v("：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能；")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义指令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当被绑定的元素插入到 DOM 中时……")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚焦元素")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("directives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令的定义")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 钩子函数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("bind")])]),t._v("：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("inserted")])]),t._v("：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("update")])]),t._v("：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("componentUpdated")])]),t._v("：指令所在组件的 VNode 及其子 VNode 全部更新后调用。")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("unbind")])]),t._v("：只调用一次，指令与元素解绑时调用。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数简写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数简写","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数简写")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color-swatch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"对象字面量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量","aria-hidden":"true"}},[this._v("#")]),this._v(" 对象字面量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，"),s("strong",[this._v("指令函数能够接受所有合法的 JavaScript 表达式。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ color: 'white', text: 'hello!' }\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "white"')]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "hello!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
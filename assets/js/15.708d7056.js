(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{291:function(t,s,e){t.exports=e.p+"assets/img/13.88e97b5c.png"},292:function(t,s,e){t.exports=e.p+"assets/img/14.5fa1915a.png"},293:function(t,s,e){t.exports=e.p+"assets/img/15.33e81924.png"},294:function(t,s,e){t.exports=e.p+"assets/img/16.0eda1a47.png"},583:function(t,s,e){"use strict";e.r(s);var r=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"深入-javascript-原型到原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入-javascript-原型到原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 深入 JavaScript 原型到原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v('每一个 JavaScript 对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("[[Prototype]]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 JavaScript 中，函数（function）是允许拥有属性的。所有的函数会有一个特别的属性 —— "),s("code",[this._v("[[Prototype]]")]),this._v("，其实就是对于其他对象的引用。几乎所有的对象在创建时 "),s("code",[this._v("[[Prototype]]")]),this._v(" 属性都会被赋予一个非空的值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("[[Prototype]]")]),this._v(" 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意：")]),this._v(" "),s("p",[this._v("对象的 "),s("code",[this._v("[[Prototype]]")]),this._v(" 链接可以为空，虽然很少见。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"proto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proto","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("[[__proto__]]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("每一个 JavaScript 对象(除了null)都具有的一个属性，叫 "),s("code",[this._v("[[__proto__]]")]),this._v("，这个属性会指向该对象的原型。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(291),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("补充：")]),this._v(" "),s("p",[this._v("绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj."),s("strong",[this._v("proto")]),this._v(" 时，可以理解成返回了 Object.getPrototypeOf(obj)。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("[[constructor]]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每个原型都有一个 "),s("code",[this._v("constructor")]),this._v(" 属性指向关联的构造函数。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(292),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"实例与原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例与原型","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例与原型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每当你试图引用对象的属性时会触发 "),s("code",[this._v("[[Get]]")]),this._v(" 操作，对于默认的 "),s("code",[this._v("[[Get]]")]),this._v(" 操作来说，第一步是检查对象本身是否有这个属性，如果有的话就使用它。但是如果无法在对象本身找到需要的属性，就会继续访问对象的 "),s("code",[this._v("[[Prototype]]")]),this._v(" 链。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个过程会持续到找到匹配的属性名或者查找完整的 "),s("code",[this._v("[[Prototype]]")]),this._v(" 链，如果未找到，"),s("code",[this._v("[[Get]]")]),this._v(" 操作的返回值是 undefined 。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意：")]),this._v(" "),s("p",[this._v("如果包含 Proxy 的话，这里对 "),s("code",[this._v("[[Get]]")]),this._v(" 和 "),s("code",[this._v("[[Put]]")]),this._v(" 的讨论就不适用了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("使用 for..in 遍历对象时原理和查找 "),s("code",[this._v("[[Prototype]]")]),this._v(" 链类似，任何可以通过原型链访问到（并且是 enumerable）的属性都会被枚举。使用 in 操作符来检查属性在对象中是否存在时，同样会查找对象的整条原型链（无论属性是否可枚举 ）")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"原型的原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型的原型","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型的原型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 "),s("code",[this._v("[[__proto__]]")]),this._v(" 指向构造函数的 "),s("code",[this._v("[[prototype]]")]),this._v(" ，所以我们再更新下关系图：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(293),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(294),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("br"),t._v(" "),e("author",{attrs:{time:"2019年06月18日"}}),t._v(" "),e("br"),t._v(" "),t._m(1),t._v(" "),e("br"),t._v(" "),e("p",[t._v("JavaScript 不包含传统的类继承模型，而是使用 prototypal 原型模型。虽然这经常被当作是 JavaScript 的缺点被提及，其实基于原型的继承模型比传统的类继承还要强大。")]),t._v(" "),e("p",[t._v("由于 JavaScript 是唯一一个被广泛使用的基于原型继承的语言，所以理解两种继承模式的差异是需要一定时间的，今天我们就来了解一下原型和原型链。")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(2),t._v(" "),e("br"),t._v(" "),t._m(3),t._v(" "),e("br"),t._v(" "),t._m(4),t._v(" "),e("br"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(8),t._v(" "),e("br"),t._v(" "),t._m(9),t._v(" "),e("br"),t._v(" "),e("p",[t._v("举个例子：")]),t._v(" "),t._m(10),e("p",[t._v("关系图如下所示：")]),t._v(" "),t._m(11),t._v(" "),e("br"),t._v(" "),t._m(12),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(13),t._v(" "),e("br"),t._v(" "),t._m(14),t._v(" "),e("br"),t._v(" "),e("p",[t._v("举个例子：")]),t._v(" "),t._m(15),e("p",[t._v("关系图如下所示：")]),t._v(" "),t._m(16),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(17),t._v(" "),e("br"),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("br"),t._v(" "),t._m(21),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(22),t._v(" "),e("br"),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(25),t._v(" "),e("br"),t._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[t._v("原型链是一个由对象组成的有限对象链用于实现继承和共享属性。")])])],1),t._v(" "),e("br"),t._v(" "),e("p",[t._v("最后一张关系图也可以更新为：")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(28),t._v(" "),e("br"),t._v(" "),e("p",[t._v("继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。")])],1)},r,!1,null,null,null);s.default=n.exports}}]);
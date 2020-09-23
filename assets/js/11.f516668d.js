(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{295:function(t,e,r){t.exports=r.p+"assets/img/local-persist-handles-review.fd441f7a.png"},296:function(t,e,r){t.exports=r.p+"assets/img/4.a29055b4.png"},297:function(t,e,r){t.exports=r.p+"assets/img/5.71899da4.png"},298:function(t,e,r){t.exports=r.p+"assets/img/6.f8c95641.png"},299:function(t,e,r){t.exports=r.p+"assets/img/7.0b971e03.png"},577:function(t,e,r){"use strict";r.r(e);var _=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"深入理解-v8-引擎工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-v8-引擎工作原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 深入理解 V8 引擎工作原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v8-引擎的整体工作方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-引擎的整体工作方式","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 引擎的整体工作方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(295),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[r("strong",[r("code",[t._v("handle_scope(isolate)")])]),t._v("：这个语句表示建立一个句柄作用域，用于包含一组 Handle 对象，便于释放它们；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("context = Context::New(isolate)")])]),t._v("：这个语句表示根据 isolate 对象获取一个 context 对象，使用 handle 来管理；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("persistent_context(isolate, context)")])]),t._v("：这个语句表示根据 isolate 和 context 对象创建一个持久句柄对象；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("context_scope(context)")])]),t._v("：这个语句表示为 context 对象创建一个基于栈的域，后面的操作都是在该域中对应的上下文中来进行的；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("source_obj = String::NewFromUtf8(isolate, argv[1])")])]),t._v("：这个语句表示读入 JavaScript 代码，也就是一段字符串；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("script_obj = Script::Compiler(source_obj)")])]),t._v("：这个语句表示将读入的 JavaScript 代码编译成 V8 的内部表示，并保存为一个 script 对象；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("local_reasult = script_obj->Run()")])]),t._v("：这个语句表示执行编译后的内部表示，然后获得生成的结果；")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v8-引擎的编译过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-引擎的编译过程","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 引擎的编译过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(296),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("某些场景下使用解释器更为合适，没必要生成本地代码；")])]),this._v(" "),e("li",[e("p",[this._v("缺少一个中间表示层，减少了优化的机会")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(297),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[r("strong",[r("code",[t._v("Script")])]),t._v("：表示 JavaScript 代码，既包含源码，又包含编译之后生成的本地代码；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("Compiler")])]),t._v("：编译器类，辅助 Script 类来编译生成代码，它主要起一个协调者的作用，会调用 Parser 类来生成抽象语法树和全代码生成器，来为抽象语法树生成本地代码；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("Parser")])]),t._v("：将源代码解释并构建成抽象语法树，使用 AstNodeFactory 类创建它们，并使用 Zone 类来分配内存；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("AstNode")])]),t._v("：抽象语法类节点类，是其它所有节点的基类，它包含非常多的子类，后面会针对不同的子类生成不同的本地代码；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("AstVisitor")])]),t._v("：抽象语法树的访问类，主要用于遍历异构的抽象语法树；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("FullCodeGenerator")])]),t._v("：通过遍历抽象语法树来为 JavaScript 本地可执行代码；")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("根据上图所示，我们可以描述一个编译 JavaScript 代码的过程："),e("strong",[this._v("Script 类调用 Compiler 类的 Compile 函数为其生成本地代码。Compile 函数先使用 Parser 类生成 AST，再使用 FullCodeGenerator 类来生成本地代码。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v8-引擎的运行过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-引擎的运行过程","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 引擎的运行过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(298),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[r("strong",[r("code",[t._v("Script")])]),t._v("：表示 JavaScript 代码，即包含源代码，又包含编译之后生成的本地代码，即是编译入口，又是运行入口；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("Execution")])]),t._v("：运行代码的辅组类，包含一些重要函数，如 Call 函数，它辅组进入和执行 Script 代码；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("JSFunction")])]),t._v("：需要执行的 JavaScript 函数表示类；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("Runtime")])]),t._v("：运行这些本地代码的辅组类，主要提供运行时所需的辅组函数，如：属性访问、类型转换、编译、算术、比较、正则表达式等；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("Heap")])]),t._v("：运行本地代码需要使用的内存堆类；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("MarkCompactCollector")])]),t._v("：垃圾回收机制的主要实现类，用来标记、清除和整理等基本的垃圾回收过程；")])]),t._v(" "),r("li",[r("p",[r("strong",[r("code",[t._v("SweeperThread")])]),t._v("：负责垃圾回收的线程；")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(299),alt:""}})])}],s=r(0),v=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("br"),t._v(" "),r("author",{attrs:{time:"2019年06月02日"}}),t._v(" "),r("br"),t._v(" "),t._m(1),t._v(" "),r("br"),t._v(" "),r("p",[t._v("我们来看看官网提供的一个简单示例，从示例中，我们可以初步理解 V8 引擎的工作方式：")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("上图中没有描述如何创建一个 Isolate 对象，此对象可以通过 Isolate::GetCurrent 来获取，它会创建一个 Isolate 实例，后面的操作都是在它提供的环境中进行的。我们接着往下看：")]),t._v(" "),r("br"),t._v(" "),t._m(3),t._v(" "),r("br"),t._v(" "),r("p",[t._v("在上面的图中可以看到句柄堆栈（handle-stack）和在堆中分配的对象（heap-allocated objects）。请注意 Context::New() 返回的持久句柄并不在句柄堆栈中。")]),t._v(" "),r("p",[t._v("当析构函数 HandleScope 被调用，即删除句柄作用域时，如果没有别的句柄引用，被删除作用域内的所有句柄所指向的对象都会在下次垃圾回收时被标记为删除。垃圾收集器还可以从堆中删除 source_obj 和 script_obj 对象，因为他们不再被任何句柄引用且不能在 JavaScript 中访问。由于上下文句柄（context handle）是一个持久句柄，它不会在超出句柄作用于后被删除。删除上下文句柄唯一的方法是显式的调用它的 Dispose 方法。")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(4),t._v(" "),r("br"),t._v(" "),r("p",[t._v("鉴于 JavaScript 语言的工作方式，JavaScript 代码的编译和运行都是在用户使用它们的时候发生。")]),t._v(" "),r("p",[t._v("同时，V8 引擎有一个非常重要的特点就是延迟思想，这使得很多 JavaScript 代码的编译直到被调用的时候才会发生，这样做可以减少时间开销。")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("上图是 V8 引擎编译 JavaScript 代码的过程，可以看到不同于 JavaScriptCore 引擎，V8 引擎并不将抽象语法树转变成字节码或其他中间表示，而是通过 JIT 编译器的全代码生成器直接生成本地代码。")]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("主要原因是减少抽象语法树到字节码的转化时间，但是也可能代码巨大的时间浪费，其中包含至少两点：")]),t._v(" "),t._m(6),t._v(" "),r("br"),t._v(" "),r("p",[t._v("下面来看一看 V8 引擎编译 JavaScript 代码生成本地代码的主要过程，如下图所示：")]),t._v(" "),t._m(7),t._v(" "),r("br"),t._v(" "),t._m(8),t._v(" "),r("br"),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("在执行编译之前，V8 引擎会构建一个运行环境，并构建众多全局对象并加载一些内置的库（如math库）。根据延迟编译的思想，在 JavaScript 源代码中，并非所有的函数都被编译生成本地代码，而是在调用时才会编译。")]),t._v(" "),r("p",[t._v("V8 会在生成本地代码后，使用数据分析器(profiler)采集一些信息，然后根据这些数据将本地代码进行优化，生成更高效的本地代码，这是一个逐步改进的过程。同时，当发现优化后代码的性能还不如未优化的代码，V8 将退回原来的代码，也就是优化回滚。")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(10),t._v(" "),r("br"),t._v(" "),r("p",[t._v("下面来介绍 V8 引擎的运行阶段，该阶段主要流程如下图所示：")]),t._v(" "),t._m(11),t._v(" "),r("br"),t._v(" "),t._m(12),t._v(" "),r("br"),t._v(" "),r("p",[t._v("详细的执行过程如下图所示：")]),t._v(" "),t._m(13)],1)},_,!1,null,null,null);e.default=v.exports}}]);
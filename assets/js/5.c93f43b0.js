(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{266:function(t,s,a){t.exports=a.p+"assets/img/display.08a4677b.png"},267:function(t,s,a){t.exports=a.p+"assets/img/display_flex.3abfe488.png"},268:function(t,s,a){t.exports=a.p+"assets/img/flex_terms.54a0fc96.png"},269:function(t,s,a){t.exports=a.p+"assets/img/no_flex-wrap.c11a9de4.png"},270:function(t,s,a){t.exports=a.p+"assets/img/flex-wap.4941eb75.png"},271:function(t,s,a){t.exports=a.p+"assets/img/flex_space.f21c45fe.png"},272:function(t,s,a){t.exports=a.p+"assets/img/exp-3_button.10f4529d.png"},273:function(t,s,a){t.exports=a.p+"assets/img/exp-3_button_algin.77d8af52.png"},274:function(t,s,a){t.exports=a.p+"assets/img/exp-3_button_flex_end.99d960f9.png"},275:function(t,s,a){t.exports=a.p+"assets/img/exp-3_button_order.bfb3066f.png"},276:function(t,s,a){t.exports=a.p+"assets/img/exp-3_flex.5bf8ad7a.png"},664:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"flex布局笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex布局笔记","aria-hidden":"true"}},[t._v("#")]),t._v(" flex布局笔记")]),t._v(" "),e("h2",{attrs:{id:"示例一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例一","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例一:")]),t._v(" "),e("p",[t._v("可以看到这个页面有一个含有顶级标题的 "),e("code",[t._v("<header>")]),t._v(" 元素，和一个包含三个 "),e("code",[t._v("<article>")]),t._v(" 的 "),e("code",[t._v("<section>")]),t._v(" 元素。使用这些来创建一个非常的标准三列布局，如下图所示：")]),t._v(" "),e("p",{attrs:{align:"left"}},[e("img",{attrs:{src:a(266),alt:"display.png",width:"500"}})]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"操作一：指定元素的布局为-flexible"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作一：指定元素的布局为-flexible","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作一：指定元素的布局为 flexible")]),t._v(" "),e("p",[t._v("首先，需要选择将哪些元素设置为柔性的盒子。我们需要给这些 flexible 元素的父元素 "),e("code",[t._v("display")]),t._v(" 设置一个特定值。在本例中，我们想要设置 "),e("code",[t._v("<article>")]),t._v(" 元素，因此我们给 "),e("code",[t._v("<section>")]),t._v("（变成了 flex 容器）设置 "),e("code",[t._v("display")]),t._v("，代码如下：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("效果如图所示：")]),t._v(" "),e("p",{attrs:{align:"left"}},[e("img",{attrs:{src:a(267),alt:"display_flex.png",width:"500"}})]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("flex 模型说明:\n当元素表现为 flex 框时，它们沿着两个轴来布局：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(268),alt:"flex_terms.png"}})]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("主轴")]),t._v("（main axis）是沿着 flex 元素放置的方向延伸的轴（横轴）。该轴的开始和结束被称为 "),e("strong",[t._v("main start")]),t._v(" 和 "),e("strong",[t._v("main end")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("交叉轴")]),t._v("（cross axis）是垂直于 flex 元素放置方向的轴（纵轴）。该轴的开始和结束被称为 "),e("strong",[t._v("cross start")]),t._v(" 和 "),e("strong",[t._v("cross end")]),t._v("。")]),t._v(" "),e("li",[t._v("设置了 display: flex 的父元素（在本例中是 "),e("code",[t._v("<section>")]),t._v("）被称之为 flex 容器（flex container）。")]),t._v(" "),e("li",[t._v("在 flex 容器中表现为柔性的盒子的元素被称之为 flex 项（flex item）（本例中是 "),e("code",[t._v("<article>")]),t._v(" 元素）。")])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"操作二：通过flex-direction属性指定主轴方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作二：通过flex-direction属性指定主轴方向","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作二：通过flex-direction属性指定主轴方向")]),t._v(" "),e("p",[t._v("弹性盒子提供了 "),e("code",[t._v("flex-direction")]),t._v(" 这样一个属性，它可以指定主轴的方向（弹性盒子子类放置的地方）— 它默认值是 "),e("code",[t._v("row")]),t._v("，这使得它们在按你浏览器的默认语言方向排成一排（在英语/中文浏览器中是从左到右，横向排列）。")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("将以下声明添加到 section 元素的 css 规则里：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("这会将那些元素设置为列布局，就像我们添加这些 CSS 之前，如上图一所示。")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"示例二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例二","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例二:")]),t._v(" "),e("h3",{attrs:{id:"操作三：通过flex-wrap属性让弹性盒子在必要时换行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作三：通过flex-wrap属性让弹性盒子在必要时换行","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作三：通过flex-wrap属性让弹性盒子在必要时换行")]),t._v(" "),e("p",[t._v("在布局中使用定宽或者定高的时候，可能会有一个问题：即处于容器中的弹性盒子子元素会溢出，破坏了布局。如图所示:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(269),alt:"no_flex-wap"}})]),t._v(" "),e("p",[t._v("我们可以看到，子代确实超出了它们的容器。解决此问题的一种方法是将以下声明添加到 section css 规则中：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wrap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("效果如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(270),alt:"flex-wrap"}})]),t._v(" "),e("p",[t._v("现在我们有了多行弹性盒子，任何溢出的元素将被移到下一行。在 "),e("code",[t._v("<article>")]),t._v(" 元素上设置的 flex:200px规则，意味着每个元素的宽度至少是200px。")]),t._v(" "),e("p",[t._v("我们也可以做得更多，通过改变 "),e("code",[t._v("flex-direction")]),t._v(" 属性值为 "),e("code",[t._v("row-reverse")]),t._v(" — 仍然有多行布局，但是每一行元素排列的方向和原来是相反的了。")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"操作四-使用flex-flow属性进行缩写操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作四-使用flex-flow属性进行缩写操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作四: 使用flex-flow属性进行缩写操作")]),t._v(" "),e("p",[t._v("注意 "),e("code",[t._v("flex-direction")]),t._v(" 和 "),e("code",[t._v("flex-wrap")]),t._v(" 的缩写 "),e("code",[t._v("flex-flow")]),t._v("。比如，你可以将:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wrap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("替换为:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row wrap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"操作五-控制flex项占用空间的比例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作五-控制flex项占用空间的比例","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作五: 控制flex项占用空间的比例")]),t._v(" "),e("p",[t._v("拿第一个操作的代码进行新的修改，第一步，将以下规则添加到 CSS 的底部：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这是一个无单位的比例值，表示每个 "),e("code",[t._v("flex")]),t._v(" 项沿主轴的可用空间大小。本例中，我们设置 "),e("code",[t._v("<article>")]),t._v(" 元素的 "),e("code",[t._v("flex")]),t._v(" 值为 1，这表示每个元素占用空间都是相等的，占用的空间是在设置 padding 和 margin 之后剩余的空间。因为它是一个比例，这意味着将每个 flex 项的设置为 400000 的效果和 1 的时候是完全一样的。")]),t._v(" "),e("p",[t._v("现在在上一个规则下添加：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article:nth-of-type(3)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("效果如图所示:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(271),alt:"flex_space.png"}})]),t._v(" "),e("p",[t._v("可以看到第三个 "),e("code",[t._v("<article>")]),t._v(" 元素占用了两倍的可用宽度, 前两个 flex 项各有一个，因此它们占用每个可用空间的 1/4。 第三个有两个单位，所以它占用 2/4 或这说是 1/2 的可用空间。")]),t._v(" "),e("p",[t._v("还可以指定 flex 的最小值, 尝试修改现有的 article 规则：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 200px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article:nth-of-type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2 200px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这表示“每个flex 项将首先给出200px的可用空间，如果每个 flex 项可用小于200px, 进行平均分配。如果每个 flex 项可用空间大于200px，剩余的可用空间将根据分配的比例共享“。")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("弹性盒子的真正价值可以体现在它的灵活性/响应性，如果你调整浏览器窗口的大小，或者增加一个 "),e("code",[t._v("<article>")]),t._v(" 元素，这时的布局仍旧是好的。")])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"操作六-flex的缩写与全写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作六-flex的缩写与全写","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作六: flex的缩写与全写")]),t._v(" "),e("p",[e("code",[t._v("flex")]),t._v(" 规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。这是一个简写属性，用来设置 "),e("code",[t._v("flex-grow")]),t._v(", "),e("code",[t._v("flex-shrink")]),t._v(" 与 "),e("code",[t._v("flex-basis")]),t._v(" :")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("第一个就是上面所讨论过的无单位比例。可以单独指定全写 "),e("code",[t._v("flex-grow")]),t._v(" 属性的值。")])]),t._v(" "),e("li",[e("p",[t._v("第二个无单位比例 — "),e("code",[t._v("flex-shrink")]),t._v(" — 一般用于溢出容器的 flex 项。这指定了从每个 flex 项中取出多少溢出量，以阻止它们溢出它们的容器。 这是一个相当高级的弹性盒子功能，这里不进一步说明。")])]),t._v(" "),e("li",[e("p",[t._v("第三个是上面讨论的最小值。可以单独指定全写 "),e("code",[t._v("flex-basis")]),t._v(" 属性的值。")])])]),t._v(" "),e("p",[t._v("建议不要使用全写属性，除非你真的需要（比如要去覆盖之前写的）。使用全写会多些很多的代码，它们也可能有点让人困惑。")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"示例三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例三","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例三:")]),t._v(" "),e("h3",{attrs:{id:"操作七-使用align-items和justify-content控制水平和垂直对齐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作七-使用align-items和justify-content控制水平和垂直对齐","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作七: 使用align-items和justify-content控制水平和垂直对齐")]),t._v(" "),e("p",[t._v("可以看到一个整洁，灵活的按钮/工具栏。 如图所示:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(272),alt:"exp-3_button.png"}})]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("将下面的CSS添加到例子的底部, 可以看到这些按钮很好的垂直水平居中了:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space-around"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("效果如下图所示:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(273),alt:"exp-3_button_align.png"}})]),t._v(" "),e("br"),t._v(" "),e("p",[e("code",[t._v("align-items")]),t._v(" 控制 flex 项在交叉轴上的位置。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("默认的值是 "),e("code",[t._v("stretch")]),t._v("，其会使所有 flex 项沿着交叉轴的方向拉伸以填充父容器。如果父容器在交叉轴方向上没有固定宽度（即高度），则所有 flex 项将变得与最长的 flex 项一样长（即高度保持一致）。我们的第一个例子在默认情况下得到相等的高度的列的原因。")])]),t._v(" "),e("li",[e("p",[t._v("在上面规则中使用的 "),e("code",[t._v("center")]),t._v(" 值会使这些项保持其原有的高度，但是会在交叉轴居中。这就是那些按钮垂直居中的原因。")])]),t._v(" "),e("li",[e("p",[t._v("你也可以设置诸如 "),e("code",[t._v("flex-start")]),t._v(" 或 "),e("code",[t._v("flex-end")]),t._v(" 这样使 flex 项在交叉轴的开始或结束处对齐所有的值, 比如:")])])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button: first-child")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-end"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("效果如下图所示:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(274),alt:"exp-3_button_flex_end.png"}})]),t._v(" "),e("br"),t._v(" "),e("p",[e("code",[t._v("justify-content")]),t._v(" 控制 flex 项在主轴上的位置。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("默认值是 "),e("code",[t._v("flex-start")]),t._v("，这会使所有 flex 项都位于主轴的开始处。")])]),t._v(" "),e("li",[e("p",[t._v("你也可以用 "),e("code",[t._v("flex-end")]),t._v(" 来让 flex 项到结尾处。")])]),t._v(" "),e("li",[e("p",[t._v("center 在 "),e("code",[t._v("justify-content")]),t._v(" 里也是可用的，可以让 flex 项在主轴居中。")])]),t._v(" "),e("li",[e("p",[t._v("而我们上面用到的值 "),e("code",[t._v("space-around")]),t._v(" 是很有用的——它会使所有 flex 项沿着主轴均匀地分布，在任意一端都会留有一点空间。还有一个值是 "),e("code",[t._v("space-between")]),t._v("，它和 "),e("code",[t._v("space-around")]),t._v(" 非常相似，只是它不会在两端留下任何空间。")])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"操作八-使用order属性对flex项进行排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作八-使用order属性对flex项进行排序","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作八: 使用order属性对flex项进行排序")]),t._v(" "),e("p",[t._v("弹性盒子可以改变 flex 项的布局位置，而不会影响到源顺序（即 dom 树里元素的顺序）。这也是传统布局方式很难做到的一点。")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("将下面的 CSS 添加到示例代码下面:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button: first-child")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("效果下图所示:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(275),alt:"exp-3_button_order.png"}})]),t._v(" "),e("p",[t._v('可以看到 "Smile" 按钮移动到了主轴的末尾。下面谈下它实现的一些细节：')]),t._v(" "),e("ul",[e("li",[e("p",[t._v("所有 flex 项默认的 "),e("code",[t._v("order")]),t._v(" 值是 0。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("order")]),t._v(" 值大的 flex 项比 "),e("code",[t._v("order")]),t._v(" 值小的在显示顺序中更靠后。")])]),t._v(" "),e("li",[e("p",[t._v("相同 "),e("code",[t._v("order")]),t._v(" 值的 flex 项按源顺序显示。所以假如你有四个元素，其 "),e("code",[t._v("order")]),t._v(" 值分别是2，1，1和0，那么它们的显示顺序就分别是第四，第二，第三，和第一。")])]),t._v(" "),e("li",[e("p",[t._v("第三个元素显示在第二个后面是因为它们的 "),e("code",[t._v("order")]),t._v(" 值一样，且第三个元素在源顺序中排在第二个后面。")])])]),t._v(" "),e("p",[t._v("你也可以给 "),e("code",[t._v("order")]),t._v(' 设置负值使它们比值为 0 的元素排得更前面。比如，你可以设置 "Blush" 按钮排在主轴的最前面：')]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button:last-child")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"示例四"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例四","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例四:")]),t._v(" "),e("h3",{attrs:{id:"操作九-flex嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作九-flex嵌套","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作九: flex嵌套")]),t._v(" "),e("p",[t._v("弹性盒子也能创建一些颇为复杂的布局。设置一个元素为 flex 项目，那么他同样成为一个 flex 容器，它的直接子节点也表现为 flexible box。 这个例子中一个 "),e("code",[t._v("<section>")]),t._v(" 元素包含了三个 "),e("code",[t._v("<article>")]),t._v(" 元素。第三个 "),e("code",[t._v("<article>")]),t._v(" 元素包含了三个 "),e("code",[t._v("<div>")]),t._v(" ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("section - article\n          article\n          article - div - button   \n                    div   button\n                    div   button\n                          button\n                          button\n")])])]),e("br"),t._v(" "),e("p",[t._v("首先，设置 "),e("code",[t._v("<section>")]),t._v(" 的子节点布局为 flexible box:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("br"),t._v(" "),e("p",[t._v("然后给 "),e("code",[t._v("<article>")]),t._v(" 元素设置 flex 值。特别注意这里的第二条CSS规则—我们设置第三个 "),e("code",[t._v("<article>")]),t._v(" 元素的子节点的布局同样为 flex ，但是属性值为列布局。")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 200px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article:nth-of-type(3)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3 200px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("br"),t._v(" "),e("p",[t._v("接下来选择了第一个 "),e("code",[t._v("<div>")]),t._v(" , 使用 flex: 1 100px; 简单的给它一个最小的高度 100px，然后设置它的子节点（"),e("code",[t._v("<button>")]),t._v(" 元素）为 flex 项。在这里将它们放在一个包装行("),e("code",[t._v("wrap raw")]),t._v(")中，使它们居中对齐，就像在前面看到的单个按钮示例中做的那样:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article:nth-of-type(3) div:first-child")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row wrap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space-around"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("br"),t._v(" "),e("p",[t._v("最后给按钮设置大小，有意思的是给它一个值为1的 "),e("code",[t._v("flex")]),t._v(" 属性。如果你调整浏览器窗口宽度，你会看到这是一个非常有趣的效果。按钮将尽可能占用最多的空间，尽可能多的堆在同一条线上，但是当它们不再适合在同一条线上，他们中的一些会到下一行去:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 18px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("最终效果图:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(276),alt:"exp-3_flex.png"}})]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"跨浏览器兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨浏览器兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨浏览器兼容性")]),t._v(" "),e("p",[t._v("大多数浏览器都支持 弹性盒子，诸如 Firefox, Chrome, Opera, Microsoft Edge 和 IE 11，较新版本的 Android/iOS 等等。但仍旧有被人使用的老浏览器不支持弹性盒子（或者支持，但是只是支持非常非常老版本的 弹性盒子）。")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("p",[t._v("以上就是弹性盒子的基础知识")])])}],n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);s.default=r.exports}}]);
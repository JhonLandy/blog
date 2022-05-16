(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{414:function(t,a,s){t.exports=s.p+"assets/img/render.ee2c6c44.jpg"},538:function(t,a,s){"use strict";s.r(a);var r=s(30),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("big",[t._v("作者：糯米")])],1),t._v(" "),r("p",[r("big",[t._v("日期：2020年10月13号")])],1),t._v(" "),r("h1",{attrs:{id:"浏览器性能指标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器性能指标"}},[t._v("#")]),t._v(" 浏览器性能指标")]),t._v(" "),r("h2",{attrs:{id:"fp、fcp、fmp与tti"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fp、fcp、fmp与tti"}},[t._v("#")]),t._v(" FP、FCP、FMP与TTI")]),t._v(" "),r("h3",{attrs:{id:"fp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fp"}},[t._v("#")]),t._v(" FP")]),t._v(" "),r("p",[t._v("FP（全称“First Paint”，翻译为“首次绘制”） 是时间线上的第一个“时间点”，它代表浏览器第一次向屏幕传输像素的时间，也就是页面在屏幕上首次发生视觉变化的时间。")]),t._v(" "),r("h3",{attrs:{id:"fcp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fcp"}},[t._v("#")]),t._v(" FCP")]),t._v(" "),r("p",[t._v("FCP（全称“First Contentful Paint”，翻译为“首次内容绘制”），顾名思义，它代表浏览器第一次向屏幕绘制 “内容”。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("注意：只有首次绘制文本、图片（包含背景图）、非白色的canvas或SVG时才被算作FCP。")])]),t._v(" "),r("p",[t._v("FP与FCP这两个指标之间的主要区别是：")]),t._v(" "),r("p",[r("strong",[t._v("FP")]),t._v("是当浏览器开始绘制内容到屏幕上的时候，只要在视觉上开始发生变化，无论是什么内容触发的视觉变化，在这一刻，这个时间点，叫做FP。")]),t._v(" "),r("p",[r("strong",[t._v("FCP")]),t._v("指的是浏览器首次绘制来自DOM的内容。例如：文本，图片，SVG，canvas元素等，这个时间点叫FCP。")]),t._v(" "),r("h3",{attrs:{id:"fmp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmp"}},[t._v("#")]),t._v(" FMP")]),t._v(" "),r("p",[t._v("FMP（全称“First Meaningful Paint”，翻译为“首次有效绘制”） 表示页面的“主要内容”开始出现在屏幕上的时间点。它是我们测量用户加载体验的主要指标。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("注意：FMP本质上是通过一个算法来猜测某个时间点可能是FMP，所以有时候不准。")])]),t._v(" "),r("h3",{attrs:{id:"tti"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tti"}},[t._v("#")]),t._v(" TTI")]),t._v(" "),r("p",[t._v("TTI（全称“Time to Interactive”，翻译为“可交互时间”） 表示网页第一次 完全达到可交互状态 的时间点。可交互状态指的是页面上的UI组件是可以交互的（可以响应按钮的点击或在文本框输入文字等），不仅如此，此时主线程已经达到“流畅”的程度，主线程的任务均不超过50毫秒。TTI很重要，因为TTI可以让我们了解我们的产品需要多久可以真正达到“可用”的状态。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(414),alt:"Image from alias"}})]),t._v(" "),r("h2",{attrs:{id:"性能分析工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能分析工具"}},[t._v("#")]),t._v(" 性能分析工具")]),t._v(" "),r("h3",{attrs:{id:"谷歌开发者工具的-性能-选项进行分析-performance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#谷歌开发者工具的-性能-选项进行分析-performance"}},[t._v("#")]),t._v(" 谷歌开发者工具的“性能”选项进行分析：performance")]),t._v(" "),r("h3",{attrs:{id:"谷歌的lighthouse工具-国内网络环境-基于-node-版本≥6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#谷歌的lighthouse工具-国内网络环境-基于-node-版本≥6"}},[t._v("#")]),t._v(" 谷歌的Lighthouse工具（国内网络环境）：基于 node（版本≥6）")]),t._v(" "),r("p",[t._v("安装：npm install -g lighthouse")]),t._v(" "),r("p",[t._v("运行使用：lighthouse "),r("url",[t._v(" --view")])],1),t._v(" "),r("p",[t._v("例如：lighthouse https://www.baidu.com/ --view")]),t._v(" "),r("p",[t._v("如果可以翻墙的话：可以在 Chorome 网上应用商店中安装 - 网页性能优化的扩展程序：Lighthouse、PageSpeed Insights ；")]),t._v(" "),r("h3",{attrs:{id:"在线网页性能分析工具-推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在线网页性能分析工具-推荐"}},[t._v("#")]),t._v(" 在线网页性能分析工具（推荐）")]),t._v(" "),r("p",[t._v("https://tools.pingdom.com/")]),t._v(" "),r("p",[t._v("Pingdom是一个免费的网站速度测试工作，不仅是看起来非常棒，而且尽可能多的呈现出你的网站的各方面信息。")]),t._v(" "),r("h3",{attrs:{id:"使用-chrome-原生-lazyload-属性进行图片懒加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-chrome-原生-lazyload-属性进行图片懒加载"}},[t._v("#")]),t._v(" 使用 Chrome 原生 lazyload 属性进行图片懒加载")]),t._v(" "),r("blockquote",[r("p",[t._v("chrome://flags/#enable-lazy-image-loading")])]),t._v(" "),r("p",[t._v("复制它到 Chrome 浏览器的地址栏，然后找到如下选项，将其设置为「Enabled」。")]),t._v(" "),r("p",[r("strong",[t._v("例如：")]),r("img",{attrs:{src:"具体图片",alt:"",lazyload:"on"}})]),t._v(" "),r("p",[r("strong",[t._v("说明：")])]),t._v(" "),r("p",[t._v("auto 浏览器自行判断")]),t._v(" "),r("p",[t._v("on 开启懒加载")]),t._v(" "),r("p",[t._v("off 关闭懒加载")])])}),[],!1,null,null,null);a.default=v.exports}}]);
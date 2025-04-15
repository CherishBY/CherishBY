---
title: 什么是HTML？
tags:
  - web
  - HTML
created: 2025/04/13 23:39:44
updated: 2025/04/15 23:12:15
poster:
---
# {{$frontmatter.title}}

## HTML

根据[官方](https://developer.mozilla.org/zh-CN/docs/Web/HTML)说明：
HTML：超文本标记语言（**H**yper**T**ext **M**arkup **L**anguage），它定义了网页内容的含义和结构。

HTML 使用“标记”（markup）来注明文本、图片和其他内容，以便于在 Web 浏览器中显示。例： [`<head>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/head)、[`<title>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/title)、[`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/body)、[`<header>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/header)、[`<footer>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/footer)、[`<article>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/article)、[`<section>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/section)等

**HTML元素**：是由在“`<`”和“`>`”中包裹的元素名，元素可以用大写，小写或混合形式书写，例：`<title>`、`<TITLE>`、`<TiTle>`，不过更推荐**使用小写**。

HTML元素可将网页中不同含义的文本或者内容隔开。

## 个人理解

> 以下内容如有错误的部分仅为个人理解，不代表官方立场

HTML元素呢，就像是网页的骨架零件，零件可以套零件，也可以组合成一个大的零件

但我们在做页面的时候，拿到的反而是成品，就需要我们根据成品，从上到下、从左到右、从外到里去的去分析，页面该如何拆分成一个一个的元素零件，然后再重新给它组装起来

至于拆分出来的零件是什么干嘛用的（该用什么元素），这就需要由零件的内容来决定，也就是**语义化**

HTML元素的代码结构，某一方面决定了CSS书写是否能更流程和更简洁

至于网页长的好不好看，零件该怎么摆，这就需要由CSS来决定了

<!-- TODO：需添加语义化和CSS的链接 -->

## 参考资料：
> 涉及官方解释部分内容，引入的链接优先使用MDN的，有对应的中文翻译。
- [HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
---
title: NumberInput 加减输入框
publishDate: 2018-11-19
cols: 1
tags:
  - react component
---

## API

组件的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 输入框默认值 | string | - |
| value | 输入框内容, 如果同时设置了defaultValue和value属性，以value为准 | string | - |
| accuracy | 加减的步长 | number | 1 |
| width | 输入框的宽度 | number | 120 |
| onChange | 输入框值改变时触发的回调函数 | (value) => void | () => void |
| interceptor | 点击加减号触发的拦截器函数，如果返回`true`则继续加减行为，否则加减不会生效。| (originValue, calcuatedValue, operation ['PLUS'/'MINUS']) => boolean  | () => true |
---
title: NumberInput 加减输入框
publishDate: 2018-11-19
cols: 1
tags:
  - react component
---

### antd自定义表单组件：可加减的输入框

---

## API

组件的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 输入框默认值 | string | - |
| value | 输入框内容 | string | - |
| accuracy | 加减的步长 | number | 1 |
| width | 输入框的宽度 | number | 120 |
| onPlus | 点击加号的回调函数 | (value) => void | () => void |
| onMinus | 点击减号的回调函数 | (value) => void | () => void |
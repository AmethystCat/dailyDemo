---
title: 基本用法
order: 2
---

吧啦吧啦吧啦

```jsx
import { NumberInput } from 'gateway-lib';

const onMinus = (value) => console.log(value);
const onPlus = (value) => console.log(value);
const onChange = (value) => console.log(value);

ReactDOM.render(<NumberInput {...{ onMinus, onPlus, onChange }} />, mountNode);
```

```css
.ant-input {
  text-align: center;
}
```
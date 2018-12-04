---
title: 基本用法
order: 2
---

组件的基本用法。

```jsx
import { NumberInput } from 'gateway-lib';

const onChange = (value) => console.log(value);
const defaultValue = '2';

ReactDOM.render(<NumberInput {...{ onChange, defaultValue }} />, mountNode);
```

```css
.ant-input {
  text-align: center;
}
```
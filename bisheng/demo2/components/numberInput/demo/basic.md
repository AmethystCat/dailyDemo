---
title: 基本用法
order: 2
---

```jsx
import { NumberInput } from 'gateway-lib';

const onMinus = (value) => console.log(value);
const onPlus = (value) => console.log(value);
const onChange = (value) => console.log(value);

ReactDOM.render(<NumberInput {...{ onMinus, onPlus, onChange }} />, mountNode);
```
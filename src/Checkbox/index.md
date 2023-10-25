# Checkbox

This is an example component.

```jsx
import { Checkbox } from 'jing-ui';

export default () => <Checkbox children="Hello dumi!" />
```

## 受控的 checkbox

This is an example component.

```jsx
import { Checkbox } from 'jing-ui';
import { useState } from 'react'

export default () => {
  const [checked, setChecked] = useState(true)

  const onChange = (val) => {
    console.log("val", val)
    setChecked(val)
  }
  return <Checkbox children="Hello dumi!" checked={checked} onChange={onChange} />
}
```

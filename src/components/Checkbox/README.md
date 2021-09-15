# Description of component

`CheckBox` can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.
If you have a single option, avoid using a checkbox and use an on/off switch instead.

#### Example :

![](assets/desc.png)

## How to import

```node
import { CheckBox } from "app/shared/components/CheckBox";
```

## How to use

```node
<CheckBox
  size="small"
  checked={true}
  onChange={handleChange}
  name="terms"
/>
```

## Props

All others Checkbox props

## CSS properties we can override

You can override all CSS properties of the CheckboxProps type of Material UI.

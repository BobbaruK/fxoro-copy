# SCSSeco Vue3 Caret

## How to use

| \*  | Prop    | Type   |  Default   | Requiered |
| :-: | ------- | ------ | :--------: | :-------: |
| 1.  | `caret` | String | caret-down |  &times;  |

1. Set the type of caret. <br> available caret types:
   - caret-down
   - caret-down-bold

### Basic usage

```js
import Caret from "../001-super_global_files/components/Caret/Caret.vue";

export default {
  ...
  components: { Caret },
  ...
};
```

```html
<Caret />
```

### Type of caret

```html
<Caret :caret="'caret-down-bold'" />
```

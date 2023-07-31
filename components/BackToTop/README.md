# SCSSeco Vue3 BackToTop

## How to use

| \*  | Prop       | Type    |  Default   | Requiered |
| :-: | ---------- | ------- | :--------: | :-------: |
| 1.  | `progress` | Boolean |    true    |  &times;  |
| 2.  | `caret`    | String  | caret-down |  &times;  |

1. Show/hide the progress bar
2. Set the type of caret. Check [caret](../Caret/)

### Basic usage

```js
import BackToTop from "../001-super_global_files/components/BackToTop/BackToTop.vue";

export default {
  ...
  components: { BackToTop },
  ...
};
```

```html
<BackToTop />
```

### Hide the progress bar

```html
<BackToTop :progress="false" />
```

### Change the caret type

```html
<BackToTop :caret="'caret-down-bold'" />
```

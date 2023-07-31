# SCSSeco Vue3 SVGMask

## How to use

| \*  | Prop          | Type   | Default | Requiered |
| :-: | ------------- | ------ | :-----: | :-------: |
| 1.  | `svg-encoded` | String |    -    |  &check;  |

1. Get the svg encoded **Ready for CSS** via https://yoksel.github.io/url-encoder/ <br> ex: url("...")

### Basic usage

```js
import SVGMask from "../001-super_global_files/components/SVGMask/SVGMask.vue";

export default {
  ...
  components: { SVGMask },
  setup() {
    const svgImagePath = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='50' cx='50' cy='50' fill='tomato'/%3E%3Ccircle r='41' cx='47' cy='50' fill='orange'/%3E%3Ccircle r='33' cx='48' cy='53' fill='gold'/%3E%3Ccircle r='25' cx='49' cy='51' fill='yellowgreen'/%3E%3Ccircle r='17' cx='52' cy='50' fill='lightseagreen'/%3E%3Ccircle r='9' cx='55' cy='48' fill='teal'/%3E%3C/svg%3E")`
    return { svgImagePath }
  }
};
```

```html
<SVGMask :svg-encoded="svgImagePath" />
```

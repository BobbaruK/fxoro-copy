# SCSSeco Vue3 Loader

svg animation credit: [Sam Herbert](https://samherbert.net/svg-loaders/ "Sam Herbert")

## How to use

| \*  | Prop     | Type   | Default | Requiered |
| :-: | -------- | ------ | :-----: | :-------: |
| 1.  | `loader` | String |  rings  |  &times;  |

1. Set the loader animation <br>available animations:
   - audio
   - ball-triangle
   - bars
   - circles
   - grid
   - hearts
   - oval
   - puff
   - rings
   - spinning-circles
   - tail-spin
   - three-dots

### Basic usage


```js
import Loader from "../001-super_global_files/components/Loader/Loader.vue";

export default {
  ...
  components: { Loader },
  ...
};
```

```html
<Loader />
```

### Loader animation

```html
<Loader :loader="'audio'" />
```

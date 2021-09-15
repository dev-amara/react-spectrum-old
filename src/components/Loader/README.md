# Description of component

Loaders inform the user of loading or computing processes being carried out by the system. The progress can either be
displayed with specific details or communicated as undefined by means of a repeated animation.

The size of the loader components depends on the basic type size used, which can adapt to the viewport width in
question. As such, the size of the components is flexible.

#### Example :

## How to import

```node
import Loader from "app/shared/components/Loader";
```

## How to use

```node
....
  <React.Suspense fallback={<Loader children={<img src={Logo} />} />}>
....
```

## Props

| Props       | Required | Description | Type |
| :---        | :---     | :---        |:---  |
| `children` | false | The content of the button. | `node` |
| `size` | false | Allows you to define the foreground color of a text element and its possible decorations. | `string` |

## CSS properties we can override

You can override all CSS properties like a `div` element.
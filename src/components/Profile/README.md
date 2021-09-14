# Description of component

Profile is a component to display the logged-in user on the dashboard.

#### Example :

![](assets/desc.png)

## How to import

```node
import { Profile } from "app/shared/components/Profile";
```

## How to use

```node
....
<Profile
  username={"Amara Bamba"}
  logo={"./avatar.png"}
  email={"amara.dianney@gmail@gmail.com"}
/>
....
```

## Props

| Props       | Required | Description | Type |
| :---        | :---     | :---        |:---  |
| `username`       | true    | Taking a user full name | `string` |
| `logo`       | true    | Taking user logo file | `string` |
| `email`       | true    | Taking a valid email| `string` |

## CSS properties we can override

You can override all CSS properties of the ListProps type of Material UI.

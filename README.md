# neetoIcons

The neetoIcons and neetoIconsRN library are a collection of SVG React component icons that drives
the experience in the neeto products built at BigBinary.

### Installation

Web:

```
yarn add @bigbinary/neeto-icons
```

React Native:

```
yarn add @bigbinary/neeto-icons-rn
```


### Usage

Web:

```javascript
import { Clock } from "@bigbinary/neeto-icons";
```

React Native:

```javascript
import { Clock } from "@bigbinary/neeto-icons-rn";
```

Anywhere in your React file

```jsx
<Clock color="#1e1e20" size={24} />
```

### Product logos

```javascript
import { Neeto } from "@bigbinary/neeto-icons/logos";
```

### App icons

```javascript
import { NeetoSocial } from "@bigbinary/neeto-icons/app-icons";
```

### Misc icons

```javascript
import { Google } from "@bigbinary/neeto-icons/misc";
```

### Props

| Name      | Type           | Default      | Description                                                   |
| :-------- | :------------- | :----------- | :------------------------------------------------------------ |
| color     | string         | currentColor | CSS color value for the icon.                                 |
| size      | string, number | 24           | Value supplied to height and width attributes of SVG element. |
| className | string         |              | Classes supplied to the SVG element.                          |

### Typeface logos

```javascript
import { Neeto } from "@bigbinary/neeto-icons/typeface-logos";
```

Anywhere in your React file

```jsx
<Neeto height={24} width={48} />
```

| Name      | Type           | Default | Description                                        |
| :-------- | :------------- | :------ | :------------------------------------------------- |
| height    | string, number | 20      | Value supplied to height attribute of SVG element. |
| width     | string, number | auto    | Value supplied to width attribute of SVG element.  |
| className | string         |         | Classes supplied to the SVG element.               |

### How it works

- We use a custom rollup plugin (which can be found in `build/index.mjs`) to
  take all the `.svg` files from the `source` folder and convert them to React
  components that render the respective SVG icon.
- The plugin accepts a configuration object as an argument which can contain the
  following keys:

  | Name                    | Type       | Description                                                                                                              |
  | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ |
  | options                 | `object`   | Options passed to the transform function from react-svgr. (See [full opions list](https://react-svgr.com/docs/options/)) |
  | additionTransformations | `function` | Additional string transformation that can be applied to the generated React code.                                        |
  | source                  | `string`   | Path to the folder where the SVG files are located                                                                       |
  | destination             | `string`   | Path to the folder to place the generated react code                                                                     |

- For each icon, a React icon file will be generated in `generate/icons` folder.
- From there babel through rollup takes the wheel and generates the bundles.

# Building and releasing.

The `@bigbinary/neeto-icons` and `@bigbinary/neeto-icons-rn` package gets published to NPM when we merge a PR
with `patch`, `minor` or `major` label to the `main` branch. The `patch` label
is used for bug fixes, `minor` label is used for new features and `major` label
is used for breaking changes. You can checkout the `Create and publish releases`
workflow in GitHub Actions to get a live update.

In case if you missed to add the label, you can manually publish the package.
For that first you need to create a PR to update the version number in the
`package.json` file and merge it to the `main` branch. After merging the PR, you
need to create a
[new github release](https://github.com/bigbinary/neeto-icons/releases/new) from
main branch. Whenever a new release is created with a new version number, the
github actions will automatically publish the built package to npm. You can
checkout the `Publish to npm` workflow in GitHub Actions to get a live update.

Please note that before publishing the package, you need to verify the
functionality in some of the neeto web and mobile apps locally using `yalc` package
manager. The usage of yalc is explained in this video:
https://youtu.be/QBiYGP0Rhe0

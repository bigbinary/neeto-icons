# neetoIcons

The neetoIcons library is a collection of SVG React component icons that drives the experience in the neeto products built at BigBinary.

### Installation

```
yarn add @bigbinary/neeto-icons
```

### Usage

```javascript
import { Clock } from "@bigbinary/neeto-icons";
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

| Name      | Type           | Default      | Description                                                   |
| :-------- | :------------- | :----------- | :------------------------------------------------------------ |
| height      | string, number | 20           | Value supplied to height attribute of SVG element. |
| width      | string, number | auto           | Value supplied to width attribute of SVG element. |
| className | string         |              | Classes supplied to the SVG element.                          |


### How it works

- It uses a script (`build/generate.js`) to take all the `.svg` files from the `source` folder and converts them to React components that render the SVG icon.
- For each icon, a React icon file will be generated in `src/icons` folder.
- The name of the file will be suffixed with `Icon`.
- If there's a `Clock.svg` in the `source` folder, the script will create a `ClockIcon.js` file in `src/icons`.
- It will also add the necessary export statements in `src/index.js`


# Building and releasing.

The `@bigbinary/neeto-icons` package gets published to NPM when we
merge a PR with `patch`, `minor` or `major` label to the `main` branch. The
`patch` label is used for bug fixes, `minor` label is used for new features and
`major` label is used for breaking changes. You can checkout the
`Create and publish releases` workflow in GitHub Actions to get a live update.

In case if you missed to add the label, you can manually publish the package.
For that first you need to create a PR to update the version number in the
`package.json` file and merge it to the `main` branch. After merging the PR, you
need to create a
[new github release](https://github.com/bigbinary/neeto-icons/releases/new)
from main branch. Whenever a new release is created with a new version number,
the github actions will automatically publish the built package to npm. You can
checkout the `Publish to npm` workflow in GitHub Actions to get a live update.

Please note that before publishing the package, you need to verify the
functionality in some of the neeto web-apps locally using `yalc` package
manager. The usage of yalc is explained in this video:
https://youtu.be/QBiYGP0Rhe0

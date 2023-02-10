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
- For each icon, a React icon file will be generated in `lib/icons` folder.
- The name of the file will be suffixed with `Icon`.
- If there's a `Clock.svg` in the `source` folder, the script will create a `ClockIcon.js` file in `lib/icons`.
- It will also add the necessary export statements in `lib/index.js`

### Build process

- Running `yarn build` will invoke the `yarn generate` script first, which will generate React components from `.svg` files.
- Once `yarn generate` is done, it'll invoke `yarn rollup-compile` which uses `index.js` of the icons sets inside `lib` as the entry point to create respective bundles (`dist/neeto-icons.js`,`dist/app-icons.js`,`dist/logos.js`).
- We use the generated bundle as the `main` file in `package.json` for using it as a package.
- Running the `yarn start` will run the preview in local.

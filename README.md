# neetoIcons

### Installation

```
yarn add @bigbinary/neeto-icons
```

### Usage

```javascript
import { ClockIcon } from "@bigbinary/neeto-icons";
```

Anywhere in your React file

```jsx
<ClockIcon color="#1e1e20" size={24} />
```

### Props

| Name      | Type           | Default      | Description                                                   |
| :-------- | :------------- | :----------- | :------------------------------------------------------------ |
| color     | string         | currentColor | CSS color value for the icon.                                 |
| size      | string, number | 24           | Value supplied to height and width attributes of SVG element. |
| className | string         |              | Classes supplied to the SVG element.                          |

### How it works

- It uses a script (`build/generate.js`) to take all the `.svg` files from the `source` folder and converts them to React components that render the SVG icon.
- For each icon, a React icon file will be generated in `lib/icons` folder.
- The name of the file will be suffixed with `Icon`.
- If there's a `Clock.svg` in the `source` folder, the script will create a `ClockIcon.js` file in `lib/icons`.
- It will also add the necessary export statements in `lib/index.js`

### Build process

- Running `yarn build` will invoke the `yarn generate` script first, which will generate React components from `.svg` files.
- Once `yarn generate` is done, it'll invoke `yarn webpack-compile` which uses `lib/index.js` as the entry point to create a bundle (`dist/neeto-icons.js`).
- We use the generated bundle as the `main` file in `package.json` for using it as a package.

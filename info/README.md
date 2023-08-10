# Package.json Configuration

This Markdown file provides an overview of the `package.json` configuration for the "info" project.

## Project Information

- **Name:** info
- **Version:** 0.1.0
- **Private:** true

## Dependencies

The project relies on the following dependencies:

- **[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom):** ^5.16.5
- **[@testing-library/react](https://www.npmjs.com/package/@testing-library/react):** ^13.4.0
- **[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event):** ^13.5.0
- **[react](https://www.npmjs.com/package/react):** ^18.2.0
- **[react-dom](https://www.npmjs.com/package/react-dom):** ^18.2.0
- **[react-scripts](https://www.npmjs.com/package/react-scripts):** 5.0.1
- **[web-vitals](https://www.npmjs.com/package/web-vitals):** ^2.1.4

## Scripts

The following scripts are available for this project:

- **start:** `react-scripts start`
- **build:** `react-scripts build`
- **test:** `react-scripts test`
- **eject:** `react-scripts eject`

## ESLint Configuration

The project's ESLint configuration extends the following presets:

- **[react-app](https://www.npmjs.com/package/eslint-config-react-app)**
- **[react-app/jest](https://www.npmjs.com/package/eslint-config-react-app)**

## Browserslist Configuration

The Browserslist configuration specifies browser compatibility for different environments:

### Production

- Versions with a usage share greater than 0.2%
- Excludes browsers that are considered dead or not recommended
- Excludes all Opera Mini versions

### Development

- The last version of Chrome
- The last version of Firefox
- The last version of Safari


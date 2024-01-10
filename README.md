# Getting Started with My Template Frontend

This project is designed to provide a quick start for frontend development and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## TODO:

# File Structure
.
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── AppBar
│   │   ├── AppBar.css
│   │   └── AppBar.tsx
│   ├── Autocomplete
│   │   ├── Autocomplete.css
│   │   └── Autocomplete.tsx
│   ├── Button
│   │   ├── Button.module.css
│   │   └── Button.tsx
│   ├── Card
│   │   ├── Card.css
│   │   └── Card.tsx
│   ├── Chip
│   │   ├── Chip.css
│   │   └── Chip.tsx
│   ├── DateTimePicker
│   │   ├── DateTimePicker.css
│   │   └── DateTimePicker.tsx
│   ├── Dialog
│   │   ├── Dialog.css
│   │   └── Dialog.tsx
│   ├── Drawer
│   │   ├── Drawer.css
│   │   └── Drawer.tsx
│   ├── ExpansionPanels
│   │   ├── ExpansionPanels.css
│   │   └── ExpansionPanels.tsx
│   ├── Header
│   │   ├── Header.module.css
│   │   └── Header.tsx
│   ├── Icons
│   │   ├── Icons.css
│   │   └── Icons.tsx
│   ├── List
│   │   ├── List.css
│   │   └── List.tsx
│   ├── Menu
│   │   ├── Menu.css
│   │   └── Menu.tsx
│   ├── Selection
│   │   ├── Selection.css
│   │   └── Selection.tsx
│   ├── Snackbar
│   │   ├── Snackbar.css
│   │   └── Snackbar.tsx
│   ├── Tab
│   │   ├── Tab.css
│   │   └── Tab.tsx
│   ├── Table
│   │   ├── Table.css
│   │   └── Table.tsx
│   ├── Tabs
│   │   ├── Tabs.css
│   │   └── Tabs.tsx
│   ├── TextInput
│   │   ├── TextInput.css
│   │   └── TextInput.tsx
│   └── Typography
│       ├── Typography.css
│       └── Typography.tsx
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   ├── AboutPage
│   │   ├── AboutPage.css
│   │   └── AboutPage.tsx
│   ├── FormPage
│   │   ├── FormPage.css
│   │   └── FormPage.tsx
│   └── HomePage
│       ├── HomePage.css
│       └── HomePage.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
├── styles
│   ├── Styles.css
│   └── Styles.ts
├── themes
│   ├── ThemeContext.css
│   └── ThemeContext.tsx
└── utils
    └── helperFunctions.tsx
# Components
components: Contains reusable React components. Each component has its own directory with a TypeScript file (.tsx) and a CSS module (.module.css) for styling.
.
├── components
│   ├── Button
│   │   ├── Button.module.css
│   │   └── Button.tsx
│   └── Header
│       ├── Header.module.css
│       └── Header.tsx

# Pages
pages: Contains page-level components, organized into subdirectories like AboutPage and HomePage. Each page component has its own directory with a TypeScript file (.tsx) and a CSS file (.css).

├── pages
│   ├── AboutPage
│   │   ├── AboutPage.css
│   │   └── AboutPage.tsx
│   └── HomePage
│       ├── HomePage.css
│       └── HomePage.tsx

# Utils
utils: Contains utility functions or helper functions. The helperFunctions.tsx file seems to be an example of such a utility.

├── utils
│   └── helperFunctions.tsx

├── App.css
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts


# Other files
Other files: You have standard files like App.css, App.test.tsx, App.tsx, index.css, index.tsx, etc. These files are part of the typical structure created by Create React App.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

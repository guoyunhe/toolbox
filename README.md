# Toolbox of Guo Yunhe

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b6af741-f922-4170-87ed-4c613a61e66d/deploy-status)](https://app.netlify.com/sites/guoyunhe-toolbox/deploys)

## Get Started

### Local Development

```bash
cp .env.example .env
npm install
npm start
```

### Production Deployment

```bash
cp .env.example .env # Skip this step when deploy on Netlify etc.
npm install
npm run build
```

## Technology Stack

- [vite](https://vitejs.dev/) - the build system
- [typescript](https://typescriptlang.org/) - the programming language
- [react](https://reactjs.org/) - the user interface framework
- [react-router](https://reactrouter.com/) - the routing library for single-page-application
- [mui](https://mui.com/) - the design system and component library
- [i18next](https://react.i18next.com/) - the internationalization solution
- [vitest](https://vitest.dev/) - the unit test runner
- [testing-library](https://testing-library.com/) - the unit test toolkit for react

## About The Template

This app is generated from https://github.com/guoyunhe/mui-app-template

Issues and pull requests are always welcome.

Other front-end templates:

- https://github.com/guoyunhe/antd-app-template
- https://github.com/guoyunhe/antd-mobile-app-template

And back-end templates:

- https://github.com/guoyunhe/adonis-api-template

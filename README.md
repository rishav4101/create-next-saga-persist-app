# A NextJs boilerplate with redux-saga and redux-persist.
![GitHub (Pre-)Release Date](https://img.shields.io/github/last-commit/rishav4101/create-next-saga-persist-app?style=for-the-badge)
![npm](https://img.shields.io/npm/v/create-next-saga-persist-app?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/create-next-saga-persist-app?style=for-the-badge)


A *ready-to-use* utility boilerplate to get your project started right away with just one single command. It sets up *redux-saga* and *redux-persist* with *NextJs* and makes it production ready. If you are a NextJs lover and need Redux for your next project this is definately the right *boilerplate* to start with.

## Features :
<img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" height="40px"/> &nbsp;
<img src="https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/redux-persist-machine/redux-persist-machine-logo.png" height="45px"/> &nbsp;
<img src="https://redux-saga.js.org/img/Redux-Saga-Logo-Landscape.png" height="35px"/>


* NextJs ```v11```
* React ```v17```
* React-Redux ```v7```
* Redux-Saga ```v1```
* Redux-Persist ```v6```
* Basic folder structure Ready-to-go.
* An example [Countries API](https://restcountries.eu/rest/v2/) fetched.

## Let's get started!
* Choose a folder to create your project and create using following methods:
### npx 
```
npx create-next-saga-persist-app your-app-name
```
### npm
```
npm init next-saga-persist-app your-app-name
```
<p align="center">OR</p>

```
npm create next-saga-persist-app your-app-name
```
It will create a directory called ```your-app-name``` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:
```
your-app-name
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── next.config.js
├── .gitignore
├── .env.example
├── .eslintrc
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── pages
│   ├── _app.js
│   └── index.js
├── redux
│   ├── actions
│   |   └── countriesAction.js
│   ├── reducers
|   |   ├── countries.js
│   |   └── index.js
│   ├── sagas
|   |   ├── countriesSaga.js
│   |   └── index.js
│   └── store.js
└── styles
    ├── globals.css
    └── Home.module.css
```

Once the installation is done, you can open your project folder:
```
cd your-app-name
```

* Start a development server on [http://localhost:3000](http://localhost:3000):

```
npm run dev
```
* Build for production:

```
npm run build
```
* Start a server in production mode(after build) on [http://localhost:3000](http://localhost:3000):

```
npm start
```
* Linting: 

```
npm run lint
```

### Environment Setup
Create a local ```.env.local``` or ```.env``` file with configurations stated in ```.env.example``` for local environment setup. Read more on Environment setup in NextJs [here](https://nextjs.org/docs/basic-features/environment-variables).

### Note 
```index.js``` opts out of static optimization by default. please use ```getStaticProps``` to use static optimization feature of nextJs.

## References :
* [NextJs](https://nextjs.org/docs/getting-started)
* [Redux Saga](https://redux-saga.js.org/docs/introduction/GettingStarted)
* [Redux Persist](https://github.com/rt2zz/redux-persist)
* [ReactJs](https://reactjs.org/docs/getting-started.html)

## Requirements :
Recommended updated versions of 
* NodeJs
* NPM package manager

## FAQ
### What is a boilerplate ?
A boilerplate is a project with generic, maintainable and reusable code, files or content that is intended to be used as a starting point for creating new projects blazing fast without wasting time in setting up the basics each time.
### Why Redux-Saga ?
Redux Saga is a middleware library that allows a Redux store to interact with resources outside of itself in an asynchronous way, including making of HTTP requests to external services, accessing the browser storage, or executing any I/O operations. These operations are known as side effects. Redux-Saga helps us to organize and manage these side effects in easier way.

#### This package uses [restcountries api](https://github.com/apilayer/restcountries) for fetching an example data.

## Contributing
Pull requests and stars shall always be welcomed. For bugs and feature requests, [please create an issue](https://github.com/rishav4101/create-next-saga-persist-app/issues).

## Author
[Rishav Raj Kumar](https://github.com/rishav4101)

## License
Copyright © 2021, Rishav Raj Kumar. Released under the [MIT license](https://github.com/rishav4101/create-next-saga-persist-app/blob/main/LICENSE).
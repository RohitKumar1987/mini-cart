# Minicart React App

This repo contains the react components for Minicart App

## Prerequisite

- npm
- Node 10+ (Recommended) (dev) - Can be managed via [nvm](https://github.com/creationix/nvm)

## Installation

Install the dependencies and devDependencies.

```sh
$ cd mini-cart
$ npm install
```

## Environment Variables

In this project you can define different environmental variables like BASE_URL by editing the .env-cmdrc.json file in project root folder.

## Folder Structure

After successful installation, the project folder structure should look like this:

```sh
.
.
public/
src/
    AppConfig/
    assets/
    components/
        atoms/
        molecules/
        templates/
    shared/
    store/
    views/
    App.js
    .
    .
package.json
README.md
.
.
```

The components are distributed here in such a way that small, reusable components are kept in atoms folder. Molecules folder consists of files which are made from multiple atoms file and a template consists of group of molecules.

## Available Scripts

In the project directory, you can run:

#### Development

```sh
$ npm run start-dev
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

```sh
$ npm run build-dev
```

Builds the app for developer to the `build` folder.

#### QA

```sh
$ npm run start-qa
```

Runs the app in the QA mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

```sh
$ npm run build-qa
```

Builds the app for qa testing in the `build` folder.

#### Production

```sh
$ npm run start-prod
```

Runs the app in the production mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

```sh
$ npm run build-prod
```

Builds the app for production to the `build` folder.

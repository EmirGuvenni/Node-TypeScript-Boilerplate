# Node TypeScript Boilerplate

This template is a boilerplate for Node.js projects. Which includes hot reloading, path alias resolution and testing.

## Getting Started

This project requires [Yarn](https://yarnpkg.com/) because the `yarn.lock` file was modified to fix a deprecation which had a security vulnerability[^1].

Yarn can be installed with `npm i -g yarn` if you don't have it already. After you install Yarn, run the `yarn` command to install all the dependencies. At this point you are ready to start coding.

## Scripts

- `build`: Compiles TypeScript into JavaScript.
- `watch`: Watches for changes in TypeScript and compiles them to JavaScript.
- `lint`: Runs the linter.
- `test`: Runs the unit tests.
- `start`: Starts the compiled code.
- `dev`: Runs your code and hot reloads when changes are made. You don't have to compile your code to use this command.

## Contributing

Anyone can fork and create a pull request. Please explain your changes and provide tests if necessary.

[^1]: The vulnerability was originated by `tscpaths` which is a discontinued dependency. To fix it, manually change the `globby` version of this package to a newer version if you're going to use something other than `yarn` as a package manager.

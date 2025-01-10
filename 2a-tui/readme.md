# Tempinator

### Introduction

We'll be making a simple Node app today that converts from Celsius to Fahrenheit or vice versa. It will take input from users on the command line and output the answer they're looking for.

### Learning Objectives

- How to install third-party libraries.
- How to work with `package.json`.
- How scripts in `package.json` work.
- How to take user input in the terminal using `process.argv`.

### Setup

- Open a terminal in this directory or navigate to it in an existing one.
- Run `npm init -y` to create a `package.json` file.
- Run `npm install jest` to install Jest as a dependency for the project. It will add it to the `package.json` file, as well as create a `node_modules` directory and download Jest and all of its dependencies to that directory.
- Change the `test` field of `package.json` to the value "jest"
- Add a `test-watch` field under `test` with the value "jest --watch-all"

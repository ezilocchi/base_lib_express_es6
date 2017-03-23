# boilerplate code to start a lib with express, mocha, istanbul and codecov

[![travis build](https://img.shields.io/travis/igiagante/base_lib_express_es6.svg)](https://travis-ci.org/igiagante/base_lib_express_es6)
[![codecov coverage](https://img.shields.io/codecov/c/github/igiagante/base_lib_express_es6.svg)](https://codecov.io/gh/igiagante/base_lib_express_es6)


## Getting Started

Clone the repo:
```sh
git clone https://github.com/igiagante/base_lib_express_es6.git
cd base_lib_express_es6
```

Install dependencies:
```sh
npm install
```

Set environment (vars):
```sh
cp .env.base .env
```

Start server:
```sh
# Start server
npm run start
```

Tests:
```sh
# Run unit tests 
npm run test

# Run all tests (integration & unit)
npm run all_tests

# Run coverage only for unit tests
npm run cover

# Run coverage for all the tests
npm run cover:all

# Run tests enforcing code coverage (configured via .istanbul.yml)
npm run check-coverage
```

Lint:
```sh
# Lint code with ESLint
npm run lint

# Fix your code with ESLint
npm run lint:clean
```

##### Deployment

```sh
# npm run semantic-release
```

Refer to [semantic-release](https://github.com/semantic-release/semantic-release) for better understanding.

## Logging

Universal logging library [winston](https://www.npmjs.com/package/winston) is used for logging. It has support for multiple transports.  A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file. We just log to the console for simplicity, you can configure more transports as per your requirement.

#### API logging
Logs detailed info about each api request to console during development.

#### Error logging
Logs stacktrace of error to console along with other details. You should ideally store all error messages persistently.

## Code Coverage
Get code coverage summary on executing `npm run test`

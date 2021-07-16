# Parsify Thousand Separator Plugin

[![Build Status](https://travis-ci.com/parsify-dev/plugin-boilerplate-typescript.svg?branch=master)](https://travis-ci.com/parsify-dev/plugin-boilerplate-typescript) 
[![Coverage Status](https://coveralls.io/repos/github/parsify-dev/plugin-boilerplate-typescript/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/plugin-boilerplate-typescript?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## About

This plugin supports having a thousand separator on the numbers, e.g: `1_000_000`, `123,456,789.52`

## Install

```
$ npm install @parsify/core parsify-thousand-separator
```

## Usage

```js
import Parsify from '@parsify/core';
import parsifyThousandSeparator from 'parsify-thousand-separator';

const parsify = new Parsify([
    parsifyThousandSeparator();
]);
```

## License

MIT

# SortifyJS

[![npm version](https://img.shields.io/npm/v/json.sortify.svg)](https://www.npmjs.com/package/node-generate-csv)
[![Build Status](https://img.shields.io/travis/ThomasR/JSON.sortify.svg)](https://travis-ci.org/ThomasR/JSON.sortify)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/github/ThomasR/JSON.sortify.svg)](https://codeclimate.com/github/ThomasR/JSON.sortify/coverage)
[![Code Climate](https://img.shields.io/codeclimate/github/ThomasR/JSON.sortify.svg)](https://codeclimate.com/github/ThomasR/JSON.sortify/code)

`sortifyjs` sorts object keys alphabetically.

## Install as an NPM module

```bash
$ npm install sortifyjs
```

### Usage

```TypeScript
import { createSort } from 'sortifyjs'
```

or

```JavaScript
const { createSort } = require('sortifyjs');
```

## How to use

### Basic

```TypeScript

interface DataType {
    year: number;
    name: string;
}

const data: DataType[] = [
    {
        year: 25,
        name: "Ana"
    },
    {
        year: 50,
        name: "Thomas"
    },
    {
        year: 18,
        name: "Louise"
    },
    {
        year: 20,
        name: "Alex"
    },
]

createSort<DataType[]>({
    data: data,
    sortBy: "year",
    order: "DESC"
})
```

### Output
```Text
[
    {
        year: 50,
        name: "Thomas"
    },
    {
        year: 25,
        name: "Ana"
    },
    {
        year: 20,
        name: "Alex"
    },
    {
        year: 18,
        name: "Louise"
    },
]
```



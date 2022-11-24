# SortifyJS

[![npm version](https://img.shields.io/npm/v/json.sortify.svg)](https://www.npmjs.com/package/node-generate-csv)
[![Build Status](https://img.shields.io/travis/ThomasR/JSON.sortify.svg)](https://travis-ci.org/ThomasR/JSON.sortify)

`sortifyjs` sorts object keys alphabetically into new array.

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



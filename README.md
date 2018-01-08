# @rammbulanz/xhr

XMLHttpRequest functions wrapping promises.

## Hint
This is a node module.

## Install
`npm install @rammbulanz/xhr`

## Usage

```javascript

// Javascript
var xhr = require("@rammbulanz/xhr");
// Typescript
import * as xhr from '@rammbulanz/xhr';

// ----------------
// GET Requests
// ----------------

// Using classic syntax
xhr.get("URL").then(function(response) {
    // Do something
});

// Using async/await syntax
var response = await xhr.get("URL");
// Do something

// ----------------
// POST Requests
// ----------------

// Using classic syntax
xhr.post("URL").then(function (response) {
    // Do something
});

// Using async/await syntax
var response = await xhr.post("URL");
// Do something

```
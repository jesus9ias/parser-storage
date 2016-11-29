# parser-storage
Local Storage wrapper that's saves json and arrays like text and update them simply.

## Features

Parser-storage can store text (or numbers of course), arrays or json (object) like text on the local storage system and retrieve the data in its original format.

The best feature in relation with arrays and json is the capability of add, update and remove items without parsing the storage element on your side.

Of course the library does that behind scenes.

## Installation

```sh
$ npm install parser-storage
```

On your code:

```sh
import parserStorage from 'parser-storage';
```

You don need to use ES6 syntax but by the moment your project should be compiled with browserify or similar to get parser-storage working, thats good for React for example.

## Operations

The main methods are three:

```javascript
// Create or replace an element on storage (Return false if key is null, so the storage was not saved, return true if was saved).
parserStorage.set('key', 'val');

// Retrieve an element (Return null if the element doesn't exists).
parserStorage.get('key');

// Delete an element (Return false if key does not exists, o true if exists).
parserStorage.remove('key');
```

## Operations for arrays or json

```javascript
// Add a new element to array, if the original value is a text, it's converted to array and the first key will be 0.
parserStorage.push('key', 'val');

// Add a new key-value to a json on the storage, if the original value is an array it's converted to json, each element will have a numeric key, except the last added of course. If originally was a text, its key will be 0.
parserStorage.push('key', 'item', 'val');

// This can update only and array or a json, in the case of array, the item should be a number.
parserStorage.updateItem('key', 'item', 'val');

// Remove an element from the array or json based on its key, called item in this line.
parserStorage.removeItem('key', 'item');
```

## Collaboration

New features could be added soon, all pull request are welcome.

# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sfatex/lotide`

**Require it:**

`const _ = require('@sfatex/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: - Returns  count of  every letter in a string 
* `countOnly`: Returns count of keys with true values of an object if present in an array 
* `eqArrays`:Returns true if two arrays are equal 
* `eqObjects`:Returs true if two objects are equal
* `findKey`: Returs object key whose value equals to the return value of a callback function
* `findKeyByValue`: Returs key of an object whose value equals to the parameter value
* `flatten`:Returns an array after flattening it
* `head`: Returns the first element of an array
* `letterPositions`: Returns an object of count of every letter in a sentence
* `map`: Works like the built-in map function
* `middle`: Returns the middle elements in an array
* `tail`:Returns the array after removing the first element
* `takeUntil`: Returns an array after copying  elements until the condition in the callback is reached
* `without`: Returns an array of elments in array1 which are not present in array2



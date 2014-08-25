# binary-search-tree-adt [![Build Status](https://travis-ci.org/pasangsherpa/binary-search-tree-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/binary-search-tree-adt)

> BinarySearchTree ADT for browser and nodejs


## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/binary-search-tree-adt/master/dist/binary-search-tree-adt.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/binary-search-tree-adt/master/dist/binary-search-tree-adt.js

```sh
$ npm install --save binary-search-tree-adt
```

```sh
$ bower install --save binary-search-tree-adt
```


## Usage

```js
var BinarySearchTree = require('binary-search-tree-adt');
var bst = new BinarySearchTree();

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/binary-search-tree-adt/master/dist/binary-search-tree-adt.min.js"></script>
<script type="text/javascript"> 
  var bst = new BinarySearchTree();

</script>
```


## Documentation

### BinarySearchTree()

Create an empty tree.

### Methods

#### .add(element)

Add an element to tree.

##### element

Type: `object`

the element to be added to the tree.

#### .remove(element) `throws "No such element" error` 

Remove an element from the tree and return the element.

##### element

Type: `object`

the element to be removed from the tree.

#### .removeAllOccurence(element) `No such element" error` 

Remove all occurrences of the element from the tree and return the element.

##### element

Type: `object`

the element to be removed from the tree.

#### .removeMin() `throws "Tree is empty" error` 

Remove the minimum element in the tree and return the element.

#### .removeMax() `throws "Tree is empty" error` 

Remove the maximum element in the tree and return the element.

#### .findMin() `throws "Tree is empty" error` 

Find the minimum element in the tree and return the element.

#### .findMax() `throws "Tree is empty" error` 

Find the maximum element in the tree and return the element.

#### .isEmpty()

Returns true if this tree contains no elements.

Type: `boolean`

whether or not the tree is empty.

#### .size()

Returns the number of elements in the tree.

Type: `int`

the number of element in the tree.

## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)

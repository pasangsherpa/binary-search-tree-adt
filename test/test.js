/*global describe, it */
'use strict';
var assert = require('assert');
var BinarySearchTree = require('../src/binary-search-tree-adt.js');

var bst = new BinarySearchTree();

describe('BinarySearchTree operations test', function() {

	it('should create an empty tree in the beginning', function() {
		assert.equal(bst.isEmpty(), true);
		assert.equal(bst.size(), 0);
		assert.throws(function() {
			bst.removeMin();
			throw new Error('removeMin(): Tree is empty');
		}, Error);
	});

});

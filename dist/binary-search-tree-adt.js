/*!
* binary-search-tree-adt
* v0.0.1 - 2014-08-27
* https://github.com/pasangsherpa/binary-search-tree-adt
* (c) Pasang Sherpa <pgyalzen@gmail.com> (https://github.com/pasangsherpa)
* MIT License
*/
(function() {
	'use strict';
	var BinarySearchTree = function() {
		var root = null,
			count = 0;

		function Node(element) {
			this.element = element || null;
			this.right = this.left = null;
		}

		function add(element) {
			var node = new Node(element);
			root = addAgain(root, node);
			count++;
			return node.element;
		}

		function addAgain(next, node) {
			if (next === null) {
				return node;
			}
			if (node.element < next.element) {
				next.left = addAgain(next.left, node);
			} else {
				next.right = addAgain(next.right, node);
			}
			return next;
		}

		// TODO: Get accessor before removing
		function remove(element) {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
		}

		// TODO: Get accessor before removing
		function removeAllOccurrence(element) {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
		}

		// TODO: Get accessor before removing
		function removeMin() {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
			var current = root,
				previous = root;
			while (current.left !== null) {
				previous = current;
				current = current.left;
			}
			previous.left = null;
		}

		// TODO: Get accessor before removing
		function removeMax() {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
			var current = root,
				previous = root;
			while (current.right !== null) {
				previous = current;
				current = current.right;
			}
			previous.right = null;
		}

		function getRoot() {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
			return root;
		}

		function find(element) {
			if (isEmpty()) {
				throw new Error('find(): Tree is empty.');
			}
			var current = findAgain(root, element);
			if (current === null) {
				throw new Error('find(): No such element.');
			}
			return current.element;
		}

		function findAgain(next, element) {
			if (next === null) {
				return null;
			}
			if (next.element === element) {
				return next;
			}
			var temp = findAgain(next.left, element);
			if (temp === null) {
				temp = findAgain(next.right, element);
			}
			return temp;
		}

		function findMin() {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
			var current = root;
			while(current.left !== null) {
				current = current.left;
			}
			return current.element;
		}

		function findMax() {
			if (isEmpty()) {
				throw new Error('removeMin(): Tree is empty.');
			}
			var current = root;
			while(current.right !== null) {
				current = current.right;
			}
			return current.element;
		}

		function isEmpty() {
			return count === 0;
		}

		function size() {
			return count;
		}

		return {
			add: add,
			remove: remove,
			removeAllOccurrence: removeAllOccurrence,
			removeMin: removeMin,
			removeMax: removeMax,
			getRoot: getRoot,
			find: find,
			findMin: findMin,
			findMax: findMax,
			isEmpty: isEmpty,
			size: size
		};
	};

	if (typeof define === 'function' && define.amd) {
		define(function() {
			return BinarySearchTree;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = BinarySearchTree;
	} else {
		window.BinarySearchTree = BinarySearchTree;
	}
})();

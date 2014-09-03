(function() {
	'use strict';
	var BinarySearchTree = function() {
		var root = null,
			count = 0;

		function Node(element) {
			this.element = element || null;
			this.parent = this.right = this.left = null;
		}

		function add(element) {
			var node = new Node(element),
				current, parent;
			current = parent = root;

			while (current !== null) {
				if (element > current.element) {
					parent = current;
					current = current.right;
				} else {
					parent = current;
					current = current.left;
				}
			}

			if (parent === null) {
				root = node;
				return;
			}

			if (parent.element > element) {
				parent.left = node;
			} else {
				parent.right = node;
			}

			node.parent = parent;
			count++;
			return node.element;
		}

		// TODO: Get successor before removing
		function remove(element) {
			if (isEmpty()) {
				throw new Error('remove(): Tree is empty.');
			}
		}

		// TODO: Get successor before removing
		function removeAllOccurrence(element) {
			if (isEmpty()) {
				throw new Error('removeAllOccurrence(): Tree is empty.');
			}
		}

		// TODO: Get successor before removing
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

		// TODO: Get successor before removing
		function removeMax() {
			if (isEmpty()) {
				throw new Error('removeMax(): Tree is empty.');
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
				throw new Error('getRoot(): Tree is empty.');
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

		function findMinNode(node) {
			var current = node || root;
			while (current.left !== null) {
				current = current.left;
			}
			return current;
		}

		function findMaxNode(node) {
			var current = node || root;
			while (current.right !== null) {
				current = current.right;
			}
			return current;
		}

		function findMin(node) {
			if (isEmpty()) {
				throw new Error('findMin(): Tree is empty.');
			}
			return findMinNode(node).element;
		}

		function findMax(node) {
			if (isEmpty()) {
				throw new Error('findMax(): Tree is empty.');
			}
			return findMaxNode(node).element;
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

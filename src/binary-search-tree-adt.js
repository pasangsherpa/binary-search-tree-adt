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
			root = addTo(root, node);
			count++;
			return node.element;
		}

		function addTo(current, node) {
			if (current === null) {
				return node;
			}
			if (node.element < current.element) {
				current.left = addTo(current.left, node);
			} else {
				current.right = addTo(current.right, node);
			}
			return current;
		}

		// TODO: Get accessor before removing
		function remove(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		// TODO: Get accessor before removing
		function removeAllOccurrence(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		// TODO: Get accessor before removing
		function removeMin() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
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
				throw new Error("removeMin(): Tree is empty.");
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
				throw new Error("removeMin(): Tree is empty.");
			}
			return root;
		}

		function find(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function findMin() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
			var current = root;
			while(current.left !== null) {
				current = current.left;
			}
			return current.element;
		}

		function findMax() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
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
		}
	}

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

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

		}

		function remove(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function removeAllOccurrence(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function removeMin() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function removeMax() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function getRoot() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
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
		}

		function findMax() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
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

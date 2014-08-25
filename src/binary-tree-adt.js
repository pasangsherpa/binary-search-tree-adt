(function() {
	'use strict';
	var BinarySearchTree = function() {

		function add(element) {

		}

		function remove(element) {

		}

		function removeAllOccurrence(element) {

		}

		function removeMin() {

		}

		function removeMax() {

		}

		function getRoot() {

		}

		function find(element) {

		}

		function findMin() {

		}

		function findMax() {

		}

		function isEmpty() {

		}

		function size() {

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

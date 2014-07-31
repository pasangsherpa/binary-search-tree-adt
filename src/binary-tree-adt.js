(function() {
    'use strict';
    var BinaryTree = {};

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return BinaryTree;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = BinaryTree;
    } else {
        window.BinaryTree = BinaryTree;
    }
})();

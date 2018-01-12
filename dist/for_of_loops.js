'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//vidu1
var catenories = exports.catenories = ['hardware', 'software', 'vaporware'];
//vidu3

var codes = "ABCDED";
var count = exports.count = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = codes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var code = _step.value;
        (exports.count = count += 1, count - 1)
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
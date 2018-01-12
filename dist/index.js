"use strict";

var _arrow_function = require("./arrow_function");

var _literal_extensions = require("./literal_extensions");

var _for_of_loops = require("./for_of_loops");

var _octal_binary = require("./octal_binary");

var _template_literals = require("./template_literals");

console.log((0, _arrow_function.getPrice2)());
//videu3
// import {abc} from "./base";
//
// console.log(abc)

// var getPrice = () => 10;
// console.log(getPrice());
//Arrow_function
//vidu2

console.log((0, _arrow_function.getPrice3)(2));
//vidu4

console.log((0, _arrow_function.getPrice4)(2, .07));
//vidu 5

console.log((0, _arrow_function.getPrice5)(2, .07));
//vidu6
// document.addEventListener('click',()=>console.log(this));
//vidu8

_arrow_function.invoice.process();
//vdu10

_arrow_function.invoice1.process1()();
//vidu11

_arrow_function.invoice1.process1().bind(_arrow_function.newInvoice)();
//vidu12
_arrow_function.invoice1.process1().call(_arrow_function.newInvoice);
//vidu14
console.log(_arrow_function.getPrice2.hasOwnProperty("prototype"));

//Object Literal Extensions
//vidu1

console.log(_literal_extensions.productView);
//vidu2

console.log(_literal_extensions.productView1.calculateValue());
//vidu4

console.log(_literal_extensions.productView2["calculate value"]());
//vidu5

console.log(_literal_extensions.productView3);
//vidu 8

console.log(_literal_extensions.productView4.productId);
//for...of loops
//vidu1
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = _for_of_loops.catenories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }
    //vidu 3
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

console.log(_for_of_loops.count);
//Octal and Binary
//vidu1

console.log(_octal_binary.value);
//Template Literals
//vidu1

console.log("Invoice Number: " + _template_literals.invoiceNum);
//vidu5

(0, _template_literals.showMessage)("Invoice Number: " + _template_literals.invoiceNum);
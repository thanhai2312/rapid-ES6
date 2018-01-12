"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//vidu2
var getPrice2 = exports.getPrice2 = function getPrice2() {
    return 20;
};
// console.log(getPrice());
//vidu3
var getPrice3 = exports.getPrice3 = function getPrice3(count) {
    return count * 4.00;
};
//vidu4
var getPrice4 = exports.getPrice4 = function getPrice4(count, tax) {
    return count * 4.00 * (1 + tax);
};
//vidu5
var getPrice5 = exports.getPrice5 = function getPrice5(count, tax) {
    var price = count * 4.00;
    price *= 1 + tax;
    return price;
};
//vidu6
// document.addEventListener('click', function () {
//     console.log(this);
// });
//vidu8
var invoice = exports.invoice = {
    number: 123,
    process: function process() {
        console.log(this);
    }
};
//vidu10
var invoice1 = exports.invoice1 = {
    number1: 123,
    process1: function process1() {
        var _this = this;

        return function () {
            return console.log(_this.number1);
        };
    }
};
//vidu11
var newInvoice = exports.newInvoice = {
    number1: 456
};
//vidu14
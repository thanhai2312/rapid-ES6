'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _productView2, _mutatorMap;

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//vidu 1
var price = 5.99,
    quantity = 30;
var productView = exports.productView = {
    price: price,
    quantity: quantity
};
//vidu2
var productView1 = exports.productView1 = {
    price: price,
    quantity: quantity,
    calculateValue: function calculateValue() {
        return this.price * this.quantity;
    }
};
//vidu4
var productView2 = exports.productView2 = {
    price: price,
    quantity: quantity,
    "calculate value": function calculateValue() {
        return this.price * this.quantity;
    }
};
//vidu5
var field = 'toi la hai';
var productView3 = exports.productView3 = _defineProperty({}, field, price);
//vidu 8
var ident = exports.ident = 'productId';
var productView4 = exports.productView4 = (_productView2 = {}, _mutatorMap = {}, _mutatorMap[ident] = _mutatorMap[ident] || {}, _mutatorMap[ident].get = function () {
    return true;
}, _mutatorMap[ident] = _mutatorMap[ident] || {}, _mutatorMap[ident].set = function (value) {}, _defineEnumerableProperties(_productView2, _mutatorMap), _productView2);
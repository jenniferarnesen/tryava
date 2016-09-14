'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.foo = foo;

var _bar = require('./bar');

function foo(x) {
	var total = x + 2 + (0, _bar.bar)();
}
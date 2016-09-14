'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _foo = require('./src/foo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('test1', function (t) {
    t.pass();
});

(0, _ava2.default)('test2', async function (t) {
    var bar = Promise.resolve('bar');

    t.is((await bar), 'bar');
});

(0, _ava2.default)('test3', function (t) {
    var res = (0, _foo.foo)(5);
    t.equal(res, 10);
});
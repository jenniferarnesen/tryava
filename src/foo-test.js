import test from 'ava'
import {foo} from './foo'

import * as bar from './bar'

test('test with no stub', t => {
	t.is(foo(5), 10)
});

test('test with stub', t => {
	sinon.stub(bar, 'bar').returns(20)
	t.is(foo(5), 27, 'wrong value')
});
import test from 'ava';

import {units} from './src';

test('units', t => {
	t.is(typeof units, 'object');
});

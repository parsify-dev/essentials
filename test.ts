import test from 'ava';

import {units, bin, oct, hex, sci} from './src';

test('units', t => {
	t.is(typeof units, 'object');
});

test('binary', t => {
	t.is(bin(100), '1100100');
});

test('octal', t => {
	t.is(oct(100), '144');
});

test('hexadecimal', t => {
	t.is(hex(100), '64');
});

test('scientific', t => {
	t.is(sci(100), '1e+2');
});

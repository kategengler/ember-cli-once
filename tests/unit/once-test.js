import Em from 'ember';
import { module, test } from 'qunit';
import once from 'once';

module('once');

test('returns a function', function (assert) {
	var result = once();
	assert.equal(typeof result, 'function', 'result is function');
});

test('function returns a result', function (assert) {
	var fn = once(function () {
		return 'hello';
	});
	var result = fn();
	assert.equal(result, 'hello', 'result is returned');
});

test('context is passed', function (assert) {
	var obj = { foo: 'bar' };
	obj.fn = once(function () {
		return this.foo.toUpperCase();
	});
	var result = obj.fn();
	assert.equal(result, 'BAR', 'context is passed');
});

test('only executed once', function (assert) {
	var counter = 0;
	var foo = Em.Object.create({
		bar: once(function () {
			counter++;
		})
	});
	foo.bar();
	assert.equal(counter, 1, 'function is executed once');
	foo.bar();
	assert.equal(counter, 1, 'function is not executed twice');
});

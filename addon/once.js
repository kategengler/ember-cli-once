import Em from 'ember';
var observer = Em.observer;

var makeFunction = function (fn) {
	return (typeof fn === 'function') ? fn : function () {};
};

var _once = function (fn) {
	var result;
	var executed = false;
	fn = makeFunction(fn);
	return function () {
		if (!executed) {
			result = fn.apply(this, arguments);
			executed = (result !== true);
		}
		return result;
	};
};

export default function once (fn) {
	// use observer as descriptor
	// only initialized on first call
	var obs = observer(function () {
		var prop = _once(fn);
		// naiive search and replace
		for (var key in this) {
			if (this[key] === obs) {
				this[key] = prop;
			}
		}
		return prop.apply(this, arguments);
	});
	return obs;
};

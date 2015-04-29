# ember-cli-once

[![master branch build status][travis-svg]][travis-url]

Ember CLI one-time calculation addon.

`ember-cli-once` exposes a factory which limits a function's executions. Its
return value will be calculated on first execution and cached. Subsequent calls
will immediately return the cached result.

## Example

```js
import Ember from 'ember';
import once from 'once';

var i = 0;
var foo = Ember.Object.create({
	increment: once(function () {
		// only ever hit once
		return ++i;
	})
});

foo.increment(); // -> 1
foo.increment(); // -> 1
```

## Installing

With [npm][npm]:

```sh
$ npm install --save ember-cli-once
```

Or with [Ember CLI][cli]:

```sh
$ ember install ember-cli-once
```

## License

[MIT license](LICENSE.md).

[travis-svg]: https://travis-ci.org/j-/ember-cli-once.svg?branch=master
[travis-url]: https://travis-ci.org/j-/ember-cli-once
[ember]: http://emberjs.com/
[npm]: https://www.npmjs.com/
[cli]: http://www.ember-cli.com/

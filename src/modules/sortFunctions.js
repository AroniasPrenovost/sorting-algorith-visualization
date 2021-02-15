// es6 shuffle 
function es6shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}

	return a;
}

// es6 approach #2 
function es6shuffleTwo(a) {
	var x = a.sort(function() {
		return .5 - Math.random();
	});
	
	return x; 
}

// prototype approach to shuffle 
function prototype(a) {
	Array.prototype.shuffle = function() {
		let m = this.length, i;
		while (m) {
			i = (Math.random() * m--) >>> 0;
			[this[m], this[i]] = [this[i], this[m]]
		}
		return this;
	}

	return a.shuffle();
}

function nativeSwap(a) {
  var n = a.length, i = -1, j, k;
  while (++i < n) {
    j = Math.floor(Math.random() * n);
    k = Math.floor(Math.random() * n);
    let t = a[j];
    a[j] = a[k];
    a[k] = t;
  }
  return a; 
}

export {es6shuffle, es6shuffleTwo, prototype, nativeSwap};

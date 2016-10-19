
(function () {
	var a =10
	var f = function(x){ return x*a};
	window.by10=f;
})();

(function () {
	var a =20
	var f = function(x){ return x*a};
	window.by20=f;
})();

console.log(by10(4));
console.log(by20(4));
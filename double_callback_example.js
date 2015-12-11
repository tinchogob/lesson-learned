var mod = process.argv[2] || 5;

var getNumber = function(n, callback) {
	//choose pseudo random number from 0 to 10
	var i = Math.random() * n * 2;
	
	if (i<n) {
		callback(undefined, i*(-1));
	}
	callback(undefined, i-n);
};

getNumber(mod, function(error, number) {
	console.log("Hello, after some processing The number is %d", number);
});
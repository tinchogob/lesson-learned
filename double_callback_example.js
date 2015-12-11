var waitAndCallback = function(callback) {
	//choose pseudo random number from 0 to 10
	var i = Math.random() * 10;
	
	if (i<5) {
		callback(undefined, i*(-1));
	}
	callback(undefined, i);
};


waitAndCallback(function(error, number) {
	console.log("Hello, after some processing The number is %d", number);
});
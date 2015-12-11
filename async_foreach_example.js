var util = require('./util.js');

for (var i = 0; i < 10; i++) {
	util.request("Iteration: " + i, function(error, response) {
		console.log(response);
	});
};
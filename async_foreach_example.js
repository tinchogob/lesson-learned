var util = require('./util.js');

for (var i = 0; i < 10; i++) {
	util.request(i, function(error, response) {
		console.log("iteracion %d respondio %d", i, response);
	});
};
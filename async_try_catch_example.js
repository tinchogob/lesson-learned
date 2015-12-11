var util = require('./util.js');

try {
	util.request(1, function(error, response) {
		console.log("throwing exception!");
		throw new Error("caught exception");
	});
} catch (e) {
	console.log('CATCHED E!', e);
}

console.log('No error found!');
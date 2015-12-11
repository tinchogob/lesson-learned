function request(msg, callback) {
	setTimeout(function() {
		return callback(undefined, msg);
	}, 1000 * Math.random() * 5);
};

module.exports = {
	request: request
};
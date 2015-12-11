function getDog(name, callback) {
	var dog = {
		bark: function() {
			return 'Bark, Bark!';
		},
		name: name
	};

	callback(undefined, dog.name);	
	
	return dog;
};

var dog = getDog('spot', function(error, name) {
	console.log("The dog named %s said %s", name, dog.bark());
});
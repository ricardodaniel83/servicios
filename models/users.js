var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var users = new Schema({
	name: String,
	email: String,
	pass: String,
	status: String,
	positionX: String,
	positionY: String,
	create: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', users);
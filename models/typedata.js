var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var typedata = new Schema({
	name: String,
	description: String,
	create: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Typedata', typedata);
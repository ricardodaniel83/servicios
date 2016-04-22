var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var filemanaged = new Schema({
	filename: String,
	uri: String,
	filemine: String,
	filesize: String,
	status: String,
	uid: String,
	create: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Filemanaged', filemanaged);
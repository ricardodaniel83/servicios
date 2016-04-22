var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var Users = mongoose.model('Users');

var taxonomies = new Schema({
	name: String,
	description: String,
	type: String,
	uid: {type: Schema.ObjectId, ref: "Users" }
});

module.exports = mongoose.model('Taxonomies', taxonomies);
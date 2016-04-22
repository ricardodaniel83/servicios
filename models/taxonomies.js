var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
//var Users = mongoose.model('Usuarios');

var taxonomies = new Schema({
	name: String,
	description: String,
	type: String,
	uid: {type: Schema.ObjectId, ref: "Usuarios" }
});

module.exports = mongoose.model('Taxonomies', taxonomies);
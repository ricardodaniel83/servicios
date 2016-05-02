var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
//var Users = mongoose.model('Usuarios');
//var File = mongoose.model('Filemanaged');

var taxonomies = new Schema({
	name: String,
	description: String,
	type: String,
	column: Number,
	state: String,
	active: Number,
	fbid:{type: Schema.Types.ObjectId, ref: "Filemanaged"},
	fhid:{type: Schema.Types.ObjectId, ref: "Filemanaged"}
	//uid: {type: Schema.Types.ObjectId, ref: "Users" }
});

module.exports = mongoose.model('Taxonomies', taxonomies);
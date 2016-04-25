var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
//var Users = mongoose.model('Usuarios');

var taxonomies = new Schema({
	name: String,
	description: String,
	type: String,
	fid:{type: Schema.Types.ObjectId, ref: "Filemanaged"}
	//uid: {type: Schema.Types.ObjectId, ref: "Users" }
});

module.exports = mongoose.model('Taxonomies', taxonomies);
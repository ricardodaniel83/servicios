var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var users = new Schema({
	username: String,
	email: String,
	password: String,
	state: String,
	active: Number,
	positionX: String,
	positionY: String,
	picture :{type: Schema.Types.ObjectId, ref: "Filemanaged"},
	//uid: {type: Schema.Types.ObjectId, ref: "Users" }
	create: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', users);
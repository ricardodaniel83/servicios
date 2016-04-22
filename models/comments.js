var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
//var Users = mongoose.model('Users');
//var Proposals = mongoose.model('Proposals');

var comments = new Schema({
	description: String,
	state: String,
	visitsAll: Number,
	likeAll: Number,
	dislikeAll: Number,
	shareAll: Number,
	favoriteAll: Number,
	abvocacyAll: Number,
	disagreementAll: Number,
	neutralAll: Number,
	uid: {type: Schema.ObjectId, ref: "Users" },
	pid: {type: Schema.ObjectId, ref: "Proposals"},
	positionX: String,
	positionY: String,
	create: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Comments', comments);
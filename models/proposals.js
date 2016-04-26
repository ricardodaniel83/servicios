var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var Taxonomies = mongoose.model('Taxonomies');
//var Typedata = mongoose.model('Typedata');
//var Users = mongoose.model('Users');
//var Filemanaged = mongoose.model('Filemanaged');

var proposals = new Schema({
	name: String,
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
	uid: {type: Schema.Types.ObjectId, ref: "Users"},
	positionX: String,
	positionY: String,
	create: { type: Date, default: Date.now },
	tid: { type: Schema.Types.ObjectId, ref: "Taxonomies"}
	//typedata: [{type: Schema.ObjectId, ref: "Typedata"}],
	//files: [{type: Schema.ObjectId, ref: "Filemanaged"}]

});

module.exports = mongoose.model('Proposals', proposals);
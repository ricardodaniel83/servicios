var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
//var Users = mongoose.model('Users');
//var Proposals = mongoose.model('Proposals');

var comments = new Schema({
	description: String,
	evaluation: Number,
	stand:String,
	state: String,
	visitsAll: Number,
	readAll:Number,
	likeAll: Number,
	likeViewdAll: Number,
	dislikeAll: Number,
	dislikeViewAll: Number,
	shareAll: Number,
	favoriteAll: Number,
	abvocacyAll: Number,
	disagreementAll: Number,
	neutralAll: Number,
	uid: {type: Schema.Types.ObjectId, ref: "Users" },
	pid: {type:Schema.Types.ObjectId, ref:"Proposals"},
	cidFather: {type: Schema.Types.ObjectId, ref:"Comments" },
	positionX: String,
	positionY: String,
	create: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Comments', comments);
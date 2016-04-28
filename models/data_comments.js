var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var dataComment = new Schema({
	value: Number,
	state: String,
	tdid: {type: Schema.Types.ObjectId, ref: "Typedata" },
	cid: {type: Schema.Types.ObjectId, ref: "Comments" },
	uid: {type: Schema.Types.ObjectId, ref: "Users"},
	create: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DataComment', dataComment);
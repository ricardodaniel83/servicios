var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var dataProposal = new Schema({
	value: Number,
	state: String,
	tdid: {type: Schema.Types.ObjectId, ref: "Typedata" },
	pid: {type: Schema.Types.ObjectId, ref: "Proposals" },
	uid: {type: Schema.Types.ObjectId, ref: "Users"},
	create: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DataProposal', dataProposal);
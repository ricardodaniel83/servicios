var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var filemanaged = new Schema({
	filename: String, //nombre
	uri: String, // url  public://slider/1WEB.jpg
	filemine: String,  // extencion jpg png pdf ...
	filesize: Number,  //tamaño kb
	status: String,		// 
	uid: String,		// id del usuairo
	create: { type: Date, default: Date.now } //fecha de creación
});

module.exports = mongoose.model('Filemanaged', filemanaged);
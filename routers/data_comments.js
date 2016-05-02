module.exports = function(router){
	var DataComment = require('../models/data_comments');
	addDataComment = function(req,res){
		var objDataComment = new DataComment();
			objDataComment.value = req.body.value ;
			objDataComment.state = req.body.state;
			objDataComment.tdid = req.body.tdid;
			objDataComment.pid = req.body.pid;
			objDataComment.uid = req.body.uid;
			
		objDataComment.save(function(err){
			if(!err) res.json({message:'DataComment adicionada'});
			else console.log('ERROR:'+err);
		});
	}
	//PUT UPDATE Id
	updateDataComment = function(req,res){
		DataComment.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.json({message:'DataComment Actualizada con exito'});
			else console.log('ERROR:'+err);
		});
	}
	//API Routes
	router.route('/api/datacomment').post(addDataComment);
	router.route('/api/datacomment/:id').put(updateDataComment);
}
module.exports = function(router){
	var Comments = require('../models/comments');
	//GET
	findAllComments = function(req, res){
		Comments.find(function(err,objComments){
			if(!err) res.send(objComments);
			else console.log('ERROR:'+err);
		});
	}

	//GET Id
	findByIdComment = function(req,res){
		Comments.findById(req.params.id,function(err,objComments){
			if(!err) res.json(objComments);
			else console.log('ERROR:'+err);
		});
	}

	//POST
	addComment = function(req,res){
		//console.log('POST');
		//console.log(req.body);
		var objComment = new Comments();
			objComment.description = req.body.description;
			objComment.state = req.body.state;
			objComment.visitsAll = req.body.visitsAll;
			objComment.likeAll = req.body.likeAll;
			objComment.dislikeAll = req.body.dislikeAll;
			objComment.shareAll = req.body.favoriteAll;
			objComment.favoriteAll = req.body.favoriteAll;
			objComment.abvocacyAll = req.body.abvocacyAll;
			objComment.disagreementAll= req.body.disagreementAll;
			objComment.neutralAll = req.body.neutralAll;
			//objComment.uid = req.body.uid;
			objComment.pid = req.body.pid;
			objComment.positionX = req.body.positionX;
			objComment.positionY = req.body.positionY;
			objComment.create = req.body.create;
		
		objComment.save(function(err){
			if(!err) res.json({message:'Comentario adicionada'});
			else console.log('ERROR:'+err);
		});
	}

	//PUT UPDATE Id
	updateComment = function(req,res){
		console.log(req.body);
		Comments.findById(req.params.id,function(err,objComment){
			objComment.description = req.body.description;
			objComment.state = req.body.state;
			objComment.visitsAll = req.body.visitsAll;
			objComment.likeAll = req.body.likeAll;
			objComment.dislikeAll = req.body.dislikeAll;
			objComment.shareAll = req.body.favoriteAll;
			objComment.favoriteAll = req.body.favoriteAll;
			objComment.abvocacyAll = req.body.abvocacyAll;
			objComment.disagreementAll= req.body.disagreementAll;
			objComment.neutralAll = req.body.neutralAll;
			//objComment.uid = req.body.uid;
			objComment.pid = req.body.pid;
			objComment.positionX = req.body.positionX;
			objComment.positionY = req.body.positionY;
			objComment.create = req.body.create;

			objComment.save(function(err){
				if(!err) res.json({message:'Comentario Actualizada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}

	//DELETE 

	deleteComment = function(req,res){
		Comments.findById(req.params.id,function(err,objComment){
			objComment.remove(function(err){
				if(!err) res.json({message:'Comentarios eliminada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}
	//API Routes
	router.route('/api/comments').get(findAllComments);
	router.route('/api/comments').post(addComment);
	router.route('/api/comments/:id').get(findByIdComment);
	router.route('/api/comments/:id').put(updateComment);
	router.route('/api/comments/:id').delete(deleteComment);
}

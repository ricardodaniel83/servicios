module.exports = function(router){
	var Proposals = require('../models/proposals');
	//GET
	findAllProposals = function(req, res){
		Proposals.find(function(err,objProposals){
			if(!err) res.send(objProposals);
			else console.log('ERROR:'+err);
		});
	}
	//GET Listad de Propuestas por Taxonomia
	listProposalTaxonomy = function(req,res){
		Proposals.find({tid:req.params.id})
			.populate({path:'tid'})
			.exec(function(err,proposal){
				if(!err) res.json(proposal);
				else console.log('ERROR:'+err);
			});
	}

	countProposalTaxonomy = function(req,res){
		Proposals.find({tid:req.params.id}).count(function(err,count){
				if(!err){
						res.json({data:count});
				} 
				else console.log('ERROR:'+err);
		});
	}
	//GET Id
	findByIdProposals= function(req,res){
		Proposals.findById(req.params.id,function(err,objProposals){
			if(!err) res.json(objProposals);
			else console.log('ERROR:'+err);
		});
	}

	//POST
	addProposal = function(req,res){
		//console.log('POST');
		console.log(req.body);
		var objProposal = new Proposals();
			objProposal.name = req.body.name;
			objProposal.description = req.body.description;
			objProposal.state = req.body.state;
			objProposal.visitsAll = req.body.visitsAll;
			objProposal.likeAll = req.body.likeAll;
			objProposal.dislikeAll = req.body.dislikeAll;
			objProposal.shareAll = req.body.favoriteAll;
			objProposal.favoriteAll = req.body.favoriteAll;
			objProposal.abvocacyAll = req.body.abvocacyAll;
			objProposal.disagreementAll= req.body.disagreementAll;
			objProposal.neutralAll = req.body.neutralAll;
			//objProposal.uid = req.body.uid;
			objProposal.positionX = req.body.positionX;
			objProposal.positionY = req.body.positionY;
			//objProposal.create = req.body.create;
			objProposal.tid = req.body.tid;
			//objProposal.typedata = req.body.typedata;
			//objProposal.files = req.body.files;
		
		objProposal.save(function(err){
			if(!err) res.json({message:'Taxonomia adicionada'});
			else console.log('ERROR:'+err);
		});
	}

	//PUT UPDATE Id
	updateProposal = function(req,res){
		console.log(req.body);
		Proposals.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.json({message:'Propuesta Actualizada con exito'});
			else console.log('ERROR:'+err);
		});
	}

	//DELETE 

	deleteProposal = function(req,res){
		Proposals.findById(req.params.id,function(err,objProposal){
			objProposal.remove(function(err){
				if(!err) res.json({message:'Taxonomia eliminada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}
	//API Routes
	router.route('/proposals').get(findAllProposals);
	router.route('/proposals/:id/taxonomy').get(listProposalTaxonomy);
	router.route('/proposals/:id/taxonomy/count').get(countProposalTaxonomy);
	router.route('/proposals').post(addProposal);
	router.route('/proposals/:id').get(findByIdProposals);
	router.route('/proposals/:id').put(updateProposal);
	router.route('/proposals/:id').delete(deleteProposal);
}

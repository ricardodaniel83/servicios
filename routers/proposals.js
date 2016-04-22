module.exports = function(router){
	var Proposals = require('../models/proposals');
	//GET
	findAllProposals = function(req, res){
		Proposals.find(function(err,objProposals){
			if(!err) res.send(objProposals);
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
		//console.log(req.body);
		var objProposal = new Proposals();
			objProposal.name = req.body.name;
			objProposal.description = req.body.description;
			objProposal.type = req.body.type;
			objProposal.uid = req.body.uid;
		
		objProposal.save(function(err){
			if(!err) res.json({message:'Taxonomia adicionada'});
			else console.log('ERROR:'+err);
		});
	}

	//PUT UPDATE Id
	updateProposal = function(req,res){
		console.log(req.body);
		Proposals.findById(req.params.id,function(err,objProposal){
			objProposal.name = req.body.name;
			objProposal.description = req.body.description;
			objProposal.type= req.body.type;

			objProposal.save(function(err){
				if(!err) res.json({message:'Taxonomia Actualizada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}

	//DELETE 

	deleteProposal = function(req,res){
		Proposals.findById(req.params.id,function(err,objProposal){
			objProposal.remove(function(err){
				if(!err) console.json({message:'Taxonomia eliminada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}
	//API Routes
	router.route('/Proposals').get(findAllProposals);
	router.route('/Proposals').post(addProposal);
	router.route('/Proposals/:id').get(findByIdProposal);
	router.route('/Proposals/:id').put(updateProposal);
	router.route('/Proposals/:id').delete(deleteProposal);
}

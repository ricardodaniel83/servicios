module.exports = function(router){
	var Taxonomies = require('../models/taxonomies');
	//GET
	findAllTaxonomies = function(req, res){
		Taxonomies.find(function(err,objTaxonomies){
			if(!err) res.send(objTaxonomies);
			else console.log('ERROR:'+err);
		});
	}

	//GET Id
	findByIdTaxonomy = function(req,res){
		Taxonomies.findById(req.params.id,function(err,objTaxonomies){
			if(!err) res.json(objTaxonomies);
			else console.log('ERROR:'+err);
		});
	}

	//POST
	addTaxonomy = function(req,res){
		//console.log('POST');
		//console.log(req.body);
		var objTaxonomy = new Taxonomies();
			objTaxonomy.name = req.body.name;
			objTaxonomy.description = req.body.description;
			objTaxonomy.type = req.body.type;
			objTaxonomy.uid = req.body.uid;
		
		objTaxonomy.save(function(err){
			if(!err) res.json({message:'Taxonomia adicionada'});
			else console.log('ERROR:'+err);
		});
	}

	//PUT UPDATE Id
	updateTaxonomy = function(req,res){
		console.log(req.body);
		Taxonomies.findById(req.params.id,function(err,objTaxonomy){
			objTaxonomy.name = req.body.name;
			objTaxonomy.description = req.body.description;
			objTaxonomy.type= req.body.type;

			objTaxonomy.save(function(err){
				if(!err) res.json({message:'Taxonomia Actualizada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}

	//DELETE 

	deleteTaxonomy = function(req,res){
		Taxonomies.findById(req.params.id,function(err,objTaxonomy){
			objTaxonomy.remove(function(err){
				if(!err) console.json({message:'Taxonomia eliminada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}
	//API Routes
	router.route('/taxonomies').get(findAllTaxonomies);
	router.route('/taxonomies').post(addTaxonomy);
	router.route('/taxonomies/:id').get(findByIdTaxonomy);
	router.route('/taxonomies/:id').put(updateTaxonomy);
	router.route('/taxonomies/:id').delete(deleteTaxonomy);
}

module.exports = function(router){
	var FileManaged = require('../models/filemanaged');
	

	//GET
	findAllFileManaged = function(req, res){
		FileManaged.find(function(err,objFileManaged){
			if(!err) res.send(objFileManaged);
			else console.log('ERROR:'+err);
		});
	}
	//GET Id
	findByIdFileManaged = function(req,res){
		console.log('entre');
		FileManaged.findById(req.params.id,function(err,objFileManaged){
			if(!err) res.json(objFileManaged);
			else console.log('ERROR:'+err);
		});
	}
	//POST
	addFileManaged = function(req,res){
		//console.log('POST');
		//console.log(req.body);
		var objFileManaged = new FileManaged();
			objFileManaged.filename = req.body.filename ;
			objFileManaged.uri = req.body.uri;
			objFileManaged.filemine = req.body.filemine;
			objFileManaged.filesize = req.body.filesize;
			objFileManaged.status = req.body.status;
			//objFileManaged.fhid = req.body.fhid;
			objFileManaged.uid = req.body.uid;
		
		objFileManaged.save(function(err){
			if(!err) res.json({message:'Taxonomia adicionada'});
			else console.log('ERROR:'+err);
		});
	}
	//PUT UPDATE Id
	updateFileManaged = function(req,res){
		//console.log(req.body);
		//console.log(req.params.id);
		FileManaged.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.json({message:'Archivo Actualizada con exito'});
			else console.log('ERROR:'+err);
		});
	}

	//DELETE 

	deleteFileManaged= function(req,res){
		FileManaged.findById(req.params.id,function(err,objFileManaged){
			objFileManaged.remove(function(err){
				if(!err) res.json({message:'Archivo eliminada con exito'});
				else console.log('ERROR:'+err);
			});
		});
	}
	//API Routes
	/*router.route('/taxonomies').get(findAllTaxonomies);
	router.route('/taxonomies/FileManaged').get(listTaxonomyByFileManaged);
	router.route('/taxonomies').post(addTaxonomy);
	router.route('/taxonomies/:id').get(findByIdTaxonomy);
	*/


	router.route('/filemanaged').get(findAllFileManaged);
	router.route('/filemanaged').post(addFileManaged);
	router.route('/filemanaged/:id').get(findByIdFileManaged);
	router.route('/filemanaged/:id').put(updateFileManaged);
	router.route('/filemanaged/:id').delete(deleteFileManaged);
}
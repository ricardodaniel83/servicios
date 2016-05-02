module.exports = function(router){
	var DataProposal = require('../models/data_proposal');
	addDataProposal = function(req,res){
		var objDataProposal = new DataProposal();
			objDataProposal.value = req.body.value ;
			objDataProposal.state = req.body.state;
			objDataProposal.tdid = req.body.tdid;
			objDataProposal.pid = req.body.pid;
			objDataProposal.uid = req.body.uid;
			
		objDataProposal.save(function(err){
			if(!err) res.json({message:'DataProposal adicionada'});
			else console.log('ERROR:'+err);
		});
	}
	//PUT UPDATE Id
	updateDataProposal = function(req,res){
		DataProposal.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.json({message:'Archivo Actualizada con exito'});
			else console.log('ERROR:'+err);
		});
	}
	//API Routes
	router.route('/api/dataproposal').post(addDataProposal);
	router.route('/api/dataproposal/:id').put(updateDataProposal);
}